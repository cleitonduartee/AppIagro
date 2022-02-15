﻿var app = app || {};
app.vendas = app.vendas || {};

app.vendas.model = function () {

    var historico = function (historico) {
        var self = this;

        self.codigoHistorico = ko.observable(historico.codigoHistorico);
        self.propriedadeOrigemId = ko.observable(historico.propriedadeOrigemId);
        self.propriedadeDestinoId = ko.observable(historico.propriedadeDestinoId);
        self.qtdComVacinaBovino = ko.observable(historico.qtdComVacinaBovino);
        self.qtdComVacinaBubalino = ko.observable(historico.qtdComVacinaBubalino);
        self.dataMovimentacao = ko.observable(new Date(historico.dataMovimentacao).toLocaleDateString());
        self.dataCancelamento = ko.observable(historico.dataCancelamento == null ? '' : new Date(historico.dataCancelamento).toLocaleDateString()  );
        self.finalidade = ko.observable(historico.finalidade);
    }
    return {
        historico: historico
    };
}();


