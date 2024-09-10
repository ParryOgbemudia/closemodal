'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

const btnOpenModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const btnCloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', btnOpenModel);
}

closeModal.addEventListener('click', btnCloseModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    btnCloseModal();
  }
});
