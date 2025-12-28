 if (window.innerWidth <1200){
	 console.log(window.innerWidth);
	 window.addEventListener('load', () => {
  mask.style.display = 'none';
  // при необходимости сбросить активность кнопок
  
});

function showContentFromHash() {
  const hash = window.location.hash; // например, #formap1
  const match = hash.match(/^#formap(\d+)$/);
  const headerH3 = document.querySelector('.wrapp header h3');
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const videos1 = document.getElementById('video1');
  const videos2 = document.getElementById('video2');
  const videoPlayer1 = document.getElementById('videoPlayer1');
  const videoPlayer2 = document.getElementById('videoPlayer2');
  const videoContainer = document.getElementById('videoContainer');
  const imageWrapper1 = document.getElementById('image-wrapper1');
  const imageWrapper2 = document.getElementById('image-wrapper2');
 
  if (match) {
    const num = match[1];
    if (nameStreet[num]) {
      headerH3.textContent = nameStreet[num]; // обновляем содержимое заголовка
      image1.src = '../media/img/OLD/' + nameStreet[num] + '_old.jpg';
      image2.src = '../media/img/NEW/' + nameStreet[num] + '_new.jpg';
	  videos1.src = '../media/img/OLD/' + nameStreet[num] + '_old.mp4';
      videos2.src = '../media/img/NEW/' + nameStreet[num] + '_new.mp4';
      const urlMap = document.getElementById('urlMap');
       urlMap.setAttribute('href', urlStreet[num]);
	   // Пути к видеофайлам для каждой картинки (замените на ваши реальные пути)

    } else {
      headerH3.textContent = 'Контент не найден'; // при отсутствии данных
    }
  } else {
    headerH3.textContent = ''; // очищаем, если хэш не совпадает
  }
}

// Обновляем при загрузке страницы
window.addEventListener('load', showContentFromHash);
window.addEventListener('hashchange', showContentFromHash);

const container = document.getElementById('container');
const btnImage1 = document.getElementById('showImage1');
const btnImage2 = document.getElementById('showImage2');

// Переменная для хранения текущего выбранного изображения 
let currentImageNumber = 1;

// Функции переключения изображений
function showImage(imageNumber) {
  currentImageNumber = imageNumber; // сохраняем текущий выбор
  let activeImageSrc = imageNumber === 1 ? document.getElementById('image2').src : document.getElementById('image1').src;

  if (imageNumber === 1) {
    image1.classList.add('active');
	image2.classList.remove('active');
    btnImage1.classList.add('active');
    btnImage2.classList.remove('active');
	imageWrapper1.classList.add('active');
	imageWrapper2.classList.remove('active');
	
  } else {
  
    btnImage1.classList.remove('active');
    btnImage2.classList.add('active');
	image1.classList.remove('active');
	image2.classList.add('active');
	imageWrapper2.classList.add('active');
	imageWrapper1.classList.remove('active');
	
  }
 }
  
  // Обработчики кликов по кнопкам
btnImage1.addEventListener('click', () => {showImage(1);console.log(imageNumber);video2.classList.remove('active');});
btnImage2.addEventListener('click', () => {showImage(2);console.log(imageNumber);video1.classList.remove('active');});





// Функция для воспроизведения видео
function playVideo1() {
  
  console.log(videoContainer);
    videoContainer.style.display = 'block'; // делаем видимым контейнер видео
	  if (videoPlayer11){
    videoPlayer1.play();
  }
}
function playVideo2() {
  
  console.log(videoContainer);
    videoContainer.style.display = 'block'; // делаем видимым контейнер видео
    if (videoPlayer2){
	videoPlayer2.play();
  }
}

// Обработка кликов по изображениям
document.getElementById('image1').addEventListener('click', () => {
  console.log('v1');
  image1.classList.remove('active');
  video1.classList.add('active');
  playVideo1();
});





// Объявление переменных для видео
const videoElem1 = document.getElementById('video1');
const videoElem2 = document.getElementById('video2');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

function playVideo1() {
  // Показываем видео
  videoElem1.style.display = 'block';
  image1.classList.remove('active');
  // Запускаем воспроизведение
  videoElem1.play();
  // Обработчик окончания
  videoElem1.onended = () => {
    videoElem1.style.display = 'none'; // скрываем видео
    image1.classList.add('active');   // показываем изображение
  };
}

function playVideo2() {
  videoElem2.style.display = 'block';
  image2.classList.remove('active');
  videoElem2.play();
  videoElem2.onended = () => {
    videoElem2.style.display = 'none';
    image2.classList.add('active');
  };
}
document.getElementById('image2').addEventListener('click', () => {
  console.log('v2');
image2.classList.remove('active');
video2.classList.add('active');
  playVideo2();
});

 }
