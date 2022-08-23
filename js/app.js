document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.innerText === 'SELECT') {
        const currentNode = event.target;
        const preNode = currentNode.previousElementSibling;
        const player = preNode.innerText;
        const ol = document.getElementById('player-list');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(player));
        ol.appendChild(li);
        currentNode.setAttribute('disabled', true);
    }
})

document.getElementById('btn-calc').addEventListener('click', function () {
    const playerNum = document.querySelectorAll('#player-list li').length;
    const perPlayerCost = getInputValue('player-cost');
    const playerExpenses = playerNum * perPlayerCost;
    setValue('player-exp', playerExpenses);
})

document.getElementById('btn-calc-total').addEventListener('click', function () {
    const playerExpElement = document.getElementById('player-exp');
    const playerExpString = playerExpElement.innerText;
    const playerExp = parseInt(playerExpString);
    const managerExp = getInputValue('manager-cost');
    const coachExp = getInputValue('coach-cost');
    const totalExp = playerExp + managerExp + coachExp;
    setValue('total-exp', totalExp);
})