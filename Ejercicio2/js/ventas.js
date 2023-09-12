class elementoInventario{
    elemento(){
        this.nombre="";
        this.precio="";
        this.cantidad="";
    }
    setNombre(nombre){
        this.nombre = nombre;
        }
    setPrecio(precio){
        this.precio = precio;
        }
    setCantidad(cantidad){
        this.cantidad = cantidad;
        }  
    getNombre(){
        return this.nombre;
        }    
    getPrecio(){
        return this.precio;
        }    
    getCantidad(){
        return this.cantidad;
        }         
}

function iniciar(){
    var Submit = document.getElementById("btnSubmit");
    if(Submit.addEventListener){
        Submit.addEventListener("click", function(){
        createObject(document.frmProductos);
        }, false);
        }
        else if(Submit.attachEvent){
        Submit.attachEvent("onclick", function(){
        createObject(document.frmProductos);
        });
        }
}

function createObject(form){
    const elemento = new elementoInventario();
    elemento.setNombre(form.txtNombre.value);
    elemento.setPrecio(form.txtPrecio.value);
    elemento.setCantidad(form.txtCantidad.value);
    showProperties(elemento);
}

let arrarObjetos = new Array;
let ventaTotal = 0;

function showProperties(objeto){
    var tabla = document.getElementById("tablaResultados");
    arrarObjetos.push(objeto);
    ventaTotal += (objeto.getCantidad() * objeto.getPrecio());
    var tblProductos= "";

    arrarObjetos.forEach(element => {
        tblProductos += "<tr>";
        tblProductos += "<td>" + element.getNombre() + "</td>";
        tblProductos += "<td>" + element.getPrecio() + "</td>";
        tblProductos += "<td>" + element.getCantidad() + "</td>";
        tblProductos += "</tr>";
        });

        tabla.innerHTML = tblProductos;
         var Total = document.getElementById("boxTotal");
        Total.innerHTML = "<p>El total de vental es : $ "+ ventaTotal +"<p>";
}



if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
   }
   else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
   }
   