const input = document.getElementById('favchap');
const list = document.getElementById('list');
const button = document.querySelector('button');
console.log(input.value);
button.addEventListener('click', () => {
    if(input.value){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', ()=>{
            list.removeChild(li);
            input.focus();
        })
        input.focus();
        input.value = '';
    } else {
        alert('Agregra una escritura primero')
        return input.focus();
    }
})