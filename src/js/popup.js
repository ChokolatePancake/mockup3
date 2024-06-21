let showbtn = document.getElementById("show-popup");
let closebtn = document.getElementById("close-popup");
let sendbtn = document.getElementById("send-button");
let popup = document.querySelector(".popup");
let form = document.querySelector(".popup__form");

showbtn.addEventListener("click", () => popup.classList.add("show"));
closebtn.addEventListener("click", () => popup.classList.remove("show"));

sendbtn.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = true;
    form.querySelectorAll('[required]').forEach(field => {
        if (field.value.trim() === '') {
            field.classList.add('highlight-error');
            field.value= 'Необхідно заповнити дане поле';
            isValid = false;
        } else {
            field.classList.remove('highlight-error');
        }
    });

    if (isValid) {
        console.log("Form submitted!");
        popup.classList.remove("show");
        form.reset();
    }
});

// Remove highlights when typing
form.addEventListener('input', (e) => {
    if (e.target.required) {
        e.target.classList.remove('highlight-error');
    }
});