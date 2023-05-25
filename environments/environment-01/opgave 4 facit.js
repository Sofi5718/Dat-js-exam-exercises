"use strict";

window.addEventListener("load", initapp);

async function initapp() { //del 1
    users = await getUsers();
    console.log(users)
    showUsers(); //del 2
    createUser("lucas", true, "bitch") //del 3 
}

let users = []; //del 1

async function getUsers() { //del 1
    const reponse = await fetch("users.json")
    const data = reponse.json();
    return data
}


function showUsers() { //del 2
    document.querySelector("#userlist").innerHTML = "";
    for (const user of users) {
        console.log(user)
        if (user.active) {
            document.querySelector("#userlist").insertAdjacentHTML("beforeend", /*HTML*/`
            <li>${user.name}, ${user.active}</li>
            
            `)
        }
    }
}

function createUser(name, active, role) { //del 3
    const newUser = { name: name, active: active, role: role }
    users.push(newUser)
    showUsers();
}