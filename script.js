'use strict';
const modal = document.querySelector('.modal');
const overlayhidden = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnshowmodal = document.querySelectorAll('.show-modal');

const remove = function () {
  modal.classList.remove('hidden');
  overlayhidden.classList.remove('hidden');
};

const add = function () {
  modal.classList.add('hidden');
  overlayhidden.classList.add('hidden');
};

for (let i = 0; i < btnshowmodal.length; i++) {
  btnshowmodal[i].addEventListener('click', remove);
}

btnclosemodal.addEventListener('click', add);

overlayhidden.addEventListener('click', add);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    add();
  }
});
