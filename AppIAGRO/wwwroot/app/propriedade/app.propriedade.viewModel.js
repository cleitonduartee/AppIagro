var app = app || {};
app.propriedade = app.propriedade || {};
app.propriedade.model = app.propriedade.model || {};

app.produtor = app.produtor || {};
app.produtor.model = app.produtor.model || {};

app.propriedade.viewModel = function () {

    const header = new Headers({
        "Content-Type": "application/json",
        "X-Custom-Header": "ProcessThisImmediately",
    });
    var model = app.propriedade.model;
    var modelProdutor = app.produtor.model;

    ko.applyBindings(new function () {
        var self = this;

        self.BuscarPropriedadesNaApi = function () {
            fetch('http://localhost:62978/api/v1/Propriedade/BuscarTodos')
                .then(p => p.json())
                .then(listPropriedade => {
                    listPropriedade.forEach(function (item) {
                        self.propriedades.push(new model.propriedade(item));

                    });
                })
        };
        self.BuscarProdutoresNaApi = function () {
            fetch('http://localhost:62978/api/v1/Produtor/BuscarTodos')
                .then(p => p.json())
                .then(listProdutores => {
                    listProdutores.forEach(function (item) {
                        self.produtores.push(new modelProdutor.produtor(item));
                    });
                })
        };
        self.BuscarMunicipiosNaApi = function () {
            fetch('http://localhost:62978/api/v1/Municipio/BuscarTodos')
                .then(m => m.json())
                .then(listMunicipios => {
                    listMunicipios.forEach(function (item) {
                        self.municipios.push(new modelProdutor.municipio(item));

                    });
                })
        };
        self.BuscarPropriedadesNaApi();        

        self.AtualizaNaAPi = function (body, id) {            
            const url = ` http://localhost:62978/api/v1/Propriedade/EditarPropriedade/${id} `;
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
                        self.propriedades([]);
                        self.BuscarPropriedadesNaApi();
                        alert("Propriedade atualizado com sucesso.");
                        $('#dialogPropriedade').modal('hide');
                    } else {
                        alert('Erro ao atualizar propriedade. Tente novamente.');
                    } 
                })
                .catch(e => {                   
                    alert(e);
                })
        }
        self.CadastrarNaAPi = function (body) {
            const url = "http://localhost:62978/api/v1/Propriedade/CadastrarPropriedade";
            const options = {
                method: 'POST',
                mode: 'cors',
                headers: header,
                body: JSON.stringify(body)
            }
            return fetch(url, options)
                .then(resp => {
                    if (resp.ok) {
                        self.propriedades([]);
                        self.BuscarPropriedadesNaApi();
                        alert("Propriedade cadastrado com sucesso.");
                        $('#dialogPropriedade').modal('hide');
                    } else {
                        alert('Erro ao cadastrar propriedade. Tente novamente.');
                    }
                })
                .catch(e => {
                    alert(e);
                })
        }

        self.PropriedadeId = ko.observable();
        self.InscricaoEstadual = ko.observable();
        self.NomePropriedade = ko.observable();
        self.ProdutorId = ko.observable();
        self.MunicipioId = ko.observable();

        self.isEditing = ko.observable(false);
        
       
        self.produtores = ko.observableArray();
        self.propriedades = ko.observableArray();
        self.municipios = ko.observableArray([]);

        self.preparaEdicao = function (propriedade) {
            
            self.BuscarMunicipiosNaApi();
            self.BuscarProdutoresNaApi();

            self.isEditing(true);        
            self.PropriedadeId(propriedade.PropriedadeId());
            self.InscricaoEstadual(propriedade.InscricaoEstadual());
            self.NomePropriedade(propriedade.NomePropriedade());
            self.ProdutorId(propriedade.Produtor().produtorId);
           // self.MunicipioId(propriedade.MunicipioId());
        }
        self.atualizar = function () {
            
            if (!self.PropriedadeEValido())
                return;

            self.AtualizaNaAPi({
                propriedadeId: self.PropriedadeId(), nomePropriedade: self.NomePropriedade(),
                produtorId: self.ProdutorId(), municipioId: self.MunicipioId()
            },
                self.PropriedadeId());
                
        }

        self.Reset = function () {            
            self.PropriedadeId('');
            self.InscricaoEstadual('');
            self.NomePropriedade('');
            self.ProdutorId('');
            self.MunicipioId('');           
        }
        
        self.preparaNovoCadastro = function () {
            self.BuscarMunicipiosNaApi();
            self.BuscarProdutoresNaApi();

            self.isEditing(false);
            self.Reset();
        }
        self.inserirNovo = function () {

            if (!self.PropriedadeEValido())
                return;
            
            self.CadastrarNaAPi({
                nomePropriedade: self.NomePropriedade(),
                produtorId: self.ProdutorId(), municipioId: self.MunicipioId()
            });
        }
        self.PropriedadeEValido = function () {
            var validacao = "";

            if (!self.NomePropriedade() || self.NomePropriedade() == undefined)
                validacao += "* Nome da propriedade é preenchimento obrigatório. \n"
            if (!self.ProdutorId() || self.ProdutorId() == undefined)
                validacao += "* Produtor é preenchimento obrigatório. \n"
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
       
    });

}();






