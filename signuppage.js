
let A = document.querySelector("#iemail")
let B = document.querySelector("#monum");
console.log(A.value,B)

let btn = document.querySelector("#btn");

btn.disabled = true;

B.addEventListener("change", statechange)

function statechange(){

    if(A.value===""&&B.value===""){
        btn.disabled = true;
    }
    else{
        btn.disabled = false;
        btn.style.backgroundColor="#4300a3"
        btn.style.cursor="pointer"

    }
   
}
btn.addEventListener("click", adddata)
let dataarr = [];
function adddata(){
   let dataobj = {Email : A.value,
    Monum : B.value}
    dataarr.push(dataobj)
   localStorage.setItem("userdata",JSON.stringify(dataarr))
   alert("Sign up successfull")
}