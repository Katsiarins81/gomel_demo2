const namecarousel= {
  0: ' / ЗДАНИЯ',
  1: ' / ПАМЯТНЫЕ МЕСТА',
  2: ' / ПАМЯТНИКИ',
  3: ' / УЛИЦЫ'
};
const namecarousel2 = {
  0: ' / ЗДАНИЯ',
  1: ' / ПАМЯТНЫЕ МЕСТА',
  2: ' / ПАМЯТНИКИ',
  3: ' / УЛИЦЫ'
};
function startPagePosition(position) {
    if(window.innerWidth>767){
		document.querySelector("#namecarousel").textContent = namecarousel[position];
        document.querySelectorAll(".carousel_article").forEach(el=>el.style.translate=`${-100*position}% 0`);
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories")[position].classList.add("active");
        checkPosition(position);
    }
    else {
		document.querySelector("#namecarousel").textContent = namecarousel[position];
        document.querySelectorAll(".carousel_article").forEach(el=>el.style.translate=`0 ${-100*position}%`);
        document.querySelectorAll(".carousel_categories").forEach(el => {
			el.classList.remove("active");
		});
        document.querySelectorAll(".carousel_categories")[position].classList.add("active");
        checkPosition(position);
    }
}
function startPagePosition2(position2) {
    if(window.innerWidth>767){
		document.querySelector("#namecarousel2").textContent = namecarousel2[position2];
        document.querySelectorAll(".carousel_article2").forEach(el=>el.style.translate=`${-100*position2}% 0`);
        document.querySelectorAll(".carousel_categories2").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories2")[position2].classList.add("active");
        checkPosition2(position2);
    }
    else {
		document.querySelector("#namecarousel2").textContent = namecarousel2[position2];
        document.querySelectorAll(".carousel_article2").forEach(el=>el.style.translate=`0 ${-100*position2}%`);
        document.querySelectorAll(".carousel_categories2").forEach(el => {
			el.classList.remove("active");
		});
        document.querySelectorAll(".carousel_categories2")[position2].classList.add("active");
        checkPosition2(position2);
    }
}
// функция ограничения видимости стрелочек первого слайдера
function checkPosition(position) {
    if(window.innerWidth>767){
        switch(position) {
            case 0: document.querySelector("#but_arrow_left").style.display="none";
            document.querySelector("#but_arrow_right").style.display="block";
            break;
            case 3: document.querySelector("#but_arrow_right").style.display="none";
            document.querySelector("#but_arrow_left").style.display="block";
            break;
            default: document.querySelectorAll(".but_arrows_carousel").forEach(el=>el.style.display="block");
            break;
    }
    }
    else {
        switch(position) {
            case 3: document.querySelector("#but_arrow_up").style.display="none";
            document.querySelector("#but_arrow_down").style.display="block";
            break;
            case 0: document.querySelector("#but_arrow_down").style.display="none";
            document.querySelector("#but_arrow_up").style.display="block";
            break;
            default: document.querySelectorAll(".but_arrows_carousel").forEach(el=>el.style.display="block");
            break;
        }
    }
}
// функция ограничения видимости стрелочек второго слайдера
function checkPosition2(position2) {
   
        switch(position2) {
            case 0: 
			document.querySelector("#but_arrow_left2").style.display="none";
            document.querySelector("#but_arrow_right2").style.display="block";
            break;
            case 3:
			document.querySelector("#but_arrow_right2").style.display="none";
            document.querySelector("#but_arrow_left2").style.display="block";
            break;
            default: document.querySelectorAll(".but_arrows_carousel").forEach(el=>el.style.display="block");
            break;
    }
   
}

let position = 0;
let position2 = 0;
//= localStorage.getItem('currentPosition');
position = (!position) ? 0 : +position;
startPagePosition(position);
position2 = (!position2) ? 0 : +position2;
startPagePosition2(position2);

