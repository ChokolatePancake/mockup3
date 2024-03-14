let faqAccordions = document.getElementsByClassName("FAQ__accordion");
let i;

for (let item of faqAccordions) {
    item.addEventListener("click", function (e) {
        e.target.classList.toggle("active");

        let panel = e.target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}