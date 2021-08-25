addCollapseControllListeners();

function addCollapseControllListeners() {
    const menuIcons = document.getElementsByClassName("collapsible");

    Array.from(menuIcons).forEach(icon => {
        icon.addEventListener('click', menuClicked);
        icon.addEventListener('keyup', menuClicked);
    });
}

function menuClicked(event) {
    if (event.keyCode == 13 || MouseEvent) {
        this.classList.toggle("active");
        const content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }
}