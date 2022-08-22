// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(value);
console.log(btns);

const btnsArr = Array.from(btns);

btnsArr.map((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(e.target.classList);
    const classArr = Array.from(e.target.classList);
    if (classArr.includes("decrease")) {
      count -= 1;
    } else if (classArr.includes("increase")) {
      count += 1;
    } else if (classArr.includes("reset")) {
      count = 0;
    }
    value.textContent = count;
  });
});
