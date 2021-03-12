const loginPopupOpenButton = document.querySelector('.navigation__list-item_login');
const loginPopupCloseButton = document.querySelector('.form__close');
const loginPopup = document.querySelector('.popup');


function openLoginPopup() {
  loginPopup.classList.add('popup_opened');
}

function closeLoginPopup() {
  loginPopup.classList.remove('popup_opened');
}

loginPopupOpenButton.addEventListener('click', () => {
  openLoginPopup();
});

loginPopupCloseButton.addEventListener('click', () => {
  closeLoginPopup();
});

loginPopup.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    closeLoginPopup();
  }
});