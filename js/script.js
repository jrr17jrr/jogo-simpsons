const bart = document.querySelector('.bart');
const bob = document.querySelector('.bob');


const jump =() => {
 bart.classList.add('jump');

setTimeout(() => {

    bart.classList.remove('jump')
},  500); 
}

 const loop = setInterval(() =>{
    
    const bobPosition = bob.offsetLeft;
    const bartPosition = +window.getComputedStyle(bart).bottom.replace('px', '');
    
    console.log('loop');

 

    if (bobPosition <= 120&& bobPosition > 0 && bartPosition < 100 ) {

        bob.style.animation = 'none'
        bob.style.left = `${bobPosition}px`; 
        
        bart.style.animation = 'none'
        bart.style.bottom = `${bartPosition}px`; 

        bart.src = './img2/bartpare.png'
        bart.style.width = '140px'
        bart.style.marginLeft = '10px'
        bart.style.bottom ='0'
        clearInterval(loop)
    }

   

}, 10);

document.addEventListener('keydown',jump);