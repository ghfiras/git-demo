const counterDisplay = document.querySelector('.counter-value');
let count = 0;
window.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;  
    console.log("Current count: " + count);
});
