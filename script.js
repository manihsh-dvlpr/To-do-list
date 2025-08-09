document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('todo-list');

    function addTask() {
        const task = input.value.trim();
        if (task === '') return;
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'delete-btn';
        delBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            list.removeChild(li);
        });
        li.appendChild(delBtn);
        list.appendChild(li);
        input.value = '';
        input.focus();
    }

    addBtn.addEventListener('click', addTask);
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') addTask();
    });
});
