var app = app || {};
app.animais = app.animais || {};

app.animais.model = function () {

    var Animal = function (animal) {
        var self = this;

        self.PropriedadeId = ko.observable(animal.propriedadeId);
        self.NomePropriedade = ko.observable(animal.nomePropriedade);
        self.NomeProdutor = ko.observable(animal.nomeProdutor);
        self.SaldoComVacinaBovino = ko.observable(animal.saldoComVacinaBovino);
        self.SaldoComVacinaBubalino = ko.observable(animal.saldoComVacinaBubalino);
        self.SaldoSemVacinaBovino = ko.observable(animal.saldoSemVacinaBovino);
        self.SaldoSemVacinaBubalino = ko.observable(animal.saldoSemVacinaBubalino);
        self.TotalBovino = ko.computed(function () {
            return self.SaldoComVacinaBovino() + self.SaldoSemVacinaBovino();
        });
        self.TotalBubalino = ko.computed(function () {
            return self.SaldoComVacinaBubalino() + self.SaldoSemVacinaBubalino();
        });
    }
   

    return {
        Animal: Animal
    };
}();



