var app = app || {};
app.vendas = app.vendas || {};

app.vendas.services = function () {

    const header = new Headers({
        "Content-Type": "application/json",
        "X-Custom-Header": "ProcessThisImmediately",
    });

    var BuscarPropriedadesNaApi = function () {
        return fetch('http://localhost:62978/api/v1/Propriedade/BuscarTodos')
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                else {
                    throw new Error(resp.statusText);
                }

            })
            .catch(error => {
                alert(error.message);
            });

    };
    var BuscarProdutoresNaApi = function () {
        return fetch('http://localhost:62978/api/v1/Produtor/BuscarTodos')
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                else {
                    throw new Error(resp.statusText);
                }

            })
            .catch(error => {
                alert(error.message);
            });
    };
    var BuscarAnimaisPorNomePropriedadeNaApi = function (nomePropriedade) {       
        const url = `http://localhost:62978/api/v1/Animais/BuscarPorPropriedade/${nomePropriedade}`;
        return fetch(url)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                else {
                    throw new Error(resp.statusText);
                }

            })
            .catch(error => {
                alert(error.message);
            });
    };
    var BuscarVendasPorIdProdutorNaApi = function (idProdutor) {
        const url = `http://localhost:62978/api/v1/Vendas/BuscarVendasPorProdutor/${idProdutor}`;
        return fetch(url)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                else {
                    throw new Error(resp.statusText);
                }

            })
            .catch(error => {
                alert(error.message);
            });
    };
    var BuscarVendasPorIdPropriedadeNaApi = function (idPropriedade) {
        const url = `http://localhost:62978/api/v1/Vendas/BuscarVendasPorPropriedade/${idPropriedade}`;
        return fetch(url)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                else {
                    throw new Error(resp.statusText);
                }

            })
            .catch(error => {
                alert(error.message);
            });
    };
    var BuscarComprasPorIdProdutorNaApi = function (idProdutor) {
        const url = `http://localhost:62978/api/v1/Vendas/BuscarComprasPorProdutor/${idProdutor}`;
        return fetch(url)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                else {
                    throw new Error(resp.statusText);
                }

            })
            .catch(error => {
                alert(error.message);
            });
    };
    var RealizarVendaNaApi = function (body) {
        let url = "http://localhost:62978/api/v1/Vendas/RealizarVenda";
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: header,
            body: JSON.stringify(body)
        }
        return fetch(url, options)
            .then(resp => {
                if (resp.ok) {
                    return true;
                } else {
                    throw new Error(resp.statusText);
                }
            })
            .catch(error => {
                alert(error.message);
            })

    };

    var CancelarVenda = function (codigoVenda) {
        const url = ` http://localhost:62978/api/v1/Vendas/CancelarVenda/${codigoVenda} `;

        const options = {
            method: 'POST',
            mode: 'cors',
            headers: header,
            body: {}
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

    };

    return {
        BuscarPropriedadesNaApi: BuscarPropriedadesNaApi,
        BuscarProdutoresNaApi: BuscarProdutoresNaApi,
        BuscarAnimaisPorNomePropriedadeNaApi: BuscarAnimaisPorNomePropriedadeNaApi,
        BuscarVendasPorIdProdutorNaApi: BuscarVendasPorIdProdutorNaApi,
        BuscarVendasPorIdPropriedadeNaApi: BuscarVendasPorIdPropriedadeNaApi,
        BuscarComprasPorIdProdutorNaApi: BuscarComprasPorIdProdutorNaApi,
        RealizarVendaNaApi: RealizarVendaNaApi,
        CancelarVenda: CancelarVenda

    };

}();






