var app = app || {};
app.produtor = app.produtor || {};

app.produtor.model = function () {

    var produtor = function (produtor) {
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
    var edicaoProdutor = function (produtor) {
        var self = this;
        //console.log("Chegou:", produtor);

        self.ProdutorId = ko.observable(produtor.ProdutorId());
        self.Nome = ko.observable(produtor.Nome());
        self.Cpf = ko.observable(produtor.Cpf());
        self.NomeRua = ko.observable(produtor.NomeRua());
        self.Numero = ko.observable(produtor.Numero());
        self.Municipio = ko.observable(produtor.Municipio());
    }
    var novoProdutor = function (produtor) {
        var self = this;

        self.Nome = ko.observable(produtor.nome());
        self.Cpf = ko.observable(produtor.cpf());
        self.NomeRua = ko.observable(produtor.nomeRua());
        self.Numero = ko.observable(produtor.numero());
        self.Municipio = ko.observable(produtor.municipio());
    }
    var municipio = function (municipio) {
       //console.log("Construtor municipio: ", municipio)
        var self = this;
        self.MunicipioId = ko.observable(municipio.municipioId);
        self.Nome = ko.observable(municipio.nome);
    }

    return {
        produtor: produtor,
        edicaoProdutor: edicaoProdutor,
        municipio: municipio
    };
}();



