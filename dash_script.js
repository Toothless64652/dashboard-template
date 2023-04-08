const completedBar = document.querySelector('.completed-task'),
    toggleActive = document.querySelector('.toggle-dis'),
    toggleNone = document.querySelector('.toggle-none'),
    activeBar = document.querySelector(".active-task"),
    toggler = document.querySelector('.toggler');


toggleActive.addEventListener('click', () => {
    activeBar.style.display = "block";
    completedBar.style.display = "none";
    toggleActive.classList.toggle("active");
    toggleNone.classList.toggle("active");
})

toggleNone.addEventListener('click', () => {
    completedBar.style.display = "block";
    activeBar.style.display = "none";
    toggleActive.classList.toggle("active");
    toggleNone.classList.toggle("active");
})


