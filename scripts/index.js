// TODO:необходимо доверстать popup в html!


//Объявляем пер-ую = присваиваем класс .popup из html
const popup = document.querySelector('.popup');
//Объявляем пер-ую = присваиваем id open_popup_btn из html
const openPopupBtn = document.querySelector('#open_popup_btn');
//Объявляем пер-ую = присваиваем класс .popup__close-button из html
const closePopupBtn = document.querySelector('.popup__close-button');
//Объявляем пер-ую = присваиваем класс .popup__overlay из html
const popupOverlay = document.querySelector('.popup__overlay');
//Объявляем пер-ую = присваиваем класс .popup__content из html
const popupContent = document.querySelector('.popup__content');
//Объявляем пер-ую = присваиваем класс .popup__title из html
const  popupTitle = document.querySelector('.popup__title');
//Объявляем пер-ую = присваиваем класс .popup__text из html
const popupText = document.querySelector('.popup__text');

//Объявляем функцию openPopup
function openPopup(title,text) {
  //Возьмём текст из пер-ой popupTitle и передадим в аргумент ф-ии title
  //При openPopup покажем данные из класса popup__title
  popupTitle.textContent = title;
  //Возьмём текст из пер-ой popupTitle и передадим в аргумент ф-ии text
  //При openPopup покажем данные из класса popup__text
  popupText.textContent = text;
  //Добавляем класс popup_visible к пер-ой popup
  popup.classList.add('popup_visible');
}

  //Объявляем функцию closePopup
function closePopup() {
  //Убираем класс popup_visible у пер-ой popup
  popup.classList.remove('popup_visible');
}

//Добавляем слушателя к пер-ой openPopupBtn - при 'click' - вызываем ф-ию
openPopupBtn.addEventListener('click', function () {
  //Вызываем ф-ию
  openPopup();
});
//Добавляем слушателя к пер-ой closePopupBtn - при 'click' - вызываем ф-ию
closePopupBtn.addEventListener('click', function () {
  //Вызываем ф-ию
  closePopup();
});
//Добавляем слушателя к пер-ой popupOverlay - при 'click' - вызываем ф-ию
popupOverlay.addEventListener('click', function (event) {
  console.log('Event', event);
  //Вызываем ф-ию
  closePopup();
});
//Добавляем слушателя к пер-ой popupContent - при 'click' - останавливаем всплытие события
popupContent.addEventListener('click', function (event) {
  event.stopImmediatePropagation();
});

//Объявляем пер-ую targetImages с классом .place__img
const targetImages = document.querySelectorAll('.place__img');

//При клике на img добираемся до родителя и выводим в консоль
//соседние классы.
//Объявляем ф-ию, которая принимает один аргумент (event)
function handleImageClick(event){
  //Передаём пер-ой parent = значение родителя кликнутого элемента//Через parent добираемся до родителя кликнутого элемента
  const parent = event.target.parentElement;
  //Пер-ой title передаём значение класса родителя parent
  const title = parent.querySelector('.place__title');
  //Пер-ой text передаём значение класса родителя parent
  const text = parent.querySelector('.place__text');
  openPopup(title.textContent, text.textContent);
}
//Создаём цикл - перебираем каждый элемент
//(Начинается с нуля;продолжается до последней картинки;прибавляем +1)
for (let i = 0; i < targetImages.length; i++) {
  //Пер-ой currentImage назначаем картинку из массива
  const currentImage = targetImages[i];
  //Добавляем пер-ой currentImage слушателя, при клике вызываем ф-ию handleImageClick
  currentImage.addEventListener('click', handleImageClick);
}




