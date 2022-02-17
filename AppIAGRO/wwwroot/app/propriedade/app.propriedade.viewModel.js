var app = app || {};
app.propriedade = app.propriedade || {};
app.propriedade.model = app.propriedade.model || {};
app.propriedade.services = app.propriedade.services || {};

app.produtor = app.produtor || {};
app.produtor.model = app.produtor.model || {};

app.propriedade.viewModel = function () {
       
    var model = app.propriedade.model;
    var modelProdutor = app.produtor.model;
    var services = app.propriedade.services;

    ko.applyBindings(new function () {
        var self = this;


        self.PropriedadeId = ko.observable();
        self.InscricaoEstadual = ko.observable();
        self.NomePropriedade = ko.observable();
        self.ProdutorId = ko.observable();
        self.MunicipioId = ko.observable();

        self.IsEditing = ko.observable(false);        
       
        self.Produtores = ko.observableArray();
        self.Propriedades = ko.observableArray();
        self.Municipios = ko.observableArray([]);


        /**
        *  FUNÇÕES AUXILIAR VM
        */

        self.PreparaNovoCadastro = function () {
            self.IsEditing(false);
            self.Reset();
        }

        self.PreparaEdicao = function (propriedade) {  

            self.IsEditing(true);
            self.PropriedadeId(propriedade.PropriedadeId());
            self.InscricaoEstadual(propriedade.InscricaoEstadual());
            self.NomePropriedade(propriedade.NomePropriedade());
            self.ProdutorId(propriedade.Produtor().produtorId);
        }
        self.Reset = function () {            
            self.PropriedadeId('');
            self.InscricaoEstadual('');
            self.NomePropriedade('');
            self.ProdutorId('');
            self.MunicipioId('');           
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

        /**
         *  FUNÇÕES QUE CHAMAM AS FUNCOES QUE UTILIZAM A SERVICE
         */

        self.InserirNovo = function () {

            if (!self.PropriedadeEValido())
                return;

            self.CadastrarNaAPi({
                nomePropriedade: self.NomePropriedade(),
                produtorId: self.ProdutorId(), municipioId: self.MunicipioId()
            });
        }

        self.Atualizar = function () {

            if (!self.PropriedadeEValido())
                return;

            self.AtualizaNaAPi({
                propriedadeId: self.PropriedadeId(), nomePropriedade: self.NomePropriedade(),
                produtorId: self.ProdutorId(), municipioId: self.MunicipioId()
            },
                self.PropriedadeId());

        }

        /**
         *  FUNÇÕES QUE UTILIZA SERVICES
         */


        self.CadastrarNaAPi = function (body) {
            services.CadastrarNaAPi(body)
                .then(resp => {
                    if (resp) {
                        self.Propriedades([]);
                        self.BuscarPropriedadesNaApi();
                        alert("Propriedade cadastrado com sucesso.");
                        $('#dialogPropriedade').modal('hide');
                    }
                })
        }
        self.AtualizaNaAPi = function (body, id) {
            services.AtualizaNaAPi(body, id)
                .then(resp => {
                    if (resp) {
                        self.Propriedades([]);
                        self.BuscarPropriedadesNaApi();
                        alert("Propriedade atualizado com sucesso.");
                        $('#dialogPropriedade').modal('hide');
                    }
                })
        }

        self.BuscarPropriedadesNaApi = function () {
            services.BuscarPropriedadesNaApi()
                .then(listPropriedade => {
                    listPropriedade.forEach(function (item) {
                        self.Propriedades.push(new model.Propriedade(item));

                    });
                })

        };
        self.BuscarProdutoresNaApi = function () {
            services.BuscarProdutoresNaApi()
                .then(listProdutores => {
                    listProdutores.forEach(function (item) {
                        self.Produtores.push(new modelProdutor.Produtor(item));
                    });
                })
        };
        self.BuscarMunicipiosNaApi = function () {
            services.BuscarMunicipiosNaApi()
                .then(listMunicipios => {
                    listMunicipios.forEach(function (item) {
                        self.Municipios.push(new modelProdutor.Municipio(item));

                    });
                })
        };
        self.BuscarPropriedadesNaApi();
        self.BuscarMunicipiosNaApi();
        self.BuscarProdutoresNaApi();
       
    });

}();






