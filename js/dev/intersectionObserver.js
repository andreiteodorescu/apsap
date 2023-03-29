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

// Check if elements exists on page and if yes then observe it when it enters the viewport
if (document.querySelector('.stats-component')) {
    observer.observe(document.querySelector('.stats-component'));
}
