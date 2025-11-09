let animalesRefugio = [
    {especie : "Perro", edad : 3},
    {especie : "Gato", edad : 4},
    {especie : "Conejo", edad : 1},
    {especie : "Loro", edad : 1},
];
let animalesAdoptados = [];
let continuar;

//Funciones
function adoptarMascota(){
    let especieElegida = prompt("Elija la mascota que desea adoptar: perro, gato, conejo, loro");
    especieElegida = especieElegida.charAt(0).toUpperCase() + especieElegida.slice(1).toLowerCase();

    let animalRefugio = animalesRefugio.find(animal => animal.especie === especieElegida);

    if (animalRefugio) {
        let nombreAnimal = prompt(`Elegiste un ${especieElegida} de ${animalRefugio.edad} años. ¿Qué nombre le querés poner?`);
        
        let animal = {
            nombre: nombreAnimal,
            especie: especieElegida,
            edad: animalRefugio.edad
        };

        animalesAdoptados.push(animal);
    } else {
        alert("Esa especie no está disponible. Probá con perro, gato, conejo o loro.");
    }
}

function imprimirAnimalesAdoptados(){
    console.log("Los animales que adoptaste son:");
    animalesAdoptados.forEach((animal) => {
        console.log(`Nombre: ${animal.nombre}, Especie: ${animal.especie}, Edad: ${animal.edad}`);
    });
}



alert("Bienvenido a 'La Pandilla Peluda 🐶'!");

do{
    adoptarMascota();
    continuar = confirm("¿Desea adoptar otra mascota? 🐾");
}while(continuar);

imprimirAnimalesAdoptados();