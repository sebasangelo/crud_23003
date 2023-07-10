function guardar(){
    let t = document.getElementById('tipo_de_operacion').value;
    let d = document.getElementById('descripcion').value;
    let b = document.getElementById('barrio').value;
    let p = document.getElementById('precio').value;
    let m = document.getElementById('metros').value;
    let i = document.getElementById('imagen').value;

    let producto = {
        tipo_de_operacion: t,
        descripcion: d,
        barrio: b,
        precio: p,
        metros: m,
        imagen: i
    }

    let url = 'https://sebasangelo.pythonanywhere.com/productos';

    let options ={
        body: JSON.stringify(producto),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    };

    fetch(url, options)
    .then(function(){
        alert('Propiedad guardada exitosamente');
        window.location.href = './productos.html'
    })
    .catch((error)=>{
        alert('No pudo guardarse la propiedad');
        console.error(error);
    })
}