var app = app || {};
app.animais = app.animais || {};
app.animais.model = app.animais.model || {};
app.animais.services = app.animais.services || {};

app.produtor = app.produtor || {};
app.produtor.model = app.produtor.model || {};

app.propriedade = app.propriedade || {};
app.propriedade.model = app.propriedade.model || {};

app.historico.model = app.historico.model || {};

app.propriedade.viewModel = function () {

    
    var model = app.animais.model;
    var services = app.animais.services;
    var modelProdutor = app.produtor.model;
    var modelPropriedade = app.propriedade.model;
    var modelHistorico = app.historico.model;

    ko.applyBindings(new function () {
        var self = this;

        self.QtdBovino = ko.observable();
        self.QtdBubalino = ko.observable();
        self.NomePropriedade = ko.observable();
        self.NomeProdutor = ko.observable();
        self.PropriedadeId = ko.observable();
       

        self.isEditing = ko.observable(false);

        self.HistoricoEntradas = ko.observableArray();
        self.animaisPorPropriedade = ko.observableArray();
        self.animaisPorProdutor = ko.observableArray();
        self.produtores = ko.observableArray();
        self.propriedades = ko.observableArray();
        self.propriedadesCopyParaEntradaAnimais = ko.observableArray();

        /**
        *  FUNÇÕES AUXILIAR VM
        */

        self.preparaEntradaAnimais = function () {
            self.propriedadesCopyParaEntradaAnimais(self.propriedades());
        };

        self.EntradaEValida = function () {
            var validacao = "";

            if (self.PropriedadeId() == undefined)
                validacao += "* Propriedade é obrigatória. \n"
            if (self.QtdBovino() == undefined && self.QtdBubalino() == undefined)
                validacao += "* Informe a quantidade de animais Bovino ou/e Bubalino \n"
            if (self.QtdBovino() <= 0 && self.QtdBubalino() <= 0)
                validacao += "* Quantidade de animais deve ser maior que zero."

            if (validacao) {
                alert(validacao);
                return false;
            }
            return true;
        }
        self.ResetVariaveis = function () {
            self.NomeProdutor(undefined);
            self.NomePropriedade(undefined);
            self.QtdBovino(undefined);
            self.QtdBubalino(undefined);
            self.PropriedadeId(undefined);

        }
        self.produtorTemRebanho = ko.computed(function () {
            if (self.NomeProdutor() != undefined) {
                if (self.animaisPorProdutor().length > 0)
                    return true;
                else
                    return false;
            }
            else
                return true;
        });
        self.existeHistoricoDeEntrada = ko.computed(function () {
            if (self.PropriedadeId() != undefined) {
                if (self.HistoricoEntradas().length > 0)
                    return true;
                else
                    return false;
            }
            else
                return true;
        })

        /**
        *  FUNÇÕES QUE CHAMAM AS FUNCOES QUE UTILIZAM A SERVICE
        *  -----------   subscribe ----------------------------
        */
       
       
        self.NomePropriedade.subscribe(function (nomePropriedade) {
            if (nomePropriedade != undefined)
                self.BuscarAnimaisPorNomePropriedadeNaApi(nomePropriedade);

            self.animaisPorPropriedade.removeAll();
            
        });

       
        self.NomeProdutor.subscribe(function (nomeProdutor) {
            if (nomeProdutor != undefined)
                self.BuscarAnimaisPorNomeProdutorNaApi(nomeProdutor);

            self.animaisPorProdutor.removeAll();

        });
        
        self.PropriedadeId.subscribe(function (idProdutor) {
            if (idProdutor != undefined)
                self.BuscarEntradaDeAnimaisNaApi(idProdutor);

            self.HistoricoEntradas.removeAll();

        });

        self.RealizaEntradaAnimais = function () {
            if (!self.EntradaEValida())
                return;

            var body = {
                propriedadeId: self.PropriedadeId(),
                saldoSemVacinaBovino: self.QtdBovino(),
                saldoSemVacinaBubalino: self.QtdBubalino()
            }

            self.RealizaEntradaDeAnimaisNaApi(body);

        };
        
        self.RealizaCancelamento = function (historico) {
            self.CancelarEntradaDeAnimaisNaApi(historico.CodigoHistorico());
        }

        /**
         *  FUNÇÕES QUE UTILIZA SERVICES
         */

        self.RealizaEntradaDeAnimaisNaApi = function (body) {
            services.RealizaEntradaDeAnimaisNaApi(body)
                .then(resp => {
                    if (resp) {
                        alert("Entrada de animais realizada com sucesso.");
                        $('#dialogEntraAnimais').modal('hide');
                        self.ResetVariaveis();
                    }
                })
        };


        self.CancelarEntradaDeAnimaisNaApi = function (codigoEntrada) {
            services.CancelarEntradaDeAnimaisNaApi(codigoEntrada)
                .then(async resp => {
                    if (resp) {
                        alert("Entrada cancelada com sucesso.");
                        $('#dialogCancelarEntraAnimais').modal('hide');
                        self.ResetVariaveis();
                    }
                })
        };
     
        self.BuscarAnimaisPorNomePropriedadeNaApi = function (nomePropriedade) {
            services.BuscarAnimaisPorNomePropriedadeNaApi(nomePropriedade)
                .then(animais => {
                    if (animais) {
                        self.animaisPorPropriedade.removeAll();
                        self.animaisPorPropriedade.push(new model.Animal(animais));
                    }
                })
        };

        self.BuscarAnimaisPorNomeProdutorNaApi = function (nomeProdutor) {
            services.BuscarAnimaisPorNomeProdutorNaApi(nomeProdutor)
                .then(listAnimais => {
                    if (listAnimais) {
                        self.animaisPorProdutor.removeAll();
                        listAnimais.forEach(item => {
                            self.animaisPorProdutor.push(new model.Animal(item));
                        });
                    }
                })
        };
        self.BuscarEntradaDeAnimaisNaApi = function (idPropriedade) {
            services.BuscarEntradaDeAnimaisNaApi(idPropriedade)
                .then(listEntradas => {
                    if (listEntradas) {
                        self.HistoricoEntradas.removeAll();
                        listEntradas.forEach(item => {
                            self.HistoricoEntradas.push(new modelHistorico.HistoricoEntrada(item));
                        });
                    }
                })

        };

        self.BuscarPropriedadesNaApi = function () {
            services.BuscarPropriedadesNaApi()
                .then(listPropriedade => {
                    if (listPropriedade) {
                        listPropriedade.forEach(function (item) {
                            self.propriedades.push(new modelPropriedade.Propriedade(item));
                        });
                    }
                })
        };
        self.BuscarProdutoresNaApi = function () {
            services.BuscarProdutoresNaApi()
                .then(listProdutores => {
                    if (listProdutores) {
                        listProdutores.forEach(function (item) {
                            self.produtores.push(new modelProdutor.Produtor(item));
                        });
                    }
                })

        };

        self.BuscarPropriedadesNaApi();
        self.BuscarProdutoresNaApi();

    });

}();






