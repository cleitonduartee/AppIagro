var app = app || {};
app.produtor = app.produtor || {};

app.produtor.services = function () {

    const header = new Headers({
        "Content-Type": "application/json",
        "X-Custom-Header": "ProcessThisImmediately",
    });

    var BuscarProdutoresNaApi = function () {
        return fetch('http://localhost:62978/api/v1/Produtor/BuscarTodos')
            .then(async resp => {
                if (resp.ok) {
                    return await resp.json();
                }
                else {
                    throw new Error(await resp.json());
                }

            })
            .catch(error => {
                alert(error.message);
            });
    };
    var BuscarMunicipiosNaApi = function () {
        return fetch('http://localhost:62978/api/v1/Municipio/BuscarTodos')
            .then(async resp => {
                if (resp.ok) {
                    return await resp.json();
                }
                else {
                    throw new Error(await resp.json());
                }

            })
            .catch(error => {
                alert(error.message);
            });
    };
    var CadastrarNaAPi = function (body) {
        const url = "http://localhost:62978/api/v1/Produtor/CadastrarProdutor";
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: header,
            body: JSON.stringify(body)
        }
        return fetch(url, options)
            .then(async resp => {
                if (resp.ok) {
                    return true;
                } else {
                    throw new Error(await resp.json());
                }
            })
            .catch(error => {
                alert(error.message);
            })
    }
    var AtualizaNaAPi = function (body, id) {
        const url = ` http://localhost:62978/api/v1/Produtor/EditarProdutor/${id} `;
        const options = {
            method: 'PUT',
            mode: 'cors',
            headers: header,
            body: JSON.stringify(body)
        }
        return fetch(url, options)
            .then(async resp => {
                if (resp.ok) {
                    return true;
                } else {
                    throw new Error(await resp.json());
                }
            })
            .catch(error => {
                alert(error.message);
            })
    }

    return {
        BuscarProdutoresNaApi: BuscarProdutoresNaApi,
        BuscarMunicipiosNaApi: BuscarMunicipiosNaApi,
        CadastrarNaAPi: CadastrarNaAPi,
        AtualizaNaAPi: AtualizaNaAPi
    };

}(); // esse () no final serve para invocar a funcao raiz services