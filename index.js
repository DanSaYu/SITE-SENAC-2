var div = document.getElementById("principal-div");
var btnborder = document.getElementById("btn-border");
var clicked = true;
var clicks = 0;
var cliques = document.getElementById("cliques");
var classelista = document.getElementById("classe-lista")
var btn = document.getElementById("btn")


div.style.transition = "0.3s";

btnborder.addEventListener("click", ()=> {
    if (clicked == true) {
        div.style.border = "5px solid red"
        btnborder.innerText = "Remover borda"
        var katana = document.createElement("li")
        classelista.appendChild(katana)
        katana.innerHTML =  `<img src="img/katana-img.png" alt="Imagem de uma katana"> 
        <div> <h3>Categorias</h3>
         <p>Ação, Fantasia, Aventura, Shounen</p></div>`
        katana.className = "slime-img"
        clicked = false;
        clicks ++;
    }
    else{
        div.style.border = "none"
        btnborder.innerText = "Adicionar Borda"
        clicked = true;
        clicks ++;
    }
    cliques.innerText = `Numero de cliques: ${clicks}`
});






