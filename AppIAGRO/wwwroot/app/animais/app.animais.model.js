var app = app || {};
app.animais = app.animais || {};

app.animais.model = function () {

    var animal = function (animal) {
        var self = this;
                
        self.PropriedadeId = ko.observable(animal.propriedadeId);
        self.NomePropriedade = ko.observable(animal.nomePropriedade);
        self.NomeProdutor = ko.observable(animal.nomeProdutor);
        self.SaldoComVacinaBovino = ko.observable(animal.saldoComVacinaBovino);
        self.SaldoComVacinaBubalino = ko.observable(animal.saldoComVacinaBubalino);
        self.SaldoSemVacinaBovino = ko.observable(animal.saldoSemVacinaBovino);
        self.SaldoSemVacinaBubalino = ko.observable(animal.saldoSemVacinaBubalino);
    }
   

    return {
        animal: animal
    };
}();



