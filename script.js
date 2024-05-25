let space = document.querySelector('.space');
let del = document.querySelector('.all');
let key = document.querySelectorAll('.key');
let backsp = document.querySelector('.Backspace');
let text = document.querySelector('.textBox'); // Define the text element
let enter = document.querySelector('.enter');
let caps = document.querySelector('.capsLk');
let type = document.querySelectorAll('#out');


function sound1(){
  // A sound fucntion for every click key 
  const mech = new Audio("./mechanical click.mp3");
  mech.currentTime = 0;
  mech.play(); 
}

const  sound2 = ()=>{
  // A sound fucntion for every click key 
  const mech = new Audio("./click.mp3");
  mech.currentTime = 0;
  mech.play();
}

del.addEventListener('click',()=>{
    text.innerHTML = ' ';
    sound1();
})

enter.addEventListener('click', () => {
  text.innerText += "\n";
  sound1();
});

space.addEventListener('click', () => {
  let content = text.innerText;
  let newContent = content + '\u00A0'; //This  '\u00A0' special key is used to add blankspace
  text.textContent = newContent;
  sound1();
});


backsp.addEventListener('click', () => {
  text.textContent = text.textContent.slice(0, -1);
  sound2();
});

 caps.addEventListener('click', ()=>{
    for(el of key){
        if (el.classList.length==1){
            el.classList.add('UpperCase');
            // caps.classList.add('UpperCase');
        }
        else {
            el.classList.remove('UpperCase');
            // caps.classList.remove('UpperCase');
        }
    }
    sound2();
 })

for (let i = 0; i < type.length; i++) {
  let el = type[i];
  el.addEventListener('click',()=>{
    const Output = el.innerText;
    text.innerText += Output;
    sound2();
})
}

