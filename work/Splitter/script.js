var tip;
var tipVal = 0;
var bill;
var pax;
var thisButton;

function addTip(amount,buttonNum){
    tipVal = Number(amount);
    var i = buttonNum;
    thisButton = document.getElementsByClassName("tipButton")[i];
    thisButton.style.backgroundColor = "#26c2ad";
    return tipVal;
};

function calculateTip(){
    var bill = Number(document.getElementById("billInput").value);
    var pax = Number(document.getElementById("peopleInput").value);
    var tip = tipVal;
    
    if(bill <= 0 || pax <= 0){
        alert("input fields cannot be zero!");

    }else if(isNaN(bill) || isNaN(pax)){
        alert("input must be a number");

    }else if(tipVal == 0){
        var totalAmount = Number((bill / pax)).toFixed(2);
        var tipOutput = document.getElementsByClassName("tipOutput")[0];
        tipOutput.innerHTML = "$00.00";
        var totalOutput = document.getElementsByClassName("tipOutput")[1];
        totalOutput.innerHTML = "$" + totalAmount;
        var i;
        for(i = 0; i < 2; i++){
            document.getElementsByClassName("tipOutput")[i].style.color = "#26c2ad";
            document.getElementsByClassName("tipOutput")[i].style.fontSize = "2.5vw";
        }

    }else{
        var tipAmount = (bill * tip / pax);
        var totalAmount = Number((bill / pax) + tipAmount).toFixed(2);
        var tipOutput = document.getElementsByClassName("tipOutput")[0];
        tipOutput.innerHTML = "$" + (tipAmount).toFixed(2);
        var totalOutput = document.getElementsByClassName("tipOutput")[1];
        totalOutput.innerHTML = "$" + totalAmount;
        var i;
        for(i = 0; i < 2; i++){
            document.getElementsByClassName("tipOutput")[i].style.color = "#26c2ad";
            document.getElementsByClassName("tipOutput")[i].style.fontSize = "2.5vw";
        }
    }
}

function reset(){
    document.getElementById("billInput").value = "";
    document.getElementById("peopleInput").value = "";
    document.getElementsByClassName("tipOutput")[0].innerHTML = "$00.00";
    document.getElementsByClassName("tipOutput")[1].innerHTML = "$00.00";
    tipVal.value = "";
    thisButton.style.backgroundColor = "#00474b";
    var i;
        for(i = 0; i < 2; i++){
            document.getElementsByClassName("tipOutput")[i].style.color = "#26c2ad";
            document.getElementsByClassName("tipOutput")[i].style.fontSize = "2.5vw";
        }
}