function DownloadFile() {
    const downloadLink = document.createElement("a");
    downloadLink.href = '#';
    downloadLink.download = 'download.png';
    downloadLink.click();
}


// Skill Animation
const skillCards = document.querySelectorAll(".Skill-Card");

const skillObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillCards.forEach((card, i) => {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, i * 120);
                });
            }
        });
    },
    { threshold: 0.3 }
);

skillObserver.observe(document.querySelector("#skill"));