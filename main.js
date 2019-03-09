function createDivs() {
    for (let i = 1; i < 101; i++) {
        var f = i % 3 == 0, b = i % 5 == 0;
        let div = document.createElement("div");
        div.setAttribute("id", "my-div-" + (i), "class", "bck-" + (f ? b ? "first" : "second" : b ? "third" : i));
        div.setAttribute("class", "bck-" + (f ? b ? "first" : "second" : b ? "third" : i));
        let divText = document.createTextNode(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
        div.appendChild(divText);
        let divParent = document.getElementById("container");
        divParent.appendChild(div);

    }
}
function removeDivs() {
    document.getElementById('container').textContent = '';
}