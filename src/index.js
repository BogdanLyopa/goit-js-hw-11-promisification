import './styles.css';
// import './js/promise-1';
// import './js/promise-2';
// import './js/promise-3';
import taskOne from './js/promise-1';
import taskTwo from './js/promise-2';
import taskThree from './js/promise-3';
const refs = {
  btnOne: document.querySelector('#task-1'),
  btnTwo: document.querySelector('#task-2'),
  btnThree: document.querySelector('#task-3'),
};
refs.btnOne.addEventListener('click', taskOne);
refs.btnTwo.addEventListener('click', taskTwo);
refs.btnThree.addEventListener('click', taskThree);
