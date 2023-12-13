const $d = document;
const $selectProvincias = $d.getElementById("selectProvincias");
const $selectMunicipios = $d.getElementById("selectMunicipios");
const $selectLocalidades = $d.getElementById("selectLocalidades");

function provincia() {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let $options = `<option value="Elige tu provincia">Elige tu provincia</option>`;

        json.provincias.forEach(el => $options += `<option value="${el.nombre}">${el.nombre}</option>`);

        $selectProvincias.innerHTML = $options;
    })
    .catch(error => {
        let message = error.statusText || "Ocurrió un error";

        $selectProvincias.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
    })
}

$d.addEventListener("DOMContentLoaded", provincia)

function municipio(provincia) {
    fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&max=5`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let $options = `<option value="Elige tu municipio">Elige tu municipio</option>`;

        json.municipios.forEach(el => $options += `<option value="${el.nombre}">${el.nombre}</option>`);

        $selectMunicipios.innerHTML = $options;
    })
    .catch(error => {
        let message = error.statusText || "Ocurrió un error";

        $selectMunicipios.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
    })
}

$selectProvincias.addEventListener("change", e => {
    municipio(e.target.value);
    console.log(e.target.value)
})

function localidad(municipio) {
    fetch(`https://apis.datos.gob.ar/georef/api/localidades?municipio=${municipio}&max=5`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let $options = `<option value="Elige tu localidad">Elige tu localidad</option>`;

        json.localidades.forEach(el => $options += `<option value="${el.nombre}">${el.nombre}</option>`);

        $selectLocalidades.innerHTML = $options;
    })
    .catch(error => {
        let message = error.statusText || "Ocurrió un error";

        $selectLocalidades.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
    })
}

$selectMunicipios.addEventListener("change", e => {
    localidad(e.target.value);
    console.log(e.target.value)
})