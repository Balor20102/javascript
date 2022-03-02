let a = document.querySelector('.div-item');

a.addEventListener('click', con);

function con(){
    (console.log(this))
}
    /*
    <div class="div-item">
        klik
    </div>
    
    ja, het altijd het zelfde
    */