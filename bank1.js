let balance = 0;

    function deposit() {
        const depositAmount = parseFloat(document.getElementById('depositAmount').value);
        if (depositAmount > 0) {
            balance += depositAmount;
            alert('Deposit successful!');
            document.getElementById('depositAmount').value = '';
        } else {
            alert('Please enter a valid amount.');
        }
    }

    function withdraw(){
        const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
        if(withdrawAmount > 0 && withdrawAmount <=balance){
            balance -= withdrawAmount;
            alert('Withdrawal successfull');
            document.getElementById('withdrawAmount').value = '';
        } else if (withdrawAmount > balance){
            alert('Insufficeient balance.');
        } else {
            alert('Please enter a valid amount');
        }
    }

    function showBalance(){
        document.getElementById('balanceDisplay').innerText = 'Current Balance: $' + balance.toFixed(2);
    }





