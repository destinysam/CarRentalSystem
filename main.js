const actualBtn = document.getElementById('actual-btn');
const fileChosen = document.getElementById('file-chosen');
actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})
const sign_in_btn = document.querySelector("#sign-in-btn")
const sign_up_btn = document.querySelector("#sign-up-btn")
const container = document.querySelector("#signup-signin-container")

sign_up_btn.addEventListener("click",() => {
    container.classList.add("sign-up-mode")
})
sign_in_btn.addEventListener("click",() => {
    container.classList.remove("sign-up-mode")
})