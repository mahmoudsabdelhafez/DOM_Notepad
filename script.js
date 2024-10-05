let text = document.querySelector('.text');
let bold = document.querySelector('.bold');
let italic = document.querySelector('.italic');
let left = document.querySelector('.left');
let center = document.querySelector('.center');
let right = document.querySelector('.right');
let upper = document.querySelector('.upper');
let lower = document.querySelector('.lower');
let capitalize = document.querySelector('.capitalize');
let clear = document.querySelector('.clear');
let fontColorInput = document.getElementById('fontColor');
let backcolor = document.querySelector('.backcolor');
let fontsize = document.getElementById('fontsize');
let fontfamily = document.querySelector('.fontfamily')
let print = document.querySelector('.print')

bold.addEventListener('click', function(){
    text.style.fontWeight = "bold";
})

italic.addEventListener('click', function(){
    text.style.fontStyle = 'italic';
})

left.addEventListener('click', function(){
    text.style.textAlign = 'left';
})
center.addEventListener('click', function(){
    text.style.textAlign = 'center';
})
right.addEventListener('click', function(){
    text.style.textAlign = 'right';
})
lower.addEventListener('click', function(){
    text.style.textTransform = 'lowercase';
})
upper.addEventListener('click', function(){
    text.style.textTransform = 'uppercase';
})
capitalize.addEventListener('click', function(){
    text.style.textTransform = 'capitalize';

})
clear.addEventListener('click', function(){
    text.innerHTML = '';

})
fontColorInput.addEventListener('input', function() {
    text.style.color = this.value;
});
backcolor.addEventListener('click', function(){
    text.style.backgroundColor = this.value;

})
fontsize.addEventListener('click', function(){
    text.style.fontSize = fontsize.value + 'px';

})
fontfamily.addEventListener('click', function(){
    text.style.fontFamily = this.value;

})
print.addEventListener('click', function(){
    alert('Printed');

})




