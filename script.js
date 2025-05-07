var butt = document.querySelectorAll(".btn");
var begin = document.querySelector("#journey");
var imgs = document.querySelectorAll(".imga");
var content = document.querySelectorAll(".content");
var limg = document.querySelectorAll(".limg");

imgs[0].style.display="block";
content[0].style.display="block";
limg[0].style.display="block";
imgs[5]= null;

butt.forEach(function (button, index){
     button.addEventListener("click", function (){
        hide();
     imgs[index].style.display="block";
     content[index].style.display="block";
     limg[index].style.display="block";
     })
})

function hide(){
    imgs.forEach(function (img){
        img.style.display="none";
    }) 
    content.forEach(function (div){
        div.style.display="none";
    })
    limg.forEach(function (img){
        img.style.display="none";
    })
}

begin.addEventListener("click", function (){
    hide();
    imgs[1].style.display="block";
    content[1].style.display="block";
    limg[1].style.display="block";
})


