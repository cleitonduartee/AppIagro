var app = app || {};
app.registroVacina = app.registroVacina || {};

app.registroVacina.services = function () {

    const header = new Headers({
        "Content-Type": "application/json",
        "X-Custom-Header": "ProcessThisImmediately",
    });

    var BuscarPropriedadesNaApi = function () {
        return fetch('http://localhost:62978/api/v1/Propriedade/BuscarTodos')
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

    var RegistrarVacinacaoNaApi = function (body) {
        let url = "http://localhost:62978/api/v1/RegistroVacina/RegistrarVacinacao";
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

    };

    var BuscarRegistrosDeVacinaNaApi = function (idPropriedade) {
        const url = ` http://localhost:62978/api/v1/RegistroVacina/BuscarRegistrosPorIdPropriedade/${idPropriedade} `;
        return fetch(url)
            .then(async resp => {
                if (resp.ok) {
                    return await resp.json();
                } else {
                    throw new Error(await resp.json());
                }
            })
            .catch(error => {
                alert(error.message);
            })

    };

    var CancelarRegistro =  function  (codigoregistro) {
        const url = ` http://localhost:62978/api/v1/RegistroVacina/CancelarRegistroVacinacao/${codigoregistro} `;
        
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: header,
            body: {}
        }
        return  fetch(url, options)
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
        RegistrarVacinacaoNaApi: RegistrarVacinacaoNaApi,
        BuscarRegistrosDeVacinaNaApi: BuscarRegistrosDeVacinaNaApi,
        CancelarRegistro: CancelarRegistro
    };

}();






