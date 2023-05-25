"use strict";

window.addEventListener("load", initapp);
// tom global variable der kan gemme vores animals, så vi kan tilgå det fra andre funktioner.
let animalList = []; // del 1 

function initapp() {
    createAnimal("lucas", "cat", 28); // del 1
    console.log(animalList); // del 1
    document.querySelector("#create-form").addEventListener("submit", createNewAnimal) // del 2
    showAnimals(); // del 3
}
// vi giver funktionen 3 parametre. vi laver et objekt ved at lave en const newanimal som skal have property name, type og age med tilsvarende værdier fra parmeteren. 
// animallist er den liste vi vil pushe nye (newamial) til. 
function createAnimal(name, type, age) { //del 1
    const newAnimal = { name: name, type: type, age: age }
    animalList.push(newAnimal)
}

function createNewAnimal(event) { //del 2
    event.preventDefault();
    const form = document.querySelector("#create-form")
    const name = form.name.value
    const type = form.type.value
    const age = form.age.value
    
    createAnimal(name, type, age);
    console.log(animalList);
    showAnimals(); // del 3
}

function showAnimal(animal) { // del 3
    document.querySelector("tbody").insertAdjacentHTML("beforeend", /*HTML*/`
    <tr>
    <td>${animal.name}</td>
    <td>${animal.type}</td>
    <td>${animal.age}</td>
    </tr>
    `)
}

function showAnimals() { // del 3
    document.querySelector("tbody").innerHTML = ""
    animalList = animalList.sort((a,b) => a.name.localeCompare(b.name))
    for (const animal of animalList) {
        showAnimal(animal)
    }
}