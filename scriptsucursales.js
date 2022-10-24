const url = "https://api.bluelytics.com.ar/v2/latest"
        async function obtenerCotizacion(){
        fetch(url).then(function(response){   //then avanza cuando salio todo bien..
            //.y manda el response(todo lo que obtuvo)
             return response.json();     //ese response lo parsea a un Json.. pero devuelve otra promesa , o sea
         }).then(function(obj){ //como obtuve otra promesa tengo que poner .then
             console.log(obj);
             document.getElementById('cotizadolar').textContent = obj.blue.value_avg ;
         }).catch(function(error){
             console.error('Fallo la obtencion de cotizacion dolar blue promedio');
             console.error(error);
         })
    
    } 
    obtenerCotizacion()
   

    /* el json viene asi:
    {"oficial":{"value_avg":157.00,"value_sell":161.00,"value_buy":153.00},"blue":{"value_avg":289.00,"value_sell":291.00,"value_buy":287.00},"oficial_euro":{"value_avg":168.50,"value_sell":173.00,"value_buy":164.00},"blue_euro":{"value_avg":311.00,"value_sell":313.00,"value_buy":309.00},"last_update":"2022-10-21T19:55:35.153042-03:00"}
    */