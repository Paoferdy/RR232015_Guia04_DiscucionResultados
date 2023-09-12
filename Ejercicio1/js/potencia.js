class Potenciacion{
    potenciacion(){
        this.base = 0;
        this.potencia = 0;
        this.resultado = 0;
    }
    setBase(base){
        this.base = base;
        }
    setPotencia(potencia){
        this.potencia = potencia;
        }
    calcularResultado(){
        this.resultado = Math.pow(this.base, this.potencia);
    }
    mostrarInformacion(){
        var displayBox = document.getElementById("DisplayBox");
        displayBox.innerHTML = "<p>El resultado es: " + this.resultado + "</p>";
    }
}

function iniciar(){
    var btnShowInfo = document.getElementById("btnCalcular");
    if(btnShowInfo.addEventListener){
        btnShowInfo.addEventListener("click", function(){
        createObject(document.frmPotencia);
        }, false);
        }
        else if(btnShowInfo.attachEvent){
        btnShowInfo.attachEvent("onclick", function(){
        createObject(document.frmPotencia);
        });
        }
}
function createObject(form){
    const potencia = new Potenciacion();
    potencia.setBase(form.txtbase.value);
    potencia.setPotencia(form.txtpotencia.value);
    potencia.calcularResultado();
    potencia.mostrarInformacion();

}

if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
   }
   else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
   }