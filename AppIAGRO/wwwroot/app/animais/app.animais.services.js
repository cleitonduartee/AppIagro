var app = app || {};
app.animais = app.animais || {};

app.animais.services = function () {

    const header = new Headers({
        "Content-Type": "application/json",
        "X-Custom-Header": "ProcessThisImmediately",
    });

    var BuscarPropriedadesNaApi = function () {
        return fetch('http://localhost:62978/api/v1/Propriedade/BuscarTodos')
            .then(async resp => {
                if (resp.ok)
                    return resp.json();
                else
                    throw new Error(await resp.json());
            })
            .catch(error => {
                alert(error.message)
            });
    };

    var BuscarProdutoresNaApi = function () {
        return fetch('http://localhost:62978/api/v1/Produtor/BuscarTodos')
            .then(async resp => {
                if (resp.ok)
                    return resp.json();
                else
                    throw new Error(await resp.json());
            })
            .catch(error => {
                alert(error.message)
            });
    };
    var BuscarAnimaisPorNomePropriedadeNaApi = function (nomePropriedade) {
        const url = `http://localhost:62978/api/v1/Animais/BuscarPorPropriedade/${nomePropriedade}`;
        return fetch(url)
            .then(async resp => {
                if (resp.ok)
                    return resp.json();
                else
                    throw new Error(await resp.json());
            })
            .catch(error => {
                alert(error.message)
            });
    };

    var BuscarAnimaisPorNomeProdutorNaApi = function (nomeProdutor) {
        const url = `http://localhost:62978/api/v1/Animais/BuscarPorProdutor/${nomeProdutor}`;
        return fetch(url)
            .then(async resp => {
                if (resp.ok)
                    return resp.json();
                else
                    throw new Error(await resp.json());
            })
            .catch(error => {
                alert(error.message)
            });
    };

    var BuscarEntradaDeAnimaisNaApi = function (idPropriedade) {
        const url = ` http://localhost:62978/api/v1/Animais/BuscarEntradasPorPropriedadeId/${idPropriedade} `;
        return fetch(url)
            .then(async resp => {
                if (resp.ok)
                    return resp.json();
                else
                    throw new Error(await resp.json());
            })
            .catch(error => {
                alert(error.message)
            });
    };

    var RealizaEntradaDeAnimaisNaApi = function (body) {
        const url = ` http://localhost:62978/api/v1/Animais/EntradaAnimais `;
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: header,
            body: JSON.stringify(body)
        }
        return fetch(url, options)
            .then(async resp => {
                if (resp.ok)
                    return true;
                else
                    throw new Error(await resp.json());
            })
            .catch(error => {
                alert(error.message)
            });
    };

    var CancelarEntradaDeAnimaisNaApi = function (codigoEntrada) {
        const url = ` http://localhost:62978/api/v1/Animais/CancelamentoEntradaAnimais/${codigoEntrada} `;
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: header,
            body: {}
        }
        return fetch(url, options)
            .then(async resp => {
                if (resp.ok)
                    return true;
                else
                    throw new Error(await resp.json());
            })
            .catch(error => {
                alert(error.message)
            });
    };

    return {
        BuscarPropriedadesNaApi: BuscarPropriedadesNaApi,
        BuscarProdutoresNaApi: BuscarProdutoresNaApi,
        BuscarAnimaisPorNomePropriedadeNaApi: BuscarAnimaisPorNomePropriedadeNaApi,
        BuscarAnimaisPorNomeProdutorNaApi: BuscarAnimaisPorNomeProdutorNaApi,
        RealizaEntradaDeAnimaisNaApi: RealizaEntradaDeAnimaisNaApi,
        BuscarEntradaDeAnimaisNaApi: BuscarEntradaDeAnimaisNaApi,
        CancelarEntradaDeAnimaisNaApi: CancelarEntradaDeAnimaisNaApi
    }

}();