let plusBtn = document.querySelectorAll(".plus");
let minusBtn = document.querySelectorAll(".minus");
let para = document.querySelectorAll(".para");

console.log(plusBtn, minusBtn, para)

for(let i=0; i<plusBtn.length; i++){
  plusBtn[i].addEventListener("click", function(){
    para[i].classList.remove("hide");
    plusBtn[i].classList.add("hide");
    minusBtn[i].classList.remove("hide");
  })
}

for(let i=0; i<minusBtn.length; i++){
  minusBtn[i].addEventListener("click", function(){
    para[i].classList.add("hide");
    plusBtn[i].classList.remove("hide");
    minusBtn[i].classList.add("hide");
  })
}