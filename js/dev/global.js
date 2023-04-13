// If "grey-header-cut" exists add a class on "main" to adjust the diamonds background image
if (document.querySelector('.grey-header-cut') !== null) {
    document.querySelector('.main').classList.add("main-bg-short");
}

window.addEventListener("load", (event) => {
    // If "component-skew-inner"s height is grater than 2350px add a class to adjust the diamonds background image
    document.querySelectorAll('.component-skew-inner').forEach((item) => {
        if (item.clientHeight > 2350) {
            item.classList.add("component-skew-inner-tall");
        }
    });
});

