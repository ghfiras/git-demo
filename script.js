const counterDisplay = document.querySelector('.counter-value');
const resetBtn = document.querySelector('.reset-btn');
let count = 0;
window.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;  
    console.log("Current count: " + count);
});

resetBtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    count = 0;
    counterDisplay.textContent = count;
});
