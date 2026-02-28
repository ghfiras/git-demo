const counterDisplay = document.querySelector('.counter-value');
const clickBtn = document.querySelector('.btn');
let count = 0;
clickBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;  
    console.log("Current count: " + count);
});
