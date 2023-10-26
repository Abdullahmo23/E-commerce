let nav = document.getElementById('navbar');
let bar = document.getElementById('bar') ;
let close = document.getElementById('close')
let product = document.getElementsByClassName("small-img")
let showMain = document.getElementById("minImg")
/* let pro = document.querySelectorAll(".pro") */

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

let s 
product[0].onclick= function(){
    showMain.src = product[0].src
}

product[1].onclick= function(){
    showMain.src = product[1].src
}
product[2].onclick= function(){
    showMain.src = product[2].src
}
product[3].onclick= function(){
    showMain.src = product[3].src
}



