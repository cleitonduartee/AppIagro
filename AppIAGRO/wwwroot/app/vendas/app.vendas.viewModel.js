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


        self.NomePropriedadeOrigem = ko.observable();
        self.PropriedadeIdDestino = ko.observable();
        self.PropriedadeIdCancelarVendas = ko.observable();
        self.ProdutorIdBuscaComprasEVendas = ko.observable();
        self.TituloDialogCompraVendas = ko.observable();
        self.QtdBovinoVenda = ko.observable();
        self.QtdBubalinoVenda = ko.observable();
        self.Finalidade = ko.observable();

        self.eBuscaDeCompras = ko.observable(false);

        self.Produtores = ko.observableArray();
        self.HistoricosComprasEVendas = ko.observableArray();
        self.HistoricosVendasParaCancelar = ko.observableArray();
        self.AnimaisPropriedadeOrigem = ko.observableArray();
        self.PropriedadesOrigem = ko.observableArray();
        self.PropriedadesDestino = ko.observableArray();
        self.PropriedadesBuscaComprasEVendas = ko.observableArray();
        self.VendasPorPropriedade = ko.observableArray();
       




        self.ExisteSaldoParaVenda = ko.computed(function () {
            if (self.AnimaisPropriedadeOrigem().length > 0) {
                let qtdBovino = self.AnimaisPropriedadeOrigem()[0].SaldoComVacinaBovino();
                let qtdBubalino = self.AnimaisPropriedadeOrigem()[0].SaldoComVacinaBubalino();

                if (qtdBovino > 0 || qtdBubalino > 0)
                    return true;
                else 
                    return false;
            }
            else
                return false;
            
        });
        self.ExisteMovimentacoes = ko.computed(function () {
            if (self.HistoricosComprasEVendas().length > 0) 
                return true;            
            else 
                return false;
        });
        self.ExisteMovimentacoesDeVendas = ko.computed(function () {
            if (self.PropriedadeIdCancelarVendas() != undefined) {
                if (self.HistoricosVendasParaCancelar().length > 0)
                    return true;
                else
                    return false;
            }
            else
                return true;
           
        });



        self.MsgQuandoNaoExisteMovimentacao = ko.computed(function () {

            if (self.ProdutorIdBuscaComprasEVendas() != undefined) {
                if (self.eBuscaDeCompras())
                    return 'Não existe compras para esse produtor.';
                else
                    return 'Não existe vendas para esse produtor.';
            } else {
                return '';
            }

        });

        self.Reset = function () {

            self.AnimaisPropriedadeOrigem.removeAll();
            self.NomePropriedadeOrigem(undefined);
            self.PropriedadeIdDestino(undefined);
            self.QtdBovinoVenda(undefined);
            self.QtdBubalinoVenda(undefined);
            self.Finalidade(undefined);
            self.ProdutorIdBuscaComprasEVendas(undefined);
            self.HistoricosComprasEVendas.removeAll();
            self.PropriedadeIdCancelarVendas(undefined);

        }




        self.NomePropriedadeOrigem.subscribe(function (nomePropriedade) {
            if (nomePropriedade != undefined) {
                services.BuscarAnimaisPorNomePropriedadeNaApi(nomePropriedade)
                    .then(Animais => {
                        self.AnimaisPropriedadeOrigem.removeAll();
                        self.AnimaisPropriedadeOrigem.push(new modelAnimal.Animal(Animais));
                    })
            } else {
                self.Reset();
            }
        });
        self.ProdutorIdBuscaComprasEVendas.subscribe(function (produtorId) {
            if (produtorId != undefined) {
                if (self.eBuscaDeCompras()) {
                    services.BuscarComprasPorIdProdutorNaApi(produtorId)
                        .then(listHistoricos => {
                            self.HistoricosComprasEVendas.removeAll();
                            listHistoricos.forEach(function (item) {
                                self.HistoricosComprasEVendas.push(new model.Historico(item));
                            });

                        });
                }
                else {
                    services.BuscarVendasPorIdProdutorNaApi(produtorId)
                        .then(listHistoricos => {
                            self.HistoricosComprasEVendas.removeAll();
                            listHistoricos.forEach(function (item) {
                                self.HistoricosComprasEVendas.push(new model.Historico(item));
                            });

                        });
                }
            }
            else
                self.Reset();
        });
        self.PropriedadeIdCancelarVendas.subscribe(function (propriedadeId) {
            if (propriedadeId != undefined) {
                services.BuscarVendasPorIdPropriedadeNaApi(propriedadeId)
                    .then(listHistoricos => {                        
                        self.HistoricosVendasParaCancelar.removeAll();
                        listHistoricos.forEach(function (item) {
                            self.HistoricosVendasParaCancelar.push(new model.Historico(item));
                        });

                    });
            }
            else
                self.Reset();
        });

        self.RealizarVenda = function (event) {
            if (!self.VendaEValida())
                return
            
            let body = self.MontaBody();
            console.log(body);

            services.RealizarVendaNaApi(body)
                .then(resp => {
                    if (resp) {
                        alert("Venda realizada com sucesso.");
                        self.Reset();
                    }
                });
        }
        self.MontaBody = function () {
            var qtdBovinoVenda = self.QtdBovinoVenda();
            var qtdBubalinoVenda = self.QtdBubalinoVenda();
            var propriedadeOrigem = self.GetPropriedade(self.NomePropriedadeOrigem());

            let body = {
                propriedadeOrigemId: propriedadeOrigem.PropriedadeId(),
                propriedadeDestinoId: self.PropriedadeIdDestino(),
                saldoComVacinaBovino: qtdBovinoVenda == undefined ? 0 : qtdBovinoVenda,
                saldoComVacinaBubalino: qtdBubalinoVenda == undefined ? 0 : qtdBubalinoVenda,
                finalidade: parseInt(self.Finalidade())
            }
            return body;
        }

        self.RealizarCancelamentoDeVenda = function (event) {
            services.CancelarVenda(event.CodigoHistorico())
                .then(resp => {
                    self.HistoricosVendasParaCancelar.removeAll();
                    if (resp) {
                        alert("Venda cancelado com sucesso.");
                        $('#dialogCancelarVendas').modal('hide');
                    }
                    self.Reset();
                });
        }

        self.PreparaBuscaCompras = function () {
            self.eBuscaDeCompras(true);
            self.TituloDialogCompraVendas('Buscar compras');
        }
        self.PreparaBuscaVendas = function () {
            self.eBuscaDeCompras(false);
            self.TituloDialogCompraVendas('Buscar vendas');
        }

        self.VendaEValida = function(){
            var validacao = "";
            var propriedadeOrigem = self.GetPropriedade(self.NomePropriedadeOrigem());
            var qtdBovinoVacinado = self.AnimaisPropriedadeOrigem()[0].SaldoComVacinaBovino();
            var qtdBubalinoVacinado = self.AnimaisPropriedadeOrigem()[0].SaldoComVacinaBubalino();
            
           

            if (propriedadeOrigem.PropriedadeId() === self.PropriedadeIdDestino())
                validacao += "* Não é permitido venda para mesma propriedade. \n"
            if (self.PropriedadeIdDestino() == undefined)
                validacao += "* Propriedade de destino é obigatório. \n"            
            if (self.QtdBovinoVenda() > qtdBovinoVacinado)
                validacao += "* Quantidade de bovino informado é maior que o saldo disponível.  \n"
            if (self.QtdBubalinoVenda() > qtdBubalinoVacinado)
                validacao += "* Quantidade de bubalino informado é maior que o saldo disponível.  \n"
            if (self.QtdBovinoVenda() == undefined && self.QtdBubalinoVenda() == undefined)
                validacao += "* Quantidade de animais é obrigatório. \n"
            if (self.QtdBovinoVenda() == 0 && self.QtdBubalinoVenda() == 0)
                validacao += "* Quantidade de animais deve ser maior que zero. \n"
            if (self.Finalidade() == undefined)
                validacao += "* Finalidade  é obigatório. \n"


            if (validacao) {
                alert(validacao);
                return false;
            }
            return true;
        }
        self.GetPropriedade = function (nomePropriedade) {
            return ko.utils.arrayFirst(self.PropriedadesOrigem(), function (item) {               
                return item.NomePropriedade() === nomePropriedade;
            })|| 'not found';
        }

        self.BuscarPropriedadesNaApi = function () {
            services.BuscarPropriedadesNaApi()
                .then(listPropriedade => {
                    listPropriedade.forEach(function (item) {
                        self.PropriedadesOrigem.push(new modelPropriedade.Propriedade(item));
                        self.PropriedadesDestino.push(new modelPropriedade.Propriedade(item));
                        self.PropriedadesBuscaComprasEVendas.push(new modelPropriedade.Propriedade(item));
                    }
                    );
                })
        }
        self.BuscarProdutores = function () {
            services.BuscarProdutoresNaApi()
                .then(listProdutores => {
                    listProdutores.forEach(function (item) {
                        self.Produtores.push(new modelProdutores.Produtor(item));
                    }
                    );
                })
        }

        self.BuscarPropriedadesNaApi();
        self.BuscarProdutores();



    });

}();






