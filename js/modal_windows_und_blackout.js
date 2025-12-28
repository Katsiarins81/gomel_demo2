
document.querySelectorAll(".clickable").forEach(Element => Element.onclick = () => {
    document.querySelector("#blackout").classList.toggle("active");
    document.querySelector("#cross_blackout").classList.toggle("active");
    document.querySelector("#H5_content").innerHTML = Element.getAttribute("data-place");
    document.querySelector(`#${Element.getAttribute("data-place").split(" ").join("")}`).classList.add("active"); 
    // document.querySelector("#NEW_photography").setAttribute(`src`, `../media/img/NEW/${Element.getAttribute("data-place")}_new.jpg`);
    // document.querySelector("#OLD_photography").setAttribute(`src`, `../media/img/OLD/${Element.getAttribute("data-place")}_old.jpg`);
    document.querySelector("#NEW_photography_video source").setAttribute(`src`, `media/img/NEW/${Element.getAttribute("data-place")}_new.mp4`);
	document.querySelector("#OLD_photography_video source").setAttribute(`src`, `media/img/OLD/${Element.getAttribute("data-place")}_old.mp4`);
    document.querySelector("#body").style.overflow = "hidden";
    
    //

	
	function removeNew(){
   const place = Element.getAttribute('data-place'); 
   console.log(place+'1');
   let div=document.querySelector("#NEW_photography");
  // Установка фона
  div.style.backgroundImage = 'url("media/img/NEW/'+place+'_new.jpg")';
  div.style.backgroundSize = 'cover'; // чтобы фото покрывало
  div.style.backgroundPosition = 'center top'; // центрировать
}
    removeNew();
    //
     function removeOld(){
   const place = Element.getAttribute('data-place'); 
console.log(place+'1');
let div=document.querySelector("#OLD_photography");
  // Установка фона
  div.style.backgroundImage = 'url("media/img/OLD/'+place+'_old.jpg")';
  div.style.backgroundSize = 'cover'; // чтобы фото покрывало
  div.style.backgroundPosition = 'center top'; // центрировать
}
    removeOld();
});

const videoOLD = document.getElementById('OLD_photography_video');
const imgOLD = document.getElementById('OLD_photography');
// Установка источника и подготовка видео
imgOLD.addEventListener('click', () => {
  imgOLD.style.display='none';
  // Обновите источник, если нужно
  const sourceOLD = videoOLD.querySelector('source');
  videoOLD.load();
  

  // Воспроизведение только после клика
  videoOLD.play().catch(error => {
    console.error('Ошибка при запуске видео:', error);
  });
});
// После окончания видео — показываем кнопку снова
videoOLD.addEventListener('ended', () => {
  imgOLD.style.display = 'block'; // или 'block', в зависимости от вашего дизайна
});
//**new
const videoNEW = document.getElementById('NEW_photography_video');
const imgNEW = document.getElementById('NEW_photography');
// Установка источника и подготовка видео
imgNEW.addEventListener('click', () => {
  imgNEW.style.display='none';
  // Обновите источник, если нужно
  const sourceNEW = videoNEW.querySelector('source');
  videoNEW.load();
  

  // Воспроизведение только после клика
  videoNEW.play().catch(error => {
    console.error('Ошибка при запуске видео:', error);
  });
});
// После окончания видео — показываем кнопку снова
videoNEW.addEventListener('ended', () => {
  imgNEW.style.display = 'block'; // или 'block', в зависимости от вашего дизайна
});
//**
document.querySelector("#cross_blackout").onclick = () => {
    document.querySelector("#blackout").classList.toggle("active");
    document.querySelector("#cross_blackout").classList.toggle("active");
    document.querySelectorAll(".text_content").forEach(el => el.classList.remove("active"));
    document.querySelector("#body").style.overflow = "visible";
}

