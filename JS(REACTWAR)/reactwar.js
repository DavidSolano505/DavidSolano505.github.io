const sectionselectatack=document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
sectionReiniciar.style.display = 'none'
const botonPersonajeJugador=document.getElementById("boton-personaje")
const AttackPyro=document.getElementById("Attack Pyro")
const AttackHydro=document.getElementById("Attack Hydro")
const AttackGeo=document.getElementById("Attack Geo")
const AttackElectro=document.getElementById("Attack Electro")
const AttackVegta=document.getElementById("Attack Vegta")
const AttackVento=document.getElementById("Attack Vento")
const botonreiniciar= document.getElementById("boton-Reiniciar")
const sectionselectperson=document.getElementById('seleccionar-personaje')
const newDiv =document.getElementById("resultado")
const Attackjp =document.getElementById("Attack-jp")
const Attackcp =document.getElementById("Attack-cp")
const sectionReiniciar = document.getElementById('reiniciar')
const spanVidajugador=document.getElementById("vidas-jugador")
const spanVidaenemigo=document.getElementById("vidas-enemigo")



let ataqueJugador
let ataqueEnemigo
let vidaJugador =3
let vidaEnemigo =3

//class Reactwar {
//    constructor(nombre, foto, vida) {
//        this.nombre = nombre
//        this.foto = foto
//        this.vida = vida
//        this.ataques = []
//    }
//}

//let LuChang = new Reactwars('Lu Chang', './imagenes/luchang_p.png', 5)

//let Ardrid = new Reactwars('Ardrid', './imagenes/ardrid_p.png', 5)

//let Fogos = new Reactwars('Fogos', './imagenes/fogos_p.png', 5)

//let Shock = new Reactwars('Shock', './imagenes/shock_male_p.png', 5)

//let Godman = new Reactwars('Godman', './imagenes/godman_p.png', 5)

//let Oldswan = new Reactwars('Oldswan', './imagenes/Oldswan_p.png', 5)


//hipodoge.ataques.push(
//    { nombre: '💧', id: 'boton-agua' },
//    { nombre: '💧', id: 'boton-agua' },
//    { nombre: '💧', id: 'boton-agua' },
//    { nombre: '🔥', id: 'boton-fuego' },
//    { nombre: '🌱', id: 'boton-tierra' },
//)

//capipepo.ataques.push(
//    { nombre: '🌱', id: 'boton-tierra' },
//    { nombre: '🌱', id: 'boton-tierra' },
//    { nombre: '🌱', id: 'boton-tierra' },
//    { nombre: '💧', id: 'boton-agua' },
//    { nombre: '🔥', id: 'boton-fuego' },
    
//)

//ratigueya.ataques.push(
//    { nombre: '🔥', id: 'boton-fuego' },
//    { nombre: '🔥', id: 'boton-fuego' },
//    { nombre: '🔥', id: 'boton-fuego' },
//    { nombre: '💧', id: 'boton-agua' },
//    { nombre: '🌱', id: 'boton-tierra' },
//)

//Reactwarses.push(hipodoge,capipepo,ratigueya)




function iniciarJuego() {
    
    sectionselectatack.style.display='none'
    
    /* mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

    })
    */
   

    
    
    botonPersonajeJugador.addEventListener('click',seleccionarPersonajeJugador)
    

//    <button id="Attack Pyro">Pyro🔥</button>
//    <button id="Attack Hydro">Hydro♒</button>
//    <button id="Attack Geo">Geo🥌</button>
//    <button id="Attack Electro">Electro⚡</button>
//    <button id="Attack Vegta">Vegta🌱</button>
//    <button id="Attack Vento">Vento🌪</button>  

    
    AttackPyro.addEventListener('click', ataquepyro)
    
    AttackHydro.addEventListener('click', ataquehydro)
    
    AttackGeo.addEventListener('click', ataquegeo)
    
    AttackElectro.addEventListener('click', ataqueelectro)
    
    AttackVegta.addEventListener('click', ataquevegta)
    
    AttackVento.addEventListener('click', ataquevento)
    
    
    botonreiniciar.addEventListener('click', reiniciarjuego)
}
function seleccionarPersonajeJugador(){
    
    
    sectionselectatack.style.display= 'flex'
    
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
    
             
    newDiv.innerHTML=just
    
    
    AttackPyro.disabled=true
    
    AttackHydro.disabled=true
    
    AttackGeo.disabled=true
    
    AttackElectro.disabled=true
    
    AttackVegta.disabled=true
    
    AttackVento.disabled=true
    
    
    sectionReiniciar.style.display = 'block'
            
}

function combate() {
    
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

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

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
