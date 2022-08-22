// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

const btnsArr = Array.from(btns);

btnsArr.map((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(e.target.classList);
    const styles = Array.from(e.target.classList);
    if (styles.includes("decrease")) {
      count -= 1;
    } else if (styles.includes("increase")) {
      count += 1;
    } else if (styles.includes("reset")) {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) value.style.color = "#222";

    value.textContent = count;
  });
});
