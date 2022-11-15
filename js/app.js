document.querySelector('#tip-calculator').onchange = function() {
    // Bill and Tip Input --------------------------------------------
    let bill = Number(document.getElementById('billTotal').value);
    let tip = document.getElementById('tipInput').value;
    
    // Display to HTML ----------------------------------------------
    document.getElementById('billTotal').innerHTML = `${billTotal}%`;
    document.getElementById('tipOutput').innerHTML = `${tip}%`;

    // Bill and Tip logic --------------------------------------------
    let tipValue = bill * (tip/100);
    let finalBill = bill + tipValue;
    console.log(finalBill);



    let tipAmount = document.querySelector('#tipAmount');
    let totalBillWithTip = document.querySelector('#totalBillWithTip');


    tipAmount.value = tipValue;
    totalBillWithTip.value = finalBill;

   //Show Final Bill

    document.getElementById('results');
};