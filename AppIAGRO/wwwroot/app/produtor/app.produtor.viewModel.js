var app = app || {};
app.produtor = app.produtor || {};
app.produtor.model = app.produtor.model || {};

app.produtor.viewModel = function () {

    const header = new Headers({
        "Content-Type": "application/json",
        "X-Custom-Header": "ProcessThisImmediately",
    });
    var model = app.produtor.model;

    ko.applyBindings(new function () {
        var self = this;

        self.BuscarProdutoresNaApi = function () {
            fetch('http://localhost:62978/api/v1/Produtor/BuscarTodos')
                .then(p => p.json())
                .then(listProdutores => {
                    listProdutores.forEach(function (item) {
                        self.produtores.push(new model.produtor(item));
                    });
                })
        };
        self.BuscarMunicipiosNaApi = function () {
            fetch('http://localhost:62978/api/v1/Municipio/BuscarTodos')
                .then(m => m.json())
                .then(listMunicipios => {
                    listMunicipios.forEach(function (item) {
                        self.municipios.push(new model.municipio(item));

                    });
                })
        };
        self.BuscarProdutoresNaApi();
        self.BuscarMunicipiosNaApi();

        self.AtualizaNaAPi = function (body, id) {            
            const url = ` http://localhost:62978/api/v1/Produtor/EditarProdutor/${id} `;            
            const options = {
                method: 'PUT',
                mode: 'cors',
                headers: header,
                body: JSON.stringify(body)
            }           
            return fetch(url, options)            
                .then(resp => {
                    if (resp.ok) {
                        console.log(resp.body)
                        self.produtores([]);
                        self.BuscarProdutoresNaApi();
                        alert("Produtor atualizado com sucesso.");
                        $('#dialogProdutor').modal('hide');
                    } else {
                        alert('Erro ao atualizar produtor. Tente novamente.');
                    } 
                })
                .catch(e => {                   
                    alert(e);
                })
        }
        self.CadastrarNaAPi = function (body) {
            const url = "http://localhost:62978/api/v1/Produtor/CadastrarProdutor";
            const options = {
                method: 'POST',
                mode: 'cors',
                headers: header,
                body: JSON.stringify(body)
            }
            return fetch(url, options)
                .then(resp => {
                    if (resp.ok) {
                        self.produtores([]);
                        self.BuscarProdutoresNaApi();
                        alert("Produtor cadastrado com sucesso.");
                        $('#dialogProdutor').modal('hide');
                    } else {
                        alert('Erro ao cadastrar produtor. Tente novamente.');
                    }
                })
                .catch(e => {
                    alert(e);
                })
        }

        self.ProdutorId = ko.observable();
        self.Nome = ko.observable();
        self.Cpf = ko.observable();
        self.NomeRua = ko.observable();
        self.Numero = ko.observable();
        self.MunicipioId = ko.observable();

        self.isEditing = ko.observable(false);
        
       
        self.produtores = ko.observableArray();
        self.produtor = ko.observable();
        self.municipios = ko.observableArray([]);

        self.preparaEdicao = function (produtor) {

            self.isEditing(true);
            self.produtor(new model.edicaoProdutor(produtor));           
            self.ProdutorId(produtor.ProdutorId());
            self.Nome(produtor.Nome());
            self.Cpf(produtor.Cpf());
            self.NomeRua(produtor.NomeRua());
            self.Numero(produtor.Numero());
            self.MunicipioId(produtor.Municipio());
            
        }
        self.atualizar = function () {
            //console.log("Validacao: ", self.Validacao());
            if (!self.ProdutorEValido())
                return;

            self.AtualizaNaAPi({
                produtorId: self.ProdutorId(), nome: self.Nome(), cpf: self.Cpf(),
                nomeRua: self.NomeRua(), numero: self.Numero(), municipioId: self.MunicipioId()
            }, self.ProdutorId());
                
        }

        self.Reset = function () {            
            self.ProdutorId('');
            self.Nome('');
            self.Cpf('');
            self.NomeRua('');
            self.Numero('');
            self.MunicipioId('');
           
        }
        
        self.preparaNovoCadastro = function () {
            self.isEditing(false);
            self.Reset();
        }
        self.inserirNovo = function () {

            if (!self.ProdutorEValido())
                return;
            
            self.CadastrarNaAPi({
                nome: self.Nome(), cpf: self.Cpf(), nomeRua: self.NomeRua(),
                numero: self.Numero(), municipioId: self.MunicipioId()
            });
        }
        self.ProdutorEValido = function () {           
            var validacao = "";
            var cpfEValido = self.CpfEValido(self.Cpf());

            if (!self.Nome() || self.Nome() == undefined)
                validacao += "* Nome é preenchimento obrigatório. \n"
            if (!self.Cpf() || self.Cpf() == undefined || !cpfEValido)               
                validacao += "* CPF é obrigatório e deve conter 11 digitos numericos. \n"
            if (!self.NomeRua() || self.NomeRua() == undefined)
                validacao += "* Nome é preenchimento obrigatório. \n"
            if (!self.Numero() || self.Numero() == undefined)
                validacao += "* Numero é preenchimento obrigatório. \n"
            if (!self.MunicipioId() || self.MunicipioId() == undefined)
                validacao += "* Municipio é preenchimento obrigatório. \n"

            if (validacao) {
                alert(validacao);
                return false;
            }
            return true;
                
        }
        self.CpfEValido = function (cpf) {            
            let eNumero = !isNaN(cpf);
            
            if (!eNumero)
                return false;
            if (cpf.length != 11)
                return false;

            return true;
        }
        //self.texto = ko.observable('Testando Knockout');


        //self.controlerTexto = ko.computed(function () {
        //    return self.texto().length == 0;
        //});

       

    });


    //const self = this;

    //self.produtores = ko.observableArray();
    //self.produtor = model;
    //self.texto = ko.observable('Testando Knockout');

    ////let controlerTexto = ko.observable(false);

    ////texto.subscribe(function (value) {
    ////    controlerTexto( value.length == 0)
    ////});

    //self.controlerTexto = ko.computed(function () {
    //    return texto().length == 0;
    //});

    //self.Clicou = function () {
    //    console.log("Clicou ");
    //    fetch('http://localhost:62978/api/v1/Produtor/BuscarTodos')
    //        .then(function (listProdutores) {
    //            listProdutores.forEach(function (item) {
    //                self.produtores.push(new model.produtor(item));
    //            });
    //        })            
    //};

    /*return { texto, controlerTexto, Clicou };*/
}();


//ko.applyBindings(app);





