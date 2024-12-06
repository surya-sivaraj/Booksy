var btnn = document.getElementById("popup")
var overlayy = document.querySelector(".overlay")
var boxx= document.querySelector(".box")
 btnn.addEventListener("click",function(){
    overlayy.style.display="block"
    boxx.style.display="block"
 })


 var cancel = document.getElementById("Cancel")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlayy.style.display="none"
    boxx.style.display="none"
})

var container = document.querySelector(".container")
var add = document.getElementById("Add")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookdiscr=document.getElementById("dicription")

add.addEventListener("click",function(event){
    event.preventDefault()
    var createcontainer = document.createElement("div")
    createcontainer.setAttribute("class","book")
createcontainer.innerHTML=`<h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${bookdiscr.value}</p>
        <button onclick="del(event)">Delete</button>
        `
        if (!booktitle.value.trim() || !bookauthor.value.trim() || !bookdiscr.value.trim()) {
            alert("All fields must be filled!");
            return;
        }
        
    container.append(createcontainer)
     overlayy.style.display="none"
    boxx.style.display="none"
    document.getElementById("studentform").reset();
})

function del(event)
{
    event.target.parentElement.remove()

}