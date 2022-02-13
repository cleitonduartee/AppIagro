var app = app || {};
app.registroVacina = app.registroVacina || {};

app.registroVacina.model = function () {

    var registroVacina = function (registroVacina) {
        var self = this;
        
        self.CodigoRegistro = ko.observable(registroVacina.codigoRegistro);
        self.TipoVacina = ko.computed(function () {
            if (registroVacina.tipoVacina == 0)
                return 'AFTOSA';
            else if (registroVacina.tipoVacina == 1)
                return 'BRUCELOSE_B19';
            else
                return 'BRUCELOSE_RB51';
        });
        self.QtdBovinoVacinado = ko.observable(registroVacina.qtdBovinoVacinado);
        self.QtdBubalinoVacinado = ko.observable(registroVacina.qtdBubalinoVacinado);
        self.DataVacinacao = ko.observable(new Date(registroVacina.dataVacinacao).toLocaleDateString());
    }
    return {
        registroVacina: registroVacina
    };
}();



