let initialTime = document.getElementById("initialTime");
let endTime = document.getElementById("endTime");
let now;
let hour;
let minutes;
document.getElementById("bttnini").addEventListener("click", function() {
    now = new Date(); // Cria uma instância do objeto Date com a hora atual
    hour = now.getHours();
    minutes = now.getMinutes();

    let timeInput = document.getElementById("initialTime");
    let formattedTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    timeInput.value = formattedTime;
})

document.getElementById("bttnend").addEventListener("click", function() {
    now = new Date(); // Cria uma instância do objeto Date com a hora atual
    hour = now.getHours();
    minutes = now.getMinutes();

    let timeInput = document.getElementById("endTime");
    let formattedTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    timeInput.value = formattedTime;
})

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    initialTime = document.getElementById("initialTime");
    let timeResult = document.getElementById("timeResult");
    endTime = document.getElementById("endTime");
    let incrementTime = document.getElementById("incrementTime");
    let decrementTime = document.getElementById("decrementTime");

    let minInicialTime = parseInt(initialTime.value.substring(0, 2)) * 60 + parseInt(initialTime.value.substring(3, 5));
    let minEndTime = parseInt(endTime.value.substring(0, 2)) * 60 + parseInt(endTime.value.substring(3, 5));
    let minIncrementTime = parseInt(incrementTime.value.substring(0, 2)) * 60 + parseInt(incrementTime.value.substring(3, 5));
    let minDecrementTime = parseInt(decrementTime.value.substring(0, 2)) * 60 + parseInt(decrementTime.value.substring(3, 5));

    let timeSpent = minEndTime - minInicialTime;
    let minResult = timeSpent + minIncrementTime - minDecrementTime;

    // Converte o resultado de volta para o formato de horas e minutos (HH:MM)
    let hours = Math.floor(minResult / 60);
    let minutes = minResult % 60;
    let resultString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');

    timeResult.textContent = resultString; // Atualiza o elemento timeResult com o resultado
});
