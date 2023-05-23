"use strict";

window.addEventListener("load", initapp);

let animalList = [];

function initapp() {
    console.log(animalList);
    document.querySelector("#create-form").addEventListener("submit", createNewAnimal)
    showAnimals();
}

function createAnimal(name, type, age) {
    const newAnimal = { name: name, type: type, age: age }
    animalList.push(newAnimal)
}

function createNewAnimal(event) {
    event.preventDefault();
    const form = document.querySelector("#create-form")
    const name = form.name.value
    const type = form.type.value
    const age = form.age.value
    
    createAnimal(name, type, age);
    console.log(animalList);
    showAnimals();
}

function showAnimal(animal) {
    document.querySelector("tbody").insertAdjacentHTML("beforeend", /*HTML*/`
    <tr>
    <td>${animal.name}</td>
    <td>${animal.type}</td>
    <td>${animal.age}</td>
    </tr>
    `)
}

function showAnimals() {
    document.querySelector("tbody").innerHTML = ""
    animalList = animalList.sort((a,b) => a.name.localeCompare(b.name))
    for (const animal of animalList) {
        showAnimal(animal)
    }
}