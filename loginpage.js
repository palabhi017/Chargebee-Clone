let datalog = JSON.parse(localStorage.getItem("userdata"))

document.querySelector("#signin").addEventListener("click", login)

function login(){
    datalog.forEach(function(el){
        let A = document.querySelector("#email").value
        let B = document.querySelector("#pass").value
        if(A==el.Email&&B=="1234"){
            alert("login successfully")
        }
        else{
            alert("Email or password incorrect")
        }
    })
   console.log(el.Email,A)
}