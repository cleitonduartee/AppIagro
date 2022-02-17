var app = app || {};
app.registroVacina = app.registroVacina || {};
app.registroVacina.model = app.registroVacina.model || {};
app.registroVacina.services = app.registroVacina.services || {};

app.propriedade = app.propriedade || {};
app.propriedade.model = app.propriedade.model || {};

app.animais.model = app.animais.model || {};


app.registroVacina.viewModel = function () {

    var model = app.registroVacina.model;
    var modelPropriedade = app.propriedade.model;
    var modelAnimal = app.animais.model;
    var services = app.registroVacina.services;

    ko.applyBindings(new function () {
        var self = this;


        self.NomePropriedade = ko.observable();
        self.PropriedadeId = ko.observable();
        self.QtdBovinoVacinado = ko.observable();
        self.QtdBubalinoVacinado = ko.observable();
        self.DataVacinacao = ko.observable();
        self.TipoVacina = ko.observable();

        self.AnimaisPorPropriedade = ko.observableArray();
        self.RegistrosDeVacinas = ko.observableArray();
        self.Propriedades = ko.observableArray();


        /**
        *  FUNÇÕES AUXILIAR VM
        */

        self.ResetVariaveis = function () {

            self.NomePropriedade('');
            self.QtdBovinoVacinado('');
            self.QtdBubalinoVacinado('');
            self.DataVacinacao('');
            self.TipoVacina('');
            self.PropriedadeId('');

        }

        

        self.RegistroEValido = function () {
            var validacao = "";
            var qtdBovinoSemVacina;
            var qtdBubalinoSemVacina;
            var dataAtual = new Date();
            var dataVacinacao = new Date(self.DataVacinacao() + "T04:00:00Z");

            if (self.NomePropriedade() == undefined)
                validacao += "* Propriedade é obrigatória. \n"
            if (self.QtdBovinoVacinado() == undefined && self.QtdBubalinoVacinado() == undefined)
                validacao += "* Informe a quantidade de animais Bovino ou/e Bubalino \n"
            if (self.QtdBovinoVacinado() <= 0)
                validacao += "* Quantidade bovino deve ser maior que zero.  \n"
            if (self.QtdBubalinoVacinado() <= 0)
                validacao += "* Quantidade bubalino deve ser maior que zero.  \n"
            if (self.DataVacinacao() == undefined)
                validacao += "* Data da vacinação é obrigatório.  \n"
            if (dataVacinacao > dataAtual && self.DataVacinacao() != undefined)
                validacao += "* Data de vacinação nao pode ser maior que a data atual.  \n"
            else if (dataVacinacao.getFullYear() != dataAtual.getFullYear() && self.DataVacinacao() != undefined)
                validacao += "* Ano de vacinacao deve ser do ano atual.  \n"



            if (self.NomePropriedade() != undefined) {
                qtdBovinoSemVacina = self.AnimaisPorPropriedade()[0].SaldoSemVacinaBovino();
                qtdBubalinoSemVacina = self.AnimaisPorPropriedade()[0].SaldoSemVacinaBubalino();
            }

            if (self.QtdBovinoVacinado() > qtdBovinoSemVacina)
                validacao += "* Quantidade de bovino vacinado é maior que o saldo sem vacina.  \n"
            if (self.QtdBubalinoVacinado() > qtdBubalinoSemVacina)
                validacao += "* Quantidade de bubalino vacinado é maior que o saldo sem vacina.  \n"

            if (self.TipoVacina() == undefined)
                validacao += "* Tipo da vacina aplicada é obrigatório.  \n"

            if (validacao) {
                alert(validacao);
                return false;
            }
            return true;

        }
        self.ExisteRegistrosDeVacina = ko.computed(function () {
            if (self.PropriedadeId() != undefined) {
                if (self.RegistrosDeVacinas().length > 0)
                    return true;
                else
                    return false;
            } else
                return true;
        });
        self.ExisteSaldoSemVacina = ko.computed(function () {
            if (self.AnimaisPorPropriedade().length > 0) {
                let qtdSemVacinaBovino = self.AnimaisPorPropriedade()[0].SaldoSemVacinaBovino();
                let qtdSemVacinaBubalino = self.AnimaisPorPropriedade()[0].SaldoSemVacinaBubalino();

                if (qtdSemVacinaBovino > 0 || qtdSemVacinaBubalino > 0)
                    return true;
                else
                    return false;

            }
            else
                return false;
        });
        /**
         *  FUNÇÕES QUE CHAMAM AS FUNCOES QUE UTILIZAM A SERVICE
         *  -----------   subscribe ----------------------------
         */


        self.NomePropriedade.subscribe(function (nomePropriedade) {
            if (nomePropriedade != undefined && nomePropriedade != '')
                self.BuscarAnimaisPorNomePropriedadeNaApi(nomePropriedade);

            self.AnimaisPorPropriedade.removeAll();

        });


        self.PropriedadeId.subscribe(function (propriedadeId) {
            if (propriedadeId != undefined && propriedadeId != '')
                self.BuscarRegistrosDeVacinaNaApi(propriedadeId);

            self.RegistrosDeVacinas.removeAll();

        });

        /**
         *  FUNÇÕES QUE UTILIZA SERVICES
         */


        self.RealizaRegistroVacinacao = function (event) {
            if (!self.RegistroEValido())
                return;

            let body = {
                propriedadeId: self.AnimaisPorPropriedade()[0].PropriedadeId(),
                tipoVacina: parseInt(self.TipoVacina()),
                qtdBovinoVacinado: self.QtdBovinoVacinado(),
                qtdBubalinoVacinado: self.QtdBubalinoVacinado(),
                dataVacinacao: self.DataVacinacao()
            };
            services.RegistrarVacinacaoNaApi(body)
                .then(resp => {
                    if (resp) {
                        alert("Registro de vacinação realizada com sucesso.");
                        $('#dialogRegistroVacina').modal('hide');
                    }
                    self.ResetVariaveis();
                })

        }

        self.RealizaCancelamento = function (event) {

            services.CancelarRegistro(event.CodigoRegistro())
                .then(resp => {
                    self.RegistrosDeVacinas.removeAll();
                    if (resp) {
                        alert("Registro cancelado com sucesso.");
                        $('#dialogCancelarRegistro').modal('hide');
                    }
                    self.ResetVariaveis();
                });
        }

        self.BuscarAnimaisPorNomePropriedadeNaApi = function (nomePropriedade) {
            services.BuscarAnimaisPorNomePropriedadeNaApi(nomePropriedade)
                .then(animais => {
                    if (animais) {
                        self.AnimaisPorPropriedade.removeAll();
                        self.AnimaisPorPropriedade.push(new modelAnimal.Animal(animais));
                    }
                })

        };


        self.BuscarPropriedadesNaApi = function () {
            services.BuscarPropriedadesNaApi()
                .then(listPropriedade => {
                    if (listPropriedade) {
                        listPropriedade.forEach(function (item) {
                            self.Propriedades.push(new modelPropriedade.Propriedade(item));

                        });
                    }
                })
        }

        self.BuscarRegistrosDeVacinaNaApi = function (idPropriedade) {
            services.BuscarRegistrosDeVacinaNaApi(idPropriedade)
                .then(listRegistros => {
                    if (listRegistros) {
                        self.RegistrosDeVacinas.removeAll();
                        listRegistros.forEach(function (item) {
                            self.RegistrosDeVacinas.push(new model.RegistroVacina(item));

                        });
                    }
                })
        }
        self.BuscarPropriedadesNaApi();

    });

}();






