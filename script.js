var tip = document.forms.tipper.tipInput.value;
var bill = document.forms.tipper.billInput.value;
var button_name = "Tip Big!"

document.getElementById('changeifsplit').value = button_name;

function reloadTippy() {
    window.location.reload('index.html');
}

function CheckValue() {
    if ( document.forms.tipper.tipInput.value == 0 ) {
        loadSplit();
    } else if ( document.forms.tipper.tipInput.value > 0 ){
        unLoadSplit();
    }
}

function tipBig() {
    if ( isNaN(document.forms.tipper.billInput.value) || !document.forms.tipper.billInput.value ) { 
        alert("Please enter the bill amount."); 
    } else { 	
        var tip = document.forms.tipper.tipInput.value;
        var bill = document.forms.tipper.billInput.value;
        var tax = 1.0875
        var preTax = (parseFloat(bill)/tax);
        tipAmount = parseFloat(preTax) * (parseFloat(tip)/100);
        totalBill = parseFloat(bill) + tipAmount;
        result = "<p id='pay'>Cash Total: <strong>$";
        result += Math.ceil(parseFloat(totalBill)).toFixed(0) + "</strong></p>";
        result += "Bill details:<br>";
        result += "Your bill is: $" + bill + " <br>";
        result += "The tip is: $";
        result += parseFloat(tipAmount).toFixed(2);
        result += "<br>The total after tip is: $";
        result += parseFloat(totalBill).toFixed(2);

        document.getElementById('result').innerHTML = result;
        document.getElementById('result').style.display="inline";
        document.getElementById('split').style.display="inline";
        document.getElementById('reload').style.display="inline";
        document.getElementById('tipper').style.display="none";
    }
    jumpToResult();
    }

function jumpToResult() {
    window.location.hash='result';
}

function loadSplit() {
    document.getElementById('result').style.display="none";
    document.getElementById('split').style.display="inline";
    document.getElementById('reload').style.display="inline";
    document.getElementById('tipper').style.display="none";
}

function unLoadSplit() {
    document.getElementById('result').style.display="inline";
    document.getElementById('split').style.display="none";
    document.getElementById('reload').style.display="none";
}
    
function splitBill() {
    var tip = document.forms.tipper.tipInput.value;
    var bill = document.forms.tipper.billInput.value;
    var tax = 1.0875
    var preTax = (parseFloat(bill)/tax);
    tipAmount = parseFloat(preTax) * (parseFloat(tip)/100);
    totalBill = parseFloat(bill) + tipAmount;
    var numPeople = document.forms.split.splitInput.value;
    var split = Math.ceil(parseFloat(totalBill)).toFixed(0) / numPeople;
    var splitBill = parseFloat(document.forms.tipper.billInput.value).toFixed(2) / numPeople;
    var splitTip = parseFloat(tipAmount).toFixed(2) / numPeople;
    var splitTotal = parseFloat(totalBill).toFixed(2) / numPeople;
    var splitResult = "Cash: Each pay $" + split.toFixed(0) + "<br>";
    splitResult += "Bill: $" + parseFloat(splitBill).toFixed(2) + " per person" + "<br />";
    splitResult += "<span class='noTip' style='display: inline'>Tip: $" + parseFloat(splitTip).toFixed(2) + " per person" + "</span><br />";
    splitResult += "<span class='noTip' style='display: inline'>Total: $" + parseFloat(splitTotal).toFixed(2) + " per person</span>";
    document.getElementById('splitResult').innerHTML = splitResult;
}