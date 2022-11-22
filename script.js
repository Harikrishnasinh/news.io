// console.log("ello world");
let open = document.querySelector(".open");
let mainul = document.querySelector("nav ul");
let close = document.querySelector(".close");
console.log(open);
open.addEventListener("click", function () {
    mainul.style.display = "flex";
    open.style.display = "none";
    close.style.display = "block";
});
close.addEventListener("click", function () {
    mainul.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
})