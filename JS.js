let what = confirm("Хотите ввести свое имя ?");
if(what){
    let name = prompt("Введите свое имя");
    if(name) {alert("Привет "+ name)
}else{
alert("Вы отказались вводить свое имя")  
}
}else{
    alert("Отмена");
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
    function parse(){
    let date = new Date();
    let b =  date.getMonth();
    let a = (Number(b))+1
    if (date.getDate() && a < 10){
    document.getElementById("container").innerHTML = ( "Дата: " + "0" + date.getDate() + ".0" + a + "." + date.getFullYear())
    }else{
    document.getElementbyid("container").innerHTML = ( "Дата: " +  date.getDate() + "." + a + "."+ date.getFullYear())
    }}
    parse()
    function ter(){
    document.getElementById("container").innerHTML = "Но это не точно";
    }
    function ret(){
        return parse();
    }
    function qer(){
        document.getElementById("cont").innerHTML = "Если нажмешь то окажешся в яндексе, а эта страница закроеться";
    }
    function wet(){
        document.getElementById("cont").innerHTML = "Это проверка ссылки";  
    }
    function hello(){
    document.getElementById("World").innerHTML = ("Привет мир")
    }
    function byi(){
    document.getElementById("World").innerHTML = ("Hello World")
    }