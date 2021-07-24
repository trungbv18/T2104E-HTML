var randomNumber=[];
while (randomNumber.length <5){
    var n=parseInt(Math.random())*100;
    if(!randomNumber.includes(n)){
        randomNumber.push(n);
    }
}
var luckyNumber=[];
function inputNumber(){
    var input=document.getElementById("luckynumber");
    var n=parseInt(input.value);
    if(!luckyNumber.includes(n) && luckyNumber.length<5 &&n>=0 &&n<=99){
        luckyNumber.push(n);
        alert("Ban da lua chon so: "+n);
    }
}
