function addTip(amount,buttonNum){
    const tip = amount;
    const i = buttonNum;
    document.getElementsByClassName("tipButton")[i].style.backgroundColor = "#000000";
    return tip;
}



function calculateTip(){
    const bill = document.getElementById("billInput").value;
    const pax = document.getElementById("billInput").value;
    const tipAmount = addTip();
    alert(bill + pax + tipAmount);

}