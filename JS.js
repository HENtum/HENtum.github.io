let what = confirm("Хотите ввести свое имя ?");
if(what){
    let name = prompt("Введите свое имя");
    if(name) {alert("Привет "+ name)
}else{
    alert('Вы нажали на "Отмена"')
}
}else{
    alert("Вы отказались вводить свое имя");
    }
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
function calk(a, b, v, z) {
    a = prompt('Введите первое число');
    if(a == null){
        return; 
    }
    b = prompt('Введите второе число');
    v = prompt('Какое действие будем выполнять?');
    if(v == '+'){
    z = (Number(a)+(Number(b)))
    }else if(v == '-'){
    z = (Number(a)-(Number(b)))   
    }else if(v == '*'){
    z = (Number(a)*(Number(b)))
    }else if(v = '/'){
    z = (Number(a)/(Number(b)))
    }
    alert(z);
    }
   