
const links = document.querySelectorAll('.scp-nav a');
const sections = document.querySelectorAll('.scp-content');


sections.forEach(section => {
    if (section.id !== 'about') {
        section.style.display = 'none';
    }
});


links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 
        sections.forEach(section => {
            section.style.display = 'none';
        });

       
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    });
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [" hacked", " by", " chaos insurgency", ];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



function adjustTextSize() {
  const textElements = document.querySelectorAll(".auto-resize-text");
  const screenWidth = window.innerWidth;
  let fontSize = 0;

  if (screenWidth <= 100) { // Очень узкие экраны (маленькие мобильные)
    fontSize = screenWidth / 100;
  } else if (screenWidth <= 500) { // Мобильные экраны
    fontSize = screenWidth / 30;

  } else if (screenWidth <= 768) { // Планшеты и ноутбуки
    fontSize = screenWidth / 50;
  } else if (screenWidth <= 1440) { // Средние экраны (HD и FHD)
    fontSize = screenWidth / 90;
  } else { // Большие экраны (4K и т.д.)
    fontSize = 24; // Настройте по вашему усмотрению
  }

  textElements.forEach(element => {
    element.style.fontSize = fontSize + "px";
  });
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.onload = adjustTextSize;
window.onresize = adjustTextSize;
