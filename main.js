function createDivs() {
    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div");
        div.setAttribute("id", "my-div-" + (i + 1));
        let divText = document.createTextNode("Hello World " + (i + 1));
        div.appendChild(divText);
        let divParent = document.getElementById("container");
        divParent.appendChild(div);
    }
}