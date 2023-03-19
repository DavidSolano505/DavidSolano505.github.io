let ataqueJugador
let ataqueEnemigo
let vidaJugador =3
let vidaEnemigo =3

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}



function iniciarJuego() {
    let sectionselectatack=document.getElementById('seleccionar-ataque')
    sectionselectatack.style.display='none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
   

    
    let botonPersonajeJugador=document.getElementById("boton-personaje")
    botonPersonajeJugador.addEventListener('click',seleccionarPersonajeJugador)
    

//    <button id="Attack Pyro">Pyro🔥</button>
//    <button id="Attack Hydro">Hydro♒</button>
//    <button id="Attack Geo">Geo🥌</button>
//    <button id="Attack Electro">Electro⚡</button>
//    <button id="Attack Vegta">Vegta🌱</button>
//    <button id="Attack Vento">Vento🌪</button>  

    let AttackPyro=document.getElementById("Attack Pyro")
    AttackPyro.addEventListener('click', ataquepyro)
    let AttackHydro=document.getElementById("Attack Hydro")
    AttackHydro.addEventListener('click', ataquehydro)
    let AttackGeo=document.getElementById("Attack Geo")
    AttackGeo.addEventListener('click', ataquegeo)
    let AttackElectro=document.getElementById("Attack Electro")
    AttackElectro.addEventListener('click', ataqueelectro)
    let AttackVegta=document.getElementById("Attack Vegta")
    AttackVegta.addEventListener('click', ataquevegta)
    let AttackVento=document.getElementById("Attack Vento")
    AttackVento.addEventListener('click', ataquevento)
    
    let botonreiniciar= document.getElementById("boton-Reiniciar")
    botonreiniciar.addEventListener('click', reiniciarjuego)
}
function seleccionarPersonajeJugador(){
    
    let sectionselectatack=document.getElementById('seleccionar-ataque')
    sectionselectatack.style.display= 'flex'
    let sectionselectperson=document.getElementById('seleccionar-personaje')
    sectionselectperson.style.display='none'

    
    let spanPersonajej =document.getElementById("personaje-jugador")
    if(document.getElementById("Lu Chang").checked){
        spanPersonajej.innerHTML= 'Lu Chang'
        
    }
    else if(document.getElementById("Ardrid").checked){
        spanPersonajej.innerHTML= 'Ardrid'
      
    }
    else if(document.getElementById("Fogos").checked){
        spanPersonajej.innerHTML= 'Fogos'
       
    }
    else if(document.getElementById("Shock").checked){
        spanPersonajej.innerHTML= 'Shock'
        
    }
    else if(document.getElementById("Godman").checked){
        spanPersonajej.innerHTML= 'Godman'
        
    }
    else if(document.getElementById("Oldswan").checked){
        spanPersonajej.innerHTML= 'Oldswan'
       
    
    }
    else{
        alert("No seleccionaste ningun personaje")
        location.reload()
    }

    
    
   
    
    seleccionarPersonajeEnemigo()
    

}



function seleccionarPersonajeEnemigo(){
    let ataqueAleatorio= aleatorio(1,6)
    let spanPersonajeen=document.getElementById("personaje-enemigo")
    if(ataqueAleatorio==1){
        spanPersonajeen.innerHTML="Lu Chang"
    } else if (ataqueAleatorio==2){
        spanPersonajeen.innerHTML="Ardrid"
    } else if (ataqueAleatorio==3){
        spanPersonajeen.innerHTML="Fogos"
    } else if (ataqueAleatorio==4){
        spanPersonajeen.innerHTML="Shock"
    } else if (ataqueAleatorio==5){
        spanPersonajeen.innerHTML="Godman"
    } else {
        spanPersonajeen.innerHTML="Oldswan"
    }
}

function ataquepyro() {
    ataqueJugador='PYRO'
    AtaquedelEnemigo()
}
function ataquegeo(){
    ataqueJugador='GEO'
    AtaquedelEnemigo()
}
function ataqueelectro() {
    ataqueJugador='ELECTRO'
    AtaquedelEnemigo()
}
function ataquehydro() {
    ataqueJugador='HYDRO'
    AtaquedelEnemigo()
}
function ataquevegta() {
    ataqueJugador='VEGTA'
    AtaquedelEnemigo()
}
function ataquevento() {
    ataqueJugador='VENTO'
    AtaquedelEnemigo()

}
function AtaquedelEnemigo(){
    let ataqueenemigo=aleatorio(1,6)
   
    if(ataqueenemigo==1){
        ataqueEnemigo='PYRO'

    }
    else if(ataqueenemigo==2) {
        ataqueEnemigo='ELECTRO'

    }
    else if(ataqueenemigo==3) {
        ataqueEnemigo='HYDRO'
    
    }
    else if(ataqueenemigo==4) {
        ataqueEnemigo='VEGTA'
        
    }
    else if(ataqueenemigo==5){
        ataqueEnemigo='GEO'
    }
    else  {
        ataqueEnemigo='VENTO'
     
    }

    combate() 
}

function crearmensaje(resultado) {
    //let parrafo=document.createElement("p")
    let newDiv =document.getElementById("resultado")
    let Attackjp =document.getElementById("Attack-jp")
    let Attackcp =document.getElementById("Attack-cp")
    
    let Nuevoataquedeljugador=document.createElement("p")
    let Nuevoataquedelenemigo=document.createElement("p")

    newDiv.innerHTML=resultado
    Nuevoataquedeljugador.innerHTML=ataqueJugador
    Nuevoataquedelenemigo.innerHTML=ataqueEnemigo


    //parrafo.innerHTML="Tu personaje ataco con " + ataqueJugador + ", y el enemigo ataco con "+ ataqueEnemigo + " - "+resultado
    Attackjp.appendChild(Nuevoataquedeljugador)
    Attackcp.appendChild(Nuevoataquedelenemigo)

    
}

