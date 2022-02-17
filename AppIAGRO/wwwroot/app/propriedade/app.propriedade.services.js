var app = app || {};
app.propriedade = app.propriedade || {};

app.propriedade.services = function () {

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
                alert(error.message);
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
                alert(error.message);
            });
    };
    var BuscarMunicipiosNaApi = function () {
        return fetch('http://localhost:62978/api/v1/Municipio/BuscarTodos')
            .then(async resp => {
                if (resp.ok)
                    return resp.json();
                else
                    throw new Error(await resp.json());
            })
            .catch(error => {
                alert(error.message);
            });
    };
    var CadastrarNaAPi = function (body) {
        const url = "http://localhost:62978/api/v1/Propriedade/CadastrarPropriedade";
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
                alert(error.message);
            })
    }
    var AtualizaNaAPi = function (body, id) {
        const url = ` http://localhost:62978/api/v1/Propriedade/EditarPropriedade/${id} `;
        const options = {
            method: 'PUT',
            mode: 'cors',
            headers: header,
            body: JSON.stringify(body)
        }
        return fetch(url, options)
            .then(async resp => {
                if (resp.ok)
                    return true;
                else
                    throw new Error(await resp.json())

            })
            .catch(error => {
                alert(error.message);
            })
    }

    return {
        BuscarPropriedadesNaApi: BuscarPropriedadesNaApi,
        BuscarProdutoresNaApi: BuscarProdutoresNaApi,
        BuscarMunicipiosNaApi: BuscarMunicipiosNaApi,
        CadastrarNaAPi: CadastrarNaAPi,
        AtualizaNaAPi: AtualizaNaAPi
    };
}();