const screen = document.querySelector(".screen");
const button = document.querySelectorAll(".value");
const btnBlue= document.querySelectorAll(".btn-blue");

const equal = document.querySelector(".btn-red");
const cal = document.querySelector(".calculator");
const buttons = document.querySelector(".buttons");


// BACKGROUND-THEME-TOGGLE

const circleLeft = document.querySelector(".left");
const circleRight = document.querySelector(".right");
const circleCenter = document.querySelector(".circle");
const navShow = document.querySelector(".nav-show")
const circleToggle = document.querySelector(".circle");
const btnNav = document.querySelectorAll(".btn-nav");

circleLeft.onclick = function () {
    circleToggle.style.left = "5px";

    equal.style.backgroundColor = "hsl(25, 98%, 40%)";
    equal.style.boxShadow = "0 3px 0 hsl(25, 99%, 27%)";
    equal.style.color = "hsl(198, 20%, 13%)";

    btnNav.forEach(function (e) {
        e.style.color = "hsl(60, 10%, 19%)"
    })
    

    button.forEach(function (e) {
        e.style.backgroundColor = "hsl(45, 7%, 89%)";
        e.style.boxShadow = "0 3px 0 hsl(35, 11%, 61%)";
        e.style.color = "hsl(60, 10%, 19%)"
    });

     btnBlue.forEach(function (e) {
         e.style.backgroundColor = "hsl(185, 42%, 37%)";
         e.style.boxShadow = "0 3px 0 hsl(185, 58%, 25%)";
         e.style.color = "hsl(0, 0, 100%)"
     });
    
    cal.style.color = "hsl(60, 10%, 19%)";
    cal.style.backgroundColor = "hsl(0, 0%, 90%)";
    buttons.style.backgroundColor = "hsl(0, 5%, 81%)";
    circleToggle.style.backgroundColor = "hsl(176, 100%, 44%)";
    screen.style.backgroundColor = "hsl(0, 0%, 93%)";

}

circleRight.onclick = function () {
    circleToggle.style.right = "5px";
    if (circleToggle.style.right == "5px") {
        circleToggle.style.left = "44.5px";
        console.log("hello")
  }
    equal.style.backgroundColor = "hsl(176, 100%, 44%)";
    equal.style.boxShadow = "0 3px 0 hsl(177, 92%, 70%)";
    equal.style.color = "hsl(198, 20%, 13%)";

    btnNav.forEach(function (e) {
        e.style.color = "hsl(52, 100%, 62%)"
    })
    

    button.forEach(function (e) {
        e.style.backgroundColor = "hsl(268, 47%, 21%)";
        e.style.boxShadow = "0 3px 0 hsl(285, 91%, 52%)";
        e.style.color = "hsl(52, 100%, 62%)"
    });

     btnBlue.forEach(function (e) {
         e.style.backgroundColor = "hsl(281, 89%, 26%)";
         e.style.boxShadow = "0 3px 0 hsl(285, 91%, 52%)";
         e.style.color = "hsl(0, 0, 100%)"
     });
    
    cal.style.color = "hsl(52, 100%, 62%)";
    cal.style.backgroundColor = "hsl(268, 75%, 9%)";
    buttons.style.backgroundColor = "hsl(268, 71%, 12%)";
    circleToggle.style.backgroundColor = "hsl(176, 100%, 44%)";
    screen.style.backgroundColor = "hsl(268, 71%, 12%)";

}



// CALCULATIONS
let expression = "";

button.forEach(function (e) {
    e.addEventListener("click", function () {
      expression += e.innerText;
        screen.innerHTML = expression; 
    })
})

equal.addEventListener("click", function () {
    let result = eval(expression);
    screen.innerHTML = result;
    expression = ''
});

// DELETE ERROR

const delBtn = document.querySelector(".delete");

delBtn.addEventListener("click", function () {
    let k = expression;

 let x =  k.trimRight
 console.log(x)
    
    
    


    screen.innerHTML = k;

})

// RESET

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", function () {
    screen.innerHTML = "0";
})





    
     












