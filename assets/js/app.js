async function advice() {
    let data = await fetch("https://api.adviceslip.com/advice");
    let resonse = await data.json();
    document.querySelector("#advice-id").innerHTML = resonse.slip.id;
    document.querySelector("#advice").innerHTML = resonse.slip.advice;
}
advice();
const btn = document.querySelector("#next");
btn.addEventListener("click", () => {
    // adviced();
    advice();
})
