//Resume download

function DownloadFile() {
    const button = document.getElementById("button");
    button.addEventListener("click", ()=> {
        button.classList.add("click");
    });
    
    setTimeout(function(){
            button.classList.remove("click");
        },150);
    const downloadLink = document.createElement("a");
    downloadLink.href = 'resume.pdf';
    downloadLink.download = 'resume_suvam_samanta.pdf';
    downloadLink.click();
}

//Menu toggle
const icon = document.querySelector(".icon");
const menu = document.querySelector(".list");
const links = document.querySelectorAll(".list a");
// Toggle menu on icon click
icon.addEventListener("click", () => {
    menu.classList.toggle("active");
});
// Hide menu when clicking any link
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

//Edit copy
document.addEventListener("copy", function (data) {
    data.clipboardData.setData("text/plain", "বল হরি হরি বোল");
    data.preventDefault();
});


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