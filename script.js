let nav = document.getElementById('navbar');
let bar = document.getElementById('bar') ;
let close = document.getElementById('close')


if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active')
    }  

    )
    
} 
/* if (close){
        close.addEventListener('click',() => {
            nav.classList.remove('active')
        })
    }
 */

close.onclick = function(){
    nav.classList.remove('active')
}



