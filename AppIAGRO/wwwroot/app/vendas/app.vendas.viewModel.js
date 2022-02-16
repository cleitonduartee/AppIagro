var app = app || {};
app.vendas = app.vendas || {};
app.vendas.model = app.vendas.model || {};

app.produtor = app.produtor || {};
app.produtor.model = app.produtor.model || {};

app.propriedade = app.propriedade || {};
app.propriedade.model = app.propriedade.model || {};

app.animais = app.animais || {};
app.animais.model = app.animais.model || {};

app.vendas.viewModel = function () {

    var services = app.vendas.services;
    var model = app.vendas.model;
    var modelProdutores = app.produtor.model;
    var modelPropriedade = app.propriedade.model;
    var modelAnimal = app.animais.model;

    ko.applyBindings(new function () {
        var self = this;


        self.nomePropriedadeOrigem = ko.observable();
        self.propriedadeIdDestino = ko.observable();
        self.propriedadeIdCancelarVendas = ko.observable();
        self.produtorIdBuscaComprasEVendas = ko.observable();
        self.tituloDialogCompraVendas = ko.observable();
        self.produtores = ko.observableArray();
        self.historicosComprasEVendas = ko.observableArray();
        self.historicosVendasParaCancelar = ko.observableArray();
        self.animaisPropriedadeOrigem = ko.observableArray();
        self.propriedadesOrigem = ko.observableArray();
        self.propriedadesDestino = ko.observableArray();
        self.propriedadesBuscaComprasEVendas = ko.observableArray();
        self.vendasPorPropriedade = ko.observableArray();
        self.qtdBovinoVenda = ko.observable();
        self.qtdBubalinoVenda = ko.observable();
        self.finalidade = ko.observable();
        self.eBuscaDeCompras = ko.observable(false);




        self.existeSaldoParaVenda = ko.computed(function () {
            if (self.animaisPropriedadeOrigem().length > 0) {
                let qtdBovino = self.animaisPropriedadeOrigem()[0].SaldoComVacinaBovino();
                let qtdBubalino = self.animaisPropriedadeOrigem()[0].SaldoComVacinaBubalino();

                if (qtdBovino > 0 || qtdBubalino > 0)
                    return true;
                else 
                    return false;
            }
            else
                return false;
            
        });
        self.existeMovimentacoes = ko.computed(function () {
            if (self.historicosComprasEVendas().length > 0) 
                return true;            
            else 
                return false;
        });
        self.existeMovimentacoesDeVendas = ko.computed(function () {
            if (self.propriedadeIdCancelarVendas() != undefined) {
                if (self.historicosVendasParaCancelar().length > 0)
                    return true;
                else
                    return false;
            }
            else
                return true;
           
        });



        self.msgQuandoNaoExisteMovimentacao = ko.computed(function () {

            if (self.produtorIdBuscaComprasEVendas() != undefined) {
                if (self.eBuscaDeCompras())
                    return 'Não existe compras para esse produtor.';
                else
                    return 'Não existe vendas para esse produtor.';
            } else {
                return '';
            }

        });

        self.reset = function () {

            self.animaisPropriedadeOrigem.removeAll();
            self.nomePropriedadeOrigem(undefined);
            self.propriedadeIdDestino(undefined);
            self.qtdBovinoVenda(undefined);
            self.qtdBubalinoVenda(undefined);
            self.finalidade(undefined);
            self.produtorIdBuscaComprasEVendas(undefined);
            self.historicosComprasEVendas.removeAll();
            self.propriedadeIdCancelarVendas(undefined);

        }




        self.nomePropriedadeOrigem.subscribe(function (nomePropriedade) {
            if (nomePropriedade != undefined) {
                services.BuscarAnimaisPorNomePropriedadeNaApi(nomePropriedade)
                    .then(Animais => {
                        self.animaisPropriedadeOrigem.removeAll();
                        self.animaisPropriedadeOrigem.push(new modelAnimal.animal(Animais));
                    })
            } else {
                self.reset();
            }
        });
        self.produtorIdBuscaComprasEVendas.subscribe(function (produtorId) {
            if (produtorId != undefined) {
                if (self.eBuscaDeCompras()) {
                    services.BuscarComprasPorIdProdutorNaApi(produtorId)
                        .then(listHistoricos => {
                            self.historicosComprasEVendas.removeAll();
                            listHistoricos.forEach(function (item) {
                                self.historicosComprasEVendas.push(new model.historico(item));
                            });

                        });
                }
                else {
                    services.BuscarVendasPorIdProdutorNaApi(produtorId)
                        .then(listHistoricos => {
                            self.historicosComprasEVendas.removeAll();
                            listHistoricos.forEach(function (item) {
                                self.historicosComprasEVendas.push(new model.historico(item));
                            });

                        });
                }
            }
            else
                self.reset();
        });
        self.propriedadeIdCancelarVendas.subscribe(function (propriedadeId) {
            if (propriedadeId != undefined) {
                services.BuscarVendasPorIdPropriedadeNaApi(propriedadeId)
                    .then(listHistoricos => {
                        self.historicosVendasParaCancelar.removeAll();
                        listHistoricos.forEach(function (item) {
                            self.historicosVendasParaCancelar.push(new model.historico(item));
                        });

                    });
            }
            else
                self.reset();
        });

        self.realizarVenda = function (event) {
            if (!self.vendaEValida())
                return
            
            let body = self.montaBody();
            console.log(body);

            services.RealizarVendaNaApi(body)
                .then(resp => {
                    if (resp) {
                        alert("Venda realizada com sucesso.");
                        self.reset();
                    }
                });
        }
        self.montaBody = function () {
            var qtdBovinoVenda = self.qtdBovinoVenda();
            var qtdBubalinoVenda = self.qtdBubalinoVenda();
            var propriedadeOrigem = self.getPropriedade(self.nomePropriedadeOrigem());

            let body = {
                propriedadeOrigemId: propriedadeOrigem.PropriedadeId(),
                propriedadeDestinoId: self.propriedadeIdDestino(),
                saldoComVacinaBovino: qtdBovinoVenda == undefined ? 0 : qtdBovinoVenda,
                saldoComVacinaBubalino: qtdBubalinoVenda == undefined ? 0 : qtdBubalinoVenda,
                finalidade: parseInt(self.finalidade())
            }
            return body;
        }

        self.realizarCancelamentoDeVenda = function (event) {
            services.CancelarVenda(event.codigoHistorico())
                .then(resp => {
                    self.historicosVendasParaCancelar.removeAll();
                    if (resp) {
                        alert("Venda cancelado com sucesso.");
                        $('#dialogCancelarVendas').modal('hide');
                    }
                    self.reset();
                });
        }

        self.preparaBuscaCompras = function () {
            self.eBuscaDeCompras(true);
            self.tituloDialogCompraVendas('Buscar compras');
        }
        self.preparaBuscaVendas = function () {
            self.eBuscaDeCompras(false);
            self.tituloDialogCompraVendas('Buscar vendas');
        }

        self.vendaEValida = function(){
            var validacao = "";
            var propriedadeOrigem = self.getPropriedade(self.nomePropriedadeOrigem());
            var qtdBovinoVacinado = self.animaisPropriedadeOrigem()[0].SaldoComVacinaBovino();
            var qtdBubalinoVacinado = self.animaisPropriedadeOrigem()[0].SaldoComVacinaBubalino();
            
           

            if (propriedadeOrigem.PropriedadeId() === self.propriedadeIdDestino())
                validacao += "* Não é permitido venda para mesma propriedade. \n"
            if (self.propriedadeIdDestino() == undefined)
                validacao += "* Propriedade de destino é obigatório. \n"            
            if (self.qtdBovinoVenda() > qtdBovinoVacinado)
                validacao += "* Quantidade de bovino informado é maior que o saldo disponível.  \n"
            if (self.qtdBubalinoVenda() > qtdBubalinoVacinado)
                validacao += "* Quantidade de bubalino informado é maior que o saldo disponível.  \n"
            if (self.qtdBovinoVenda() == undefined && self.qtdBubalinoVenda() == undefined)
                validacao += "* Quantidade de animais é obrigatório. \n"
            if (self.qtdBovinoVenda() == 0 && self.qtdBubalinoVenda() == 0)
                validacao += "* Quantidade de animais deve ser maior que zero. \n"
            if (self.finalidade() == undefined)
                validacao += "* Finalidade  é obigatório. \n"


            if (validacao) {
                alert(validacao);
                return false;
            }
            return true;
        }
        self.getPropriedade = function (nomePropriedade) {
            return ko.utils.arrayFirst(self.propriedadesOrigem(), function (item) {               
                return item.NomePropriedade() === nomePropriedade;
            })|| 'not found';
        }

        self.BuscarPropriedadesNaApi = function () {
            services.BuscarPropriedadesNaApi()
                .then(listPropriedade => {
                    listPropriedade.forEach(function (item) {
                        self.propriedadesOrigem.push(new modelPropriedade.propriedade(item));
                        self.propriedadesDestino.push(new modelPropriedade.propriedade(item));
                        self.propriedadesBuscaComprasEVendas.push(new modelPropriedade.propriedade(item));
                    }
                    );
                })
        }
        self.BuscarProdutores = function () {
            services.BuscarProdutoresNaApi()
                .then(listProdutores => {
                    listProdutores.forEach(function (item) {
                        self.produtores.push(new modelProdutores.produtor(item));
                    }
                    );
                })
        }

        self.BuscarPropriedadesNaApi();
        self.BuscarProdutores();



    });

}();






