const input = document.getElementById("task-input");
const button = document.getElementById("task-button");
const gorevler = document.getElementById("tasks");

function gorevEkle() {
    const baslik = input.value
    // console.log(baslik)
    
    if(baslik == ""){
        alert('Boş görev girilemez.')
        return;
    }

    gorevler.innerHTML += ` 
        <div id="gorev">
            <input type="checkbox" id="checkbox" onclick="toggleGorev(this)" />
            <p id="title">${baslik}</p>
            <button id="delete-button" onclick="this.parentElement.remove()">X</button>
        </div>
        `;

        input.value = '';
}
function toggleGorev(checkbox) {
    const görevBasligi = checkbox.nextElementSibling;
    if (checkbox.checked) {
        görevBasligi.style.textDecoration = 'line-through';
        görevBasligi.style.color = 'gray';
    } else {
        görevBasligi.style.textDecoration = 'none';
        görevBasligi.style.color = 'black';
    }
}

button.addEventListener('click',gorevEkle)