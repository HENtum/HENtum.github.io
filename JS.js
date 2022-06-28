const text = document.querySelector("#JS");
setTimeout( () => {
    echo(text)
},3000 )
function echo(ho){
ho.style.backgroundColor ="#179ae6"
ho.style.border = "5px solid"
ho.style.borderRadius = "30px"
ho.style.color = "yellow"
ho.style.borderColor = "#179ae6"
}