let result = document.getElementById("result");
let btn = document.getElementById("myButton");
 
btn.addEventListener("click", () => {
    
    fetch("https://jsonplaceholder.typicode.com/todos")

        .then((res) => res.json())
        .then((data) => result.innerHTML = JSON.stringify(data))
        .catch((err) => result.innerHTML = JSON.stringify(err));

});
