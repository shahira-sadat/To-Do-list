import './style.css';
import Tasks from './tasks.js';

const tasks = new Tasks();

tasks.populateList();


const newInput = document.querySelector('#new-task');
newInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && newInput.value) {
    tasks.add(newInput.value);
    newInput.value = '';
  }
});


const refreshBtn = document.querySelector('#refresh-list');
refreshBtn.addEventListener('click', () => {
  document.location.reload();
});