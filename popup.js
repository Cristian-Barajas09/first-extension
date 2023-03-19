const message = document.querySelector('div');
const btn = document.querySelector('#change-message')
btn.addEventListener('click', () => {
    message.textContent = "nuevo mensaje"
    alert("hola mundo")
})