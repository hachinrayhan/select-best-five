document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.innerText === 'SELECT') {
        const currentNode = event.target;
        const preNode = currentNode.previousElementSibling;
        const player = preNode.innerText;
        const ol = document.getElementById('player-list');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(player));
        ol.appendChild(li);
        console.log(currentNode);
        currentNode.setAttribute('disabled', true);
    }
})