document.querySelectorAll(".clickable2").forEach(Element => Element.onclick = () => {
    document.querySelector("#blackout2").classList.toggle("active");
    document.querySelector("#cross_blackout2").classList.toggle("active");
    document.querySelector("#H5_content").innerHTML = Element.getAttribute("data-place");
    document.querySelector(`#${Element.getAttribute("data-place").split(" ").join("")}`).classList.add("active"); 
   
   // document.querySelector("#OLD_photography2").setAttribute(`src`, `media/img/OLD/${Element.getAttribute("data-place")}_old.jpg`);
    document.querySelector("#body").style.overflow = "hidden";
});
//

const newPhotoDiv = document.getElementById('NEW_photo');
const oldPhotoDiv = document.getElementById('OLD_photo');
const photoSwitch = document.getElementById('photo_switch');
document.addEventListener('DOMContentLoaded', () => {
    oldPhotoDiv.style.zIndex = '1000';
  });
photoSwitch.onclick = () => {
 
	 if (window.getComputedStyle(newPhotoDiv).zIndex === '1000') {
    newPhotoDiv.style.zIndex = '0';
    oldPhotoDiv.style.zIndex = '1000';
    photoSwitch.classList.remove('photo_switch_down');
    photoSwitch.classList.add('photo_switch_upp');
    


  } else {
    newPhotoDiv.style.zIndex = '1000';
    oldPhotoDiv.style.zIndex = '0';
    photoSwitch.classList.remove('photo_switch_upp');
    photoSwitch.classList.add('photo_switch_down');
  }
}


// Когда мышь выходит в область элемента
newPhotoDiv.addEventListener('mouseenter', () => {
  if (newPhotoDiv.style.zIndex == '1000'){
    newPhotoDiv.classList.add('hovered'); }// добавляем класс
  });
oldPhotoDiv.addEventListener('mouseenter', () => {
    if (oldPhotoDiv.style.zIndex == '1000'){
      oldPhotoDiv.classList.add('hovered');} //
  });

  // Когда мышь выходит из области элемента
  newPhotoDiv.addEventListener('mouseleave', () => {
    newPhotoDiv.classList.remove('hovered'); // удаляем класс
  });
  oldPhotoDiv.addEventListener('mouseleave', () => {  
    oldPhotoDiv.classList.remove('hovered');} //
  );

// вставка фото  в панель
document.querySelectorAll('.image-wrapper').forEach(div => {
  const place = div.getAttribute('data-place'); // например, 'Проспект Ленина'
console.log(place);
  // Установка фона
  div.style.backgroundImage = 'url("media/img/OLD/'+place+'_old.jpg")';
  div.style.backgroundSize = 'cover'; // чтобы фото покрывало
  div.style.backgroundPosition = 'center top'; // центрировать

});

//для смены картинки старая новая на панели
  	let checkOld = document.getElementById('check_old');
let checkNew = document.getElementById('check_new');
console.log(checkOld);

checkOld.onclick = () => {
  checkOld.classList.toggle('active');
  checkNew.classList.toggle('active');
  document.querySelectorAll('.image-wrapper').forEach(div => {
  const place = div.getAttribute('data-place'); // например, 'Проспект Ленина'
console.log(place);
  // Установка фона
  div.style.backgroundImage = 'url("media/img/OLD/'+place+'_old.jpg")';
  div.style.backgroundSize = 'cover'; // чтобы фото покрывало
  div.style.backgroundPosition = 'center top'; // центрировать

});
};

checkNew.onclick = () => {
  checkNew.classList.toggle('active');
  checkOld.classList.toggle('active');
 document.querySelectorAll('.image-wrapper').forEach(div => {
  const place = div.getAttribute('data-place'); // например, 'Проспект Ленина'
console.log(place);
  // Установка фона
  div.style.backgroundImage = 'url("media/img/NEW/'+place+'_new.jpg")';
  div.style.backgroundSize = 'cover'; // чтобы фото покрывало
  div.style.backgroundPosition = 'center top'; // центрировать

});
};


//
