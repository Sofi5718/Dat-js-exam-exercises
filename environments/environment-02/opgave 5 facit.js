"use strict"

window.addEventListener("load", initapp);

let animals = [{name:"lucas", type:"cat", age:43},{name:"seb", type:"cat", age:25},{name:"sofie", type:"cat", age:76} ] //del 1 

function initapp() {
    console.log(animals); //del 1 
    showAnimals(); //del 2
    document.querySelector("#create-form").addEventListener("submit", createAnimal);
}

function showAnimals() { //del 2
    document.querySelector("tbody").innerHTML = "";
    const sortedAnimals = animals.sort((a, b) => a.age - b.age)
    for (const animal of sortedAnimals) {
        document.querySelector("tbody").insertAdjacentHTML("beforeend",/*HTML*/`
        <tr>
        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td>${animal.age}</td>
        </tr>
        `)
    }
}

function createAnimal(event) { //del 3 
    event.preventDefault();
    const form = document.querySelector("#create-form")
    const name = form.name.value
    const type = form.type.value
    const age = form.age.value

    const newAnimal = { name: name, type: type, age: age }
    animals.push(newAnimal);
    showAnimals();
}