const numberInput = document.querySelector('#number');
const tableListNumbers = document.querySelectorAll('.table-list li h2');

numberInput.addEventListener('input', () => {
    changeTable(numberInput.value);
});

function changeTable(value) {
    for (let i = 0; i < tableListNumbers.length; i++) {
        tableListNumbers[i].textContent = i * value;
    };
};