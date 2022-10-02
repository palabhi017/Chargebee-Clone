let AM = "ANNUAL";
let coruncy = "INR"
console.log(coruncy)
document.querySelector("#AM>div:last-child").addEventListener("click",abcd);
function abcd(){
document.querySelector("#AM>div:first-child").style.backgroundColor = "#8b5dca";
document.querySelector("#AM>div:last-child").style.backgroundColor = "white";
document.querySelector("#AM>div:last-child").style.color = "#4300a3";
document.querySelector("#AM>div:first-child").style.color = "white";
AM="MONTHLY"

if(coruncy=="USD"||"EUR"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "299/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "599/mo"
}
else if(coruncy=="GBP"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "249/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "449/mo"

}
else if(coruncy=="AUD"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "419/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "799/mo"
}
else if(coruncy=="CAD"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "399/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "699/mo"
}
else if(coruncy=="INR"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "23,890/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "47,890/mo"

}
}
document.querySelector("#AM>div:first-child").addEventListener("click",abcde);
function abcde(){
document.querySelector("#AM>div:last-child").style.backgroundColor = "#8b5dca";
document.querySelector("#AM>div:first-child").style.backgroundColor = "white";
document.querySelector("#AM>div:first-child").style.color = "#4300a3";
document.querySelector("#AM>div:last-child").style.color = "white";
AM="ANNUAL"
if(coruncy=="USD"||"EUR"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "249/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "549/mo"
}
else if(coruncy=="GBP"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "199/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "379/mo"

}
else if(coruncy=="AUD"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "359/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "729/mo"
}
else if(coruncy=="CAD"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "329/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "599/mo"
}
else if(coruncy=="INR"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "19,915/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "43,915/mo"

}
}
document.querySelector("#coruncy>div:first-child").addEventListener("click",change1);
function change1(){
document.querySelector("#coruncy>div:first-child").style.backgroundColor="white";
document.querySelector("#coruncy>div:first-child").style.color="#4300a3";

document.querySelector("#coruncy>div:nth-child(2)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(2)").style.color="white";
document.querySelector("#coruncy>div:nth-child(3)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(3)").style.color="white";
document.querySelector("#coruncy>div:nth-child(4)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(4)").style.color="white";
document.querySelector("#coruncy>div:nth-child(5)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(5)").style.color="white";
document.querySelector("#coruncy>div:nth-child(6)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(6)").style.color="white";
coruncy="USD"
document.querySelector("#prices>div:nth-child(1)>h3").innerText = "USD"
document.querySelector("#prices>div:nth-child(2)>h3").innerText = "USD"
document.querySelector("#prices>div:nth-child(3)>h3").innerText = "USD"

if(AM=="ANNUAL"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "249/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "549/mo"

}
else if(AM=="MONTHLY"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "299/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "599/mo"
}
console.log(coruncy)
}
document.querySelector("#coruncy>div:nth-child(2)").addEventListener("click",change2);
function change2(){
document.querySelector("#coruncy>div:nth-child(2)").style.backgroundColor="white";
document.querySelector("#coruncy>div:nth-child(2)").style.color="#4300a3";

document.querySelector("#coruncy>div:nth-child(1)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(1)").style.color="white";
document.querySelector("#coruncy>div:nth-child(3)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(3)").style.color="white";
document.querySelector("#coruncy>div:nth-child(4)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(4)").style.color="white";
document.querySelector("#coruncy>div:nth-child(5)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(5)").style.color="white";
document.querySelector("#coruncy>div:nth-child(6)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(6)").style.color="white";
coruncy="EUR"
document.querySelector("#prices>div:nth-child(1)>h3").innerText = "EUR"
document.querySelector("#prices>div:nth-child(2)>h3").innerText = "EUR"
document.querySelector("#prices>div:nth-child(3)>h3").innerText = "EUR"


if(AM=="ANNUAL"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "249/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "549/mo"

}
else if(AM=="MONTHLY"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "299/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "599/mo"
}
}
document.querySelector("#coruncy>div:nth-child(3)").addEventListener("click",change3);
function change3(){
document.querySelector("#coruncy>div:nth-child(3)").style.backgroundColor="white";
document.querySelector("#coruncy>div:nth-child(3)").style.color="#4300a3";

document.querySelector("#coruncy>div:nth-child(2)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(2)").style.color="white";
document.querySelector("#coruncy>div:nth-child(1)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(1)").style.color="white";
document.querySelector("#coruncy>div:nth-child(4)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(4)").style.color="white";
document.querySelector("#coruncy>div:nth-child(5)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(5)").style.color="white";
document.querySelector("#coruncy>div:nth-child(6)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(6)").style.color="white";
coruncy="GBP"
document.querySelector("#prices>div:nth-child(1)>h3").innerText = "GBP"
document.querySelector("#prices>div:nth-child(2)>h3").innerText = "GBP"
document.querySelector("#prices>div:nth-child(3)>h3").innerText = "GBP"


if(AM=="ANNUAL"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "199/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "379/mo"

}
else if(AM=="MONTHLY"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "249/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "449/mo"
}
}
document.querySelector("#coruncy>div:nth-child(4)").addEventListener("click",change4);
function change4(){
document.querySelector("#coruncy>div:nth-child(4)").style.backgroundColor="white";
document.querySelector("#coruncy>div:nth-child(4)").style.color="#4300a3";

document.querySelector("#coruncy>div:nth-child(2)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(2)").style.color="white";
document.querySelector("#coruncy>div:nth-child(3)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(3)").style.color="white";
document.querySelector("#coruncy>div:nth-child(1)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(1)").style.color="white";
document.querySelector("#coruncy>div:nth-child(5)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(5)").style.color="white";
document.querySelector("#coruncy>div:nth-child(6)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(6)").style.color="white";
coruncy="AUD"
document.querySelector("#prices>div:nth-child(1)>h3").innerText = "AUD"
document.querySelector("#prices>div:nth-child(2)>h3").innerText = "AUD"
document.querySelector("#prices>div:nth-child(3)>h3").innerText = "AUD"


if(AM=="ANNUAL"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "359/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "729/mo"

}
else if(AM=="MONTHLY"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "419/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "799/mo"
}
}
document.querySelector("#coruncy>div:nth-child(5)").addEventListener("click",change5);
function change5(){
document.querySelector("#coruncy>div:nth-child(5)").style.backgroundColor="white";
document.querySelector("#coruncy>div:nth-child(5)").style.color="#4300a3";

document.querySelector("#coruncy>div:nth-child(2)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(2)").style.color="white";
document.querySelector("#coruncy>div:nth-child(3)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(3)").style.color="white";
document.querySelector("#coruncy>div:nth-child(4)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(4)").style.color="white";
document.querySelector("#coruncy>div:nth-child(1)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(1)").style.color="white";
document.querySelector("#coruncy>div:nth-child(6)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(6)").style.color="white";
coruncy="CAD"
document.querySelector("#prices>div:nth-child(1)>h3").innerText = "CAD"
document.querySelector("#prices>div:nth-child(2)>h3").innerText = "CAD"
document.querySelector("#prices>div:nth-child(3)>h3").innerText = "CAD"


if(AM=="ANNUAL"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "329/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "599/mo"

}
else if(AM=="MONTHLY"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "399/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "699/mo"
}
}
document.querySelector("#coruncy>div:nth-child(6)").addEventListener("click",change6);
function change6(){
document.querySelector("#coruncy>div:nth-child(6)").style.backgroundColor="white";
document.querySelector("#coruncy>div:nth-child(6)").style.color="#4300a3";

document.querySelector("#coruncy>div:nth-child(2)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(2)").style.color="white";
document.querySelector("#coruncy>div:nth-child(3)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(3)").style.color="white";
document.querySelector("#coruncy>div:nth-child(4)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(4)").style.color="white";
document.querySelector("#coruncy>div:nth-child(5)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(5)").style.color="white";
document.querySelector("#coruncy>div:nth-child(1)").style.backgroundColor="#8b5dca";
document.querySelector("#coruncy>div:nth-child(1)").style.color="white";
coruncy="INR"
document.querySelector("#prices>div:nth-child(1)>h3").innerText = "INR"
document.querySelector("#prices>div:nth-child(2)>h3").innerText = "INR"
document.querySelector("#prices>div:nth-child(3)>h3").innerText = "INR"


if(AM=="ANNUAL"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "19,915/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "43,915/mo"

}
else if(AM=="MONTHLY"){
    document.querySelector("#prices>div:nth-child(2)>h1").innerText = "23,890/mo"
    document.querySelector("#prices>div:nth-child(3)>h1").innerText = "47,890/mo"
}
}
