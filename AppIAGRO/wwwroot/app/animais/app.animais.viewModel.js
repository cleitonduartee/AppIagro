var app = app || {};
app.animais = app.animais || {};
app.animais.model = app.animais.model || {};

app.produtor = app.produtor || {};
app.produtor.model = app.produtor.model || {};

app.propriedade = app.propriedade || {};
app.propriedade.model = app.propriedade.model || {};

app.historico.model = app.historico.model || {};

app.propriedade.viewModel = function () {

    const header = new Headers({
        "Content-Type": "application/json",
        "X-Custom-Header": "ProcessThisImmediately",
    });
    var model = app.animais.model;
    var modelProdutor = app.produtor.model;
    var modelPropriedade = app.propriedade.model;
    var modelHistorico = app.historico.model;

    ko.applyBindings(new function () {
        var self = this;

        self.BuscarPropriedadesNaApi = function () {
            fetch('http://localhost:62978/api/v1/Propriedade/BuscarTodos')
                .then(p => p.json())
                .then(listPropriedade => {
                    listPropriedade.forEach(function (item) {
                        self.propriedades.push(new modelPropriedade.Propriedade(item));
                    });
                })
        };
        self.BuscarProdutoresNaApi = function () {            
            fetch('http://localhost:62978/api/v1/Produtor/BuscarTodos')
                .then(p => p.json())
                .then(listProdutores => {
                    listProdutores.forEach(function (item) {
                        self.produtores.push(new modelProdutor.Produtor(item));
                    });
                })
        };
        
        self.BuscarPropriedadesNaApi();
        self.BuscarProdutoresNaApi();

        self.BuscarAnimaisPorNomePropriedadeNaApi = function (nomePropriedade) {           
            const url = `http://localhost:62978/api/v1/Animais/BuscarPorPropriedade/${nomePropriedade}`;
            fetch(url)
                .then(p => p.json())
                .then(animais => {                    
                    self.animaisPorPropriedade.removeAll();
                    self.animaisPorPropriedade.push(new model.Animal(animais));
                })
        };

        self.BuscarAnimaisPorNomeProdutorNaApi = function (nomeProdutor) {
            const url = `http://localhost:62978/api/v1/Animais/BuscarPorProdutor/${nomeProdutor}`;
            fetch(url)
                .then(p => p.json())
                .then(listAnimais => {                    
                    self.animaisPorProdutor.removeAll();
                    listAnimais.forEach(item => {
                        self.animaisPorProdutor.push(new model.Animal(item));
                    });
                })
        };

        self.RealizaEntradaDeAnimaisNaApi = function (body) {
            const url = ` http://localhost:62978/api/v1/Animais/EntradaAnimais `;
            const options = {
                method: 'POST',
                mode: 'cors',
                headers: header,
                body: JSON.stringify(body)
            }
            return fetch(url, options)
                .then(resp => {
                    if (resp.ok) {                       
                        alert("Entrada de animais realizada com sucesso.");
                        $('#dialogEntraAnimais').modal('hide');
                        self.ResetVariaveis();
                    } else {
                        alert('Erro ao realizar entrada de animais. Tente novamente.');
                    }
                })
                .catch(e => {
                    alert(e);
                })
        };

        self.BuscarEntradaDeAnimaisNaApi = function (idPropriedade) {
            const url = ` http://localhost:62978/api/v1/Animais/BuscarEntradasPorPropriedadeId/${idPropriedade} `;
            fetch(url)
                .then(p => p.json())
                .then(listEntradas => {
                    self.HistoricoEntradas.removeAll();
                    listEntradas.forEach(item => {
                        self.HistoricoEntradas.push(new modelHistorico.HistoricoEntrada(item));
                    });
                })
        };
        self.CancelarEntradaDeAnimaisNaApi = function (codigoEntrada) {
            const url = ` http://localhost:62978/api/v1/Animais/CancelamentoEntradaAnimais/${codigoEntrada} `;
            const options = {
                method: 'POST',
                mode: 'cors',
                headers: header,
                body: {}
            }
            return fetch(url, options)
                .then(async resp => {
                    if (resp.ok) {
                        alert("Entrada cancelada com sucesso.");
                        $('#dialogCancelarEntraAnimais').modal('hide');
                        self.ResetVariaveis();
                    } else {
                        throw new Error(await resp.json());
                    }
                })
                .catch(error => {
                    alert(error.message);
                })
        };
       
        self.NomePropriedade = ko.observable();
        self.NomePropriedade.subscribe(function (nomePropriedade) {
            if (nomePropriedade != undefined)
                self.BuscarAnimaisPorNomePropriedadeNaApi(nomePropriedade);

            self.animaisPorPropriedade.removeAll();
            
        });

        self.NomeProdutor = ko.observable();
        self.NomeProdutor.subscribe(function (nomeProdutor) {
            if (nomeProdutor != undefined)
                self.BuscarAnimaisPorNomeProdutorNaApi(nomeProdutor);

            self.animaisPorProdutor.removeAll();

        });
        self.PropriedadeId = ko.observable();
        self.PropriedadeId.subscribe(function (idProdutor) {
            if (idProdutor != undefined)
                self.BuscarEntradaDeAnimaisNaApi(idProdutor);

            self.HistoricoEntradas.removeAll();

        });

        
        self.isEditing = ko.observable(false);

        self.animaisPorPropriedade = ko.observableArray();
        self.animaisPorProdutor = ko.observableArray();
        self.produtores = ko.observableArray();
        self.propriedades = ko.observableArray();


        self.propriedadesCopyParaEntradaAnimais = ko.observableArray();        
        self.QtdBovino = ko.observable();
        self.QtdBubalino = ko.observable();
        self.HistoricoEntradas = ko.observableArray();

        self.preparaEntradaAnimais = function () {
            self.propriedadesCopyParaEntradaAnimais(self.propriedades());
        };
        self.RealizaEntradaAnimais = function () {
            if (!self.EntradaEValida())
                return;

            self.RealizaEntradaDeAnimaisNaApi({
                propriedadeId: self.PropriedadeId(),
                saldoSemVacinaBovino: self.QtdBovino(),
                saldoSemVacinaBubalino: self.QtdBubalino()
            })

        };
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
        self.RealizaCancelamento = function (historico) {
            self.CancelarEntradaDeAnimaisNaApi(historico.CodigoHistorico());
        }
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
            self.NomeProdutor('');
            self.NomePropriedade('');
            self.QtdBovino('');
            self.QtdBubalino('');
            self.PropriedadeId('');

        }

    });

}();






