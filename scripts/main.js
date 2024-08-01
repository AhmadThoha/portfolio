<<<<<<< HEAD
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

=======
>>>>>>> d1bec1c1a7427d3016a2748d0ef7680e3cce85a6
window.onbeforeunload = () =>{
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
<<<<<<< HEAD
};
=======
}
>>>>>>> d1bec1c1a7427d3016a2748d0ef7680e3cce85a6
