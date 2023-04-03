const observer = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            const intersecting = entry.isIntersecting;
            if(intersecting) {
                entry.target.classList.add("in-view");
            }
        }
    },
    // 👇 Threshold is 100%
    { threshold: 0.5 }
);

const observerTargets = document.querySelectorAll('.observe');
observerTargets.forEach( observerTarget => {
    observer.observe(observerTarget);
});
