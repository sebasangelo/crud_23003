const {createApp} = Vue 

createApp({
    data(){
        return{
            productos: [],
            url: 'https://sebasangelo.pythonanywhere.com/productos',
            cargando: true,
            error: false
        }
    },

    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.productos = data;
                this.cargando = false;
            })
            .catch(err => {
                console.error(err);
                this.error = true;
            })
        },

        eliminar(producto) {
            const url = 'https://sebasangelo.pythonanywhere.com/productos/'+ producto;
            let options = {
                method: 'DELETE'
            }
            fetch(url, options)
                .then(res => res.json())
                .then(res => {
                    location.reload();
            })                     
        }
    },

    created(){
        this.fetchData(this.url);
    }
}).mount('#app')