function crearmensajeFinal(just) {
    
    let newDiv =document.getElementById("resultado")           
    newDiv.innerHTML=just
    
    let AttackPyro=document.getElementById("Attack Pyro")
    AttackPyro.disabled=true
    let AttackHydro=document.getElementById("Attack Hydro")
    AttackHydro.disabled=true
    let AttackGeo=document.getElementById("Attack Geo")
    AttackGeo.disabled=true
    let AttackElectro=document.getElementById("Attack Electro")
    AttackElectro.disabled=true
    let AttackVegta=document.getElementById("Attack Vegta")
    AttackVegta.disabled=true
    let AttackVento=document.getElementById("Attack Vento")
    AttackVento.disabled=true
    
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
            
}

function combate() {
    let spanVidajugador=document.getElementById("vidas-jugador")
    let spanVidaenemigo=document.getElementById("vidas-enemigo")
    if(ataqueEnemigo == ataqueJugador) {
        crearmensaje("EMPATE")
    } else if(ataqueJugador == 'PYRO' && ataqueEnemigo == 'GEO') {
        crearmensaje("GANASTE")
        vidaEnemigo--
        spanVidaenemigo.innerHTML=vidaEnemigo
        
    } else if(ataqueJugador == 'HYDRO' && ataqueEnemigo == 'PYRO') {
        crearmensaje("GANASTE")
        vidaEnemigo--
        spanVidaenemigo.innerHTML=vidaEnemigo
    
    } else if(ataqueJugador == 'GEO' && ataqueEnemigo == 'HYDRO') {
        crearmensaje("GANASTE")
        vidaEnemigo--
        spanVidaenemigo.innerHTML=vidaEnemigo
    } 
    else if(ataqueJugador=='PYRO' && ataqueEnemigo=='VEGTA'){
        crearmensaje("GANASTE")
        vidaEnemigo--
        spanVidaenemigo.innerHTML=vidaEnemigo
    }
    else if(ataqueJugador=='ELECTRO' && ataqueEnemigo=='GEO') {
        crearmensaje("GANASTE")
        vidaEnemigo--
        spanVidaenemigo.innerHTML=vidaEnemigo
    }
    else if(ataqueJugador=='HYDRO' && ataqueEnemigo=='GEO') {
        crearmensaje("GANASTE")
        vidaEnemigo--
        spanVidaenemigo.innerHTML=vidaEnemigo
    }
    else if(ataqueJugador=='FUEGO' && ataqueEnemigo=='ELECTRO') {
        crearmensaje("GANASTE")
        vidaEnemigo--
        spanVidaenemigo.innerHTML=vidaEnemigo
    }
    else if(ataqueJugador=='FUEGO' && ataqueEnemigo=='VENTO') {
        crearmensaje("GANASTE")
        vidaEnemigo--
        spanVidaenemigo.innerHTML=vidaEnemigo
    }
    else if(ataqueJugador=='ELECTRO' && ataqueEnemigo=='VENTO') {
        crearmensaje("GANASTE")
        vidaEnemigo--
        spanVidaenemigo.innerHTML=vidaEnemigo
    }
    else if(ataqueJugador=='ELECTRO' && ataqueEnemigo=='VEGTA') {
        crearmensaje("GANASTE")
        vidaEnemigo--
        spanVidaenemigo.innerHTML=vidaEnemigo
    }
    else if(ataqueJugador=='VEGTA' && ataqueEnemigo=='TIERRA') {
        crearmensaje("GANASTE")
        vidaEnemigo--
        spanVidaenemigo.innerHTML=vidaEnemigo
    }
    else if(ataqueJugador=='VEGTA' && ataqueEnemigo=='HYDRO') {
        crearmensaje("GANASTE")
        vidaEnemigo--
        spanVidaenemigo.innerHTML=vidaEnemigo
}
    else {
        crearmensaje("PERDISTE")
        vidaJugador--
        spanVidajugador.innerHTML=vidaJugador
    }

    revisarVidas()

}
function revisarVidas(){
    if (vidaEnemigo == 0){
        crearmensajeFinal("Felicidades! Ganaste")
        
    }else if (vidaJugador == 0){
        crearmensajeFinal("Sorry, Perdiste")
    }


}

function reiniciarjuego(){
    location.reload()
}
window.addEventListener('load', iniciarJuego)


//<label for="Lu Chang">Lu Chang "Señor de los mares medios" ♒</label>
//<input type="radio" name="personaje" id="Lu Chang"/>
//<label for="Ardrid">Ardrid "Protector del bosque"🌱</label>
//<input type="radio" name="personaje" id="Ardrid"/>

//<label for="Fogos">Fogos "Asesino flamante" 🔥</label>
//<input type="radio" name="personaje" id="Fogos"/>

//<label for="Shock">Shock "El de los truenos" ⚡</label>
//<input type="radio" name="personaje" id="Shock"/>

//<label for="Godman">Godman "El dios de las rocas"🥌</label>
//<input type="radio" name="personaje" id="Godman"/>

//<label for="Oldswan">Oldswan "Caballero aventado" 🌪 </label>
//<input type="radio" name="personaje" id="Oldswan"/>

//  <p>
//    <button id="Attack Pyro">Pyro🔥</button>
//    <button id="Attack Hydro">Hydro♒</button>
//    <button id="Attack Geo">Geo🥌</button>
//    <button id="Attack Electro">Electro⚡</button>
//    <button id="Attack Vegta">Vegta🌱</button>
//    <button id="Attack Vento">Vento🌪</button>  
//  </p>
//Write a code how it is a Facebook
