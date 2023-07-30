//console.log(location.search)

let argsUrl = location.search.substring(1).split('&');
console.log(argsUrl)

let data = [];
for(let i = 0; i < argsUrl.length; i++){
    data[i] = argsUrl[i].split('=');
}
console.log(data)

document.getElementById('id').value = decodeURIComponent(data[0][1]);
document.getElementById('tipo_de_operacion').value = decodeURIComponent(data[1][1]);
document.getElementById('descripcion').value = decodeURIComponent(data[2][1]);
document.getElementById('barrio').value = decodeURIComponent(data[3][1]);
document.getElementById('moneda').value = decodeURIComponent(data[4][1]);
document.getElementById('precio').value = decodeURIComponent(data[5][1]);
document.getElementById('metros').value = decodeURIComponent(data[6][1]);
document.getElementById('imagen').value = decodeURIComponent(data[7][1]);

function modificar(){
    // Actualizar los datos en la BBDD
    let id = document.getElementById('id').value;
    let t = document.getElementById('tipo_de_operacion').value;
    let d = document.getElementById('descripcion').value;
    let b = document.getElementById('barrio').value;
    let $ = document.getElementById('moneda').value;
    let p = document.getElementById('precio').value;
    let m = document.getElementById('metros').value;
    let i = document.getElementById('imagen').value;

    let producto = {
        tipo_de_operacion: t,
        descripcion: d,
        barrio: b,
        moneda: $,
        precio: p,
        metros: m,
        imagen: i
    }

    let url = 'https://sebasangelo.pythonanywhere.com/productos/'+id;

    let options ={
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow'
    };

    fetch(url, options)
    .then(function(){
        alert('Registro modificado exitosamente');
        window.location.href= './productos.html';
    })
    .catch(err => {
        alert('No pudo modificarse el registro');
        console.error(err);
    })

}