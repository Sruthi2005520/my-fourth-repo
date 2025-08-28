// Select DOM elements
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add a new task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    const li = document.createElement('li');
    li.classList.add('task');

    // Create task text
    const taskTextNode = document.createElement('span');
    taskTextNode.textContent = taskText;

    // Create the complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.addEventListener('click', () => {
      taskTextNode.classList.toggle('completed');
    });

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    // Append to li
    li.appendChild(taskTextNode);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    
    // Append li to taskList
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = '';
  }
});
