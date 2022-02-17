var app = app || {};
app.produtor = app.produtor || {};

app.produtor.model = function () {

    var Produtor = function (produtor) {
        var self = this;
                
        self.ProdutorId = ko.observable(produtor.produtorId);
        self.Nome = ko.observable(produtor.nome);
        self.Cpf = ko.observable(produtor.cpf);
        self.NomeRua = ko.observable(produtor.endereco.nomeRua);
        self.Numero = ko.observable(produtor.endereco.numero);
        self.Municipio = ko.observable(produtor.endereco.municipio);
        self.EnderecoCompleto = ko.computed(function () {            
            return "Rua : " + self.NomeRua() + ", n° " + self.Numero() + ", " + self.Municipio().nome + "-MS.";
        });
    }  
    var Municipio = function (municipio) {
       //console.log("Construtor municipio: ", municipio)
        var self = this;
        self.MunicipioId = ko.observable(municipio.municipioId);
        self.Nome = ko.observable(municipio.nome);
    }

    return {
        Produtor: Produtor,
        Municipio: Municipio
    };
}();



