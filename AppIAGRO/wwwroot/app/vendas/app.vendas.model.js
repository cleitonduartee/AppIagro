var app = app || {};
app.vendas = app.vendas || {};

app.vendas.model = function () {

    var Historico = function (historico) {
        var self = this;

        self.CodigoHistorico = ko.observable(historico.codigoHistorico);
        self.PropriedadeOrigemId = ko.observable(historico.propriedadeOrigemId);
        self.PropriedadeDestinoId = ko.observable(historico.propriedadeDestinoId);
        self.NomePropriedadeOrigem = ko.observable(historico.nomePropriedadeOrigem);
        self.NomePropriedadeDestino = ko.observable(historico.nomePropriedadeDestino);
        self.QtdComVacinaBovino = ko.observable(historico.qtdComVacinaBovino);
        self.QtdComVacinaBubalino = ko.observable(historico.qtdComVacinaBubalino);
        self.DataMovimentacao = ko.observable(new Date(historico.dataMovimentacao).toLocaleDateString());
        self.DataCancelamento = ko.observable(historico.dataCancelamento == null ? '' : new Date(historico.dataCancelamento).toLocaleDateString()  );
        self.Finalidade = ko.observable(historico.finalidade);
        self.Status = ko.observable(historico.status);
    }
    return {
        Historico: Historico
    };
}();



