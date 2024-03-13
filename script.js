console.log('Hello!');

const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const generateBtn = document.getElementById('generate-btn');

function showAdvice(data) {
    const { id, advice } = data.slip;
    adviceId.textContent = id;
    adviceText.textContent = advice;  
}

const generate = async () => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        showAdvice(data);
    } catch (err) {
        console.log(err);
    }
}

generateBtn.addEventListener('click', generate);

window.onload = generate();