if(window.innerWidth>767) {
document.querySelectorAll(".carousel_categories").forEach(Element => Element.onclick = () => {
	document.querySelector("#namecarousel").textContent = namecarousel[position];
	console.log("1");
})
// первый слайдер 
    document.querySelector("#but_arrow_right").onclick=()=>{
		if (position<3)	{
        position++;
		console.log("position=",position);
		document.querySelector("#namecarousel").textContent = namecarousel[position];
        localStorage.setItem('currentPosition', position);
        document.querySelectorAll(".carousel_article").forEach(el=>el.style.translate=`${-100*position}% 0`);
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories")[position].classList.add("active");
        checkPosition(position);
		checkPosition2(position2);
		}
    }
    document.querySelector("#but_arrow_left").onclick=()=>{
		 if (position>0)	{
        position--;
		console.log("position=",position);	
	
		document.querySelector("#namecarousel").textContent = namecarousel[position];
        localStorage.setItem('currentPosition', position);
        document.querySelectorAll(".carousel_article").forEach(el=>el.style.translate=`${-100*position}% 0`);
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories")[position].classList.add("active");
        checkPosition(position);
		checkPosition2(position2);
}
    }
	document.querySelectorAll(".carousel_categories").forEach(el=>el.onclick=()=>{
		
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        el.classList.add("active");
        position=+el.getAttribute("data-category");
        localStorage.setItem('currentPosition', position);
        document.querySelectorAll(".carousel_article").forEach(el=>el.style.translate=`${-100*position}% 0`);
        checkPosition(position);
		checkPosition2(position2);
		document.querySelector("#namecarousel").textContent = namecarousel[position];
		
    });
// второй слайдер
	document.querySelector("#but_arrow_right2").onclick=()=>{
		if (position2<3)	{
        position2++;
		console.log("position2=",position2);
		document.querySelector("#namecarousel2").textContent = namecarousel2[position2];
        localStorage.setItem('currentPosition', position2);
        document.querySelectorAll(".carousel_article2").forEach(el=>el.style.translate=`${-100*position2}% 0`);
        document.querySelectorAll(".carousel_categories2").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories2")[position2].classList.add("active");
        checkPosition2(position2);
		checkPosition(position);
		}
    }
    document.querySelector("#but_arrow_left2").onclick=()=>{
		 if (position2>0)	{
        position2--;
		console.log("position2=",position2);
	
		document.querySelector("#namecarousel2").textContent = namecarousel2[position2];
        localStorage.setItem('currentPosition', position2);
        document.querySelectorAll(".carousel_article2").forEach(el=>el.style.translate=`${-100*position2}% 0`);
        document.querySelectorAll(".carousel_categories2").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories2")[position2].classList.add("active");
        checkPosition2(position2);
		checkPosition(position);
		 }
    }

	document.querySelectorAll(".carousel_categories2").forEach(el=>el.onclick=()=>{
		
        document.querySelectorAll(".carousel_categories2").forEach(el => el.classList.remove("active"));
        el.classList.add("active");
        position2=+el.getAttribute("data-category");
		 localStorage.setItem('currentPosition', position2);
        document.querySelectorAll(".carousel_article2").forEach(el=>el.style.translate=`${-100*position2}% 0`);
        checkPosition2(position2);
		checkPosition(position);
		document.querySelector("#namecarousel2").textContent = namecarousel2[position2];
    });
}

else {
    document.querySelector("#but_arrow_up").onclick=()=>{
        position++;
		console.log("2");
        localStorage.setItem('currentPosition', position);
        document.querySelectorAll(".carousel_article").forEach(el=>el.style.translate=`0 ${-100*position}%`);
        document.querySelectorAll(".carousel_article_sm").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_article_sm")[position].classList.add("active");
		document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories")[position].classList.add("active");
		document.querySelector("#namecarousel").textContent = namecarousel[position];
        checkPosition(position);
    }
    document.querySelector("#but_arrow_down").onclick=()=>{
        position--;
		console.log("3");
        localStorage.setItem('currentPosition', position);
        document.querySelectorAll(".carousel_article").forEach(el=>el.style.translate=`0 ${-100*position}%`);
        document.querySelectorAll(".carousel_article_sm").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_article_sm")[position].classList.add("active");
		document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories")[position].classList.add("active");
		document.querySelector("#namecarousel").textContent = namecarousel[position];
        checkPosition(position);
    }
    document.querySelectorAll(".carousel_categories").forEach(el=>el.onclick=()=>{
		
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        el.classList.add("active");
        position=+el.getAttribute("data-category");
		console.log(position);
		document.querySelector("#namecarousel").textContent = namecarousel[position];
		document.querySelectorAll(".carousel_article_sm").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_article_sm")[position].classList.add("active");
        localStorage.setItem('currentPosition', position);
        document.querySelectorAll(".carousel_article").forEach(el=>el.style.translate=`0 ${-100*position}%`);
        checkPosition(position);
    });
	document.querySelector("#but_arrow_right2").onclick=()=>{
		if (position2<3)	{
        position2++;
		console.log("position2=",position2);
		document.querySelector("#namecarousel2").textContent = namecarousel2[position2];
        localStorage.setItem('currentPosition', position2);
        document.querySelectorAll(".carousel_article2").forEach(el=>el.style.translate=`${-100*position2}% 0`);
        document.querySelectorAll(".carousel_categories2").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories2")[position2].classList.add("active");
        checkPosition2(position2);
		checkPosition(position);
		}
    }
    document.querySelector("#but_arrow_left2").onclick=()=>{
		 if (position2>0)	{
        position2--;
		console.log("position2=",position2);
	
		document.querySelector("#namecarousel2").textContent = namecarousel2[position2];
        localStorage.setItem('currentPosition', position2);
        document.querySelectorAll(".carousel_article2").forEach(el=>el.style.translate=`${-100*position2}% 0`);
        document.querySelectorAll(".carousel_categories2").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories2")[position2].classList.add("active");
        checkPosition2(position2);
		checkPosition(position);
		 }
    }
	document.querySelectorAll(".carousel_categories2").forEach(el=>el.onclick=()=>{
		
        document.querySelectorAll(".carousel_categories2").forEach(el => el.classList.remove("active"));
        el.classList.add("active");
        position2=+el.getAttribute("data-category");
		 localStorage.setItem('currentPosition', position2);
        document.querySelectorAll(".carousel_article2").forEach(el=>el.style.translate=`${-100*position2}% 0`);
        checkPosition2(position2);
		checkPosition(position);
		document.querySelector("#namecarousel2").textContent = namecarousel2[position2];
    });
}



