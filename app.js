
document.getElementById("ourForm").addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(ourField.value)
    createItem(ourField.value)
}) 


//let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");
/*
ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(ourField.value)
    createItem(ourField.value)
})*/

function createItem(x) {
    let ourHTML = `<li>${x} <button onClick="deleteItem(this)">Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", ourHTML)
    ourField.value = ""
    ourField.focus()
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}