var app = app || {};
app.produtor = app.produtor || {};
app.produtor.model = app.produtor.model || {};
app.produtor.services = app.produtor.services || {};

app.produtor.viewModel = function () {
       
    var model = app.produtor.model;
    var services = app.produtor.services;

    ko.applyBindings(new function () {
        var self = this;

        self.ProdutorId = ko.observable();
        self.Nome = ko.observable();
        self.Cpf = ko.observable();
        self.NomeRua = ko.observable();
        self.Numero = ko.observable();
        self.MunicipioId = ko.observable();

        self.IsEditing = ko.observable(false);


        self.Produtores = ko.observableArray();
        self.Produtor = ko.observable();
        self.Municipios = ko.observableArray([]);


        /**
        *  FUNÇÕES AUXILIAR VM
        */

        self.PreparaNovoCadastro = function () {
            self.IsEditing(false);
            self.Reset();
        }
        self.PreparaEdicao = function (produtor) {

            self.IsEditing(true);
            self.ProdutorId(produtor.ProdutorId());
            self.Nome(produtor.Nome());
            self.Cpf(self.InsereMascaraCpf(produtor.Cpf()));
            self.NomeRua(produtor.NomeRua());
            self.Numero(produtor.Numero());
            self.MunicipioId(produtor.Municipio());

        }

        self.Reset = function () {
            self.ProdutorId('');
            self.Nome('');
            self.Cpf('');
            self.NomeRua('');
            self.Numero('');
            self.MunicipioId('');

        }
       
        self.ProdutorEValido = function () {
            var validacao = "";
            
            var cpfFormatado = self.RetiraMascaraCpf(self.Cpf());
            var cpfEValido = self.CpfEValido(cpfFormatado);

            if (!self.Nome() || self.Nome() == undefined)
                validacao += "* Nome é preenchimento obrigatório. \n"
            if (self.Cpf() == undefined || self.Cpf() == '' )
                validacao += "* CPF é obrigatório e deve conter 11 digitos numericos. \n"
            else if(!cpfEValido)
                validacao += "* CPF invalido. \n"
            if (!self.NomeRua() || self.NomeRua() == undefined)
                validacao += "* Nome é preenchimento obrigatório. \n"
            if (!self.Numero() || self.Numero() == undefined)
                validacao += "* Numero é preenchimento obrigatório. \n"
            if (!self.MunicipioId() || self.MunicipioId() == undefined)
                validacao += "* Municipio é preenchimento obrigatório. \n"

            if (validacao) {
                alert(validacao);
                return false;
            }
            return true;

        }
        self.CpfEValido = function (cpf) {
            let eNumero = !isNaN(cpf);

            if (!eNumero)
                return false;
            if (cpf.length != 11)
                return false;

            return true;
        }
        self.MascaraCpf = ko.computed(function () {
            let cpf = "";
            cpf += self.Cpf();
            if (cpf.length == 3 || cpf.length == 7) {
                cpf += ".";
                self.Cpf(cpf);
            } else if (cpf.length == 11) {
                cpf += "-";
                self.Cpf(cpf);
            }


        });
        self.InsereMascaraCpf = function (cpf) {
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        };
        self.RetiraMascaraCpf = function (cpf) {                               
            return cpf.replace('.', '').replace('.', '').replace('-', '');
        };

        /**
         *  FUNÇÕES QUE CHAMAM AS FUNCOES QUE UTILIZAM A SERVICE
         */

        self.InserirNovo = function () {
            if (!self.ProdutorEValido())
                return;

            var cpfFormatado = self.RetiraMascaraCpf(self.Cpf());
            var body = {
                nome: self.Nome(), cpf: cpfFormatado, nomeRua: self.NomeRua(),
                numero: self.Numero(), municipioId: self.MunicipioId()
            }
            self.CadastrarNaAPi(body);
            self.Reset();
        }
        self.Atualizar = function () {
            if (!self.ProdutorEValido())
                return;

            var cpfFormatado = self.RetiraMascaraCpf(self.Cpf());
            var body = {
                produtorId: self.ProdutorId(), nome: self.Nome(), cpf: cpfFormatado,
                nomeRua: self.NomeRua(), numero: self.Numero(), municipioId: self.MunicipioId()
            }

            self.AtualizaNaAPi(body, self.ProdutorId());
            self.Reset();

        }

        /**
         *  FUNÇÕES QUE UTILIZA SERVICES
         */

        self.CadastrarNaAPi = function (body) {
            services.CadastrarNaAPi(body)
                .then(resp => {
                    if (resp) {
                        self.Produtores([]);
                        self.BuscarProdutoresNaApi();
                        alert("Produtor cadastrado com sucesso.");
                        $('#dialogProdutor').modal('hide');
                    }
                })
        }
        self.AtualizaNaAPi = function (body, id) {
            services.AtualizaNaAPi(body, id)
                .then(resp => {
                    if (resp) {
                        self.Produtores([]);
                        self.BuscarProdutoresNaApi();
                        alert("Produtor atualizado com sucesso.");
                        $('#dialogProdutor').modal('hide');
                    }
                })
        }

        self.BuscarProdutoresNaApi = function () {
            services.BuscarProdutoresNaApi()
                .then(listProdutores => {
                    listProdutores.forEach(function (item) {
                        self.Produtores.push(new model.Produtor(item));
                    });
                })
        };
        self.BuscarMunicipiosNaApi = function () {
            services.BuscarMunicipiosNaApi()
                .then(listMunicipios => {
                    listMunicipios.forEach(function (item) {
                        self.Municipios.push(new model.Municipio(item));

                    });
                })
        };
        self.BuscarProdutoresNaApi();
        self.BuscarMunicipiosNaApi();

    });


}();




