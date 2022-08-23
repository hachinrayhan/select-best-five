function getInputValue(id) {
    const element = document.getElementById(id);
    const valueString = element.value;
    const value = parseInt(valueString);
    return value;
}

function setValue(id, value) {
    const inputField = document.getElementById(id);
    inputField.innerText = value;
}