// let inputs = document.querySelectorAll('.control input');
      
//       function handleupdate(){
//            let suffix = this.dataset.sizing||' ';
//            document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
//       }
//       inputs.forEach(input =>input.addEventListener('change',handleupdate));
//       inputs.forEach(input =>input.addEventListener('mousemove',handleupdate));

const start =()=>{
    const init = document.querySelector('.control');
    const initTwo = document.querySelector('.img');
    const letsStart = document.querySelector('.lets-start');
    letsStart.addEventListener('click',()=>{
       letsStart.classList.add('fadeout');
       init.classList.remove('fadeout');
       initTwo.classList.remove('fadeout');
    })

const inputs = document.querySelectorAll('.control input');

function handleupdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
inputs.forEach(input =>input.addEventListener('change',handleupdate));
inputs.forEach(input=>input.addEventListener('mousemove',handleupdate));
}
start();