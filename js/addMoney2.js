document.getElementById('btn-add-money')
   .addEventListener('click',function(event){
      event.preventDefault();



      const addMoney = getInputFieldValueById('input-add-money');
      const pinNumber = getInputFieldValueById('input-pin-number');

      if(isNaN(addMoney)){
          alert('Failed to add money , see you soon');
          return;
      }

    //wrong way to verify . Do not try it in your serious website
      if(pinNumber === 1234){
       const balance = getTextFieldValueById('account-balance');
       const newBalance = balance + addMoney;
       console.log(newBalance);

       document.getElementById('account-balance').innerText = newBalance ;
       
        //  Add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. Balance ${newBalance}`;
        console.log(p);

        // should be a common function
        document.getElementById('transaction-container').appendChild(p);
       
      }
      else{
        alert('Failed to add the money.')
      }
})