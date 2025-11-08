const OpenBtn = document.getElementById("open-about");
const CloseBtn = document.getElementById("close-about");
const AbtWndw = document.getElementById("about-window");

OpenBtn.addEventListener("click", () => {
    AbtWndw.classList.add("open")
})

CloseBtn.addEventListener("click", () => {
    AbtWndw.classList.remove("open")
})