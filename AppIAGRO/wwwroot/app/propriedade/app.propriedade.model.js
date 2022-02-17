var app = app || {};
app.propriedade = app.propriedade || {};

app.propriedade.model = function () {

    var Propriedade = function (propriedade) {
        var self = this;
        
        self.PropriedadeId = ko.observable(propriedade.propriedadeId);
        self.InscricaoEstadual = ko.observable(propriedade.inscricaoEstadual);
        self.NomePropriedade = ko.observable(propriedade.nomePropriedade);
        self.MunicipioPropriedade = ko.observable(propriedade.municipioPropriedade);
        self.Produtor = ko.observable(propriedade.produtor);

        self.NomeProdutor = ko.computed(function () {           
            return self.Produtor().nome;
        });
    }
    return {
        Propriedade: Propriedade
    };
}();



