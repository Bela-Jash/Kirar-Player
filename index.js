const scales = document.querySelectorAll('.scale_btn');
const notes = document.querySelectorAll('.note');

let folder;

initialize();

function initialize(){
 folder = "Tizita";
 const activeButton = document.querySelector( '.Tizita');
 activeButton.classList.add('pressed');

}


scales.forEach((button) => {
  button.addEventListener('click', function () {

    const buttonInnerHTML = this.innerHTML

    changeScale(buttonInnerHTML);
    changeBtnStyle(buttonInnerHTML);

  });
})

notes.forEach((button) => {
  button.addEventListener('click', function () {

    const buttonInnerHTML = this.innerHTML

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
})

notes.forEach((button) => {
  button.addEventListener('keydown', (event) => {

    makeSound(event.key);
    
    buttonAnimation(event.key);
})
});

function changeScale(key){
  switch (key) {
    case "Tizita":
      folder = "Tizita";
      break;
    case "Bati":
      folder = "Bati";
      break;
    case "Ambassel":
      folder = "Ambassel";
      break;
    case "Anchihoy":
      folder = "Anchihoy";
      break;
  
    default:
      break;
  }
}

function makeSound(key){
  switch (key) {     
    case 'a':
      new Audio(`kirar_sounds/${folder}/a.mp3`).play();
      break;
      
    case's':
      new Audio(`kirar_sounds/${folder}/s.mp3`).play();
      break;
      
    case 'd':
      new Audio(`kirar_sounds/${folder}/d.mp3`).play();
      break;
      
    case 'f':
      new Audio(`kirar_sounds/${folder}/f.mp3`).play();
      break;
      
    case 'j':
      new Audio(`kirar_sounds/${folder}/j.mp3`).play();
      break;

    case 'k':
      new Audio(`kirar_sounds/${folder}/k.mp3`).play();
      break;
  
    default:
      break;
  }
}

function changeBtnStyle(currentKey) {

  const activeButton = document.querySelector( '.' + currentKey);
  const allButtons = document.querySelectorAll(".scale_btn");

  allButtons.forEach((button) => {
    button.classList.remove('pressed');
  })

  activeButton.classList.add('pressed');


}

function buttonAnimation(currentKey) {

  const activeButton = document.querySelector( '.' + currentKey);

  activeButton.classList.add('pressed');

  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 100);

}