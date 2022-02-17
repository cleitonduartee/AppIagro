var app = app || {};
app.historico = app.historico || {};

app.historico.model = function () {

    var HistoricoEntrada = function (historico) {
        var self = this;
                
        self.CodigoHistorico = ko.observable(historico.codigoHistorico);
        self.TipoMovimentacao = ko.observable(historico.tipoMovimentacao);
        self.QtdBovino = ko.observable(historico.qtdSemVacinaBovino);
        self.QtdBubalino = ko.observable(historico.qtdSemVacinaBubalino);
        self.DataMovimentacao = ko.observable(new Date(historico.dataMovimentacao).toLocaleDateString());
        self.Status = ko.observable(historico.status);
        self.DataCancelamento = ko.observable(historico.dataCancelamento);
        //self.DataMovimentacaoFormatada = ko.computed(function () {
        //    string dia = self.DataMovimentacao().get
        //    return self.DataMovimentacao().toLocaleDateString('pt-BR', {timeZone: 'UTC'});
        //});
    }
   

    return {
        HistoricoEntrada: HistoricoEntrada
    };
}();



