// Method 1
let increaseBtn = document.querySelector(".increase")
let decreaseBtn = document.querySelector(".decrease")
let resetBtn = document.querySelector(".reset")

let value = document.getElementById("value")
let count = 0;

increaseBtn.addEventListener("click", function(){
    value.textContent = ++count;
    changeColor()
})

decreaseBtn.addEventListener("click", function(){
    value.textContent = --count;
    changeColor()
})

resetBtn.addEventListener("click", function(){
    count = value.textContent = 0;
    changeColor()
})

function changeColor() {
    if (count>0) {
        value.style.color = "green";
    }else if(count<0){
        value.style.color = "red";
    }
    else{
        value.style.color = "#222"
    }
}


// Method 2
/*
// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // console.log(styles)
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
*/
