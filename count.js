let count = 0;
//get the plus button 
document.getElementById('plus-btn').addEventListener('click',function(){
    const countNumberElement = document.getElementById('count-number');

    countNumberElement.innerText = ++count;
})
//get the minus button 
document.getElementById('minus-btn').addEventListener('click',function(){
    const countNumberElement = document.getElementById('count-number');

    countNumberElement.innerText = --count;
})