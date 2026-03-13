let count = 0;

const button = document.getElementById('order-button');

button.addEventListener('click', () => {
    count++;
    button.textContent = `${count} Box${count > 1 ? "es" : ""} Ordered!`;
});