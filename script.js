/* =========================================
   BHAI PHONTA WEBSITE - JAVASCRIPT
   ========================================= */

/* PAGE NAVIGATION */
function showPage(pageId, button) {
    const selectedPage = document.getElementById(pageId);

    if (!selectedPage) {
        console.error("Page not found:", pageId);
        return;
    }

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    selectedPage.classList.add("active");

    document.querySelectorAll(".nav-btn").forEach(navButton => {
        navButton.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* PHOTO SLIDER: THESE ARE THE REAL FILES IN assets/ */
const memoryPhotos = [
    "assets/sister1.jpeg",
    "assets/sister2.jpeg",
    "assets/sister3.jpeg"
];

let currentSlide = 0;

/* OPEN A MEMORY SUBSECTION */
function openMemory(memoryId) {
    const selectedMemory = document.getElementById(memoryId);

    if (!selectedMemory || !selectedMemory.classList.contains("memory-content")) {
        console.error("Memory section not found:", memoryId);
        return;
    }

    document.querySelectorAll(".memory-content").forEach(memory => {
        memory.classList.remove("show");
    });

    selectedMemory.classList.add("show");

    if (memoryId === "beautiful") {
        currentSlide = 0;
        updateSlide();
    }

    selectedMemory.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* CLOSE THE OPEN MEMORY SUBSECTION */
function closeMemory() {
    document.querySelectorAll(".memory-content").forEach(memory => {
        memory.classList.remove("show");
    });

    const memoriesPage = document.getElementById("memories");
    if (memoriesPage) {
        memoriesPage.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

/* UPDATE THE BEAUTIFUL MOMENTS PHOTO */
function updateSlide() {
    const image = document.getElementById("memoryImage");
    const counter = document.getElementById("slideCounter");

    if (!image || !counter) return;

    image.style.opacity = "0";

    const nextImagePath = memoryPhotos[currentSlide];
    const preloadImage = new Image();

    preloadImage.onload = () => {
        image.src = nextImagePath;
        image.alt = `Beautiful Memory ${currentSlide + 1}`;
        image.style.opacity = "1";
    };

    preloadImage.onerror = () => {
        image.style.opacity = "1";
        console.error("Could not load image:", nextImagePath);
    };

    preloadImage.src = nextImagePath;
    counter.textContent = `${currentSlide + 1} / ${memoryPhotos.length}`;
}

/* NEXT / PREVIOUS PHOTO */
function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= memoryPhotos.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = memoryPhotos.length - 1;
    }

    updateSlide();
}

/* GIFT SURPRISE */
function openGift() {
    const message = document.getElementById("giftMessage");
    const giftBox = document.querySelector(".gift-box");

    if (message) message.style.display = "block";
    if (giftBox) giftBox.innerHTML = "💝";

    createConfetti();
}

/* CONFETTI ANIMATION */
function createConfetti() {
    const symbols = ["🌸", "❤️", "✨", "🌺", "💛"];

    for (let i = 0; i < 35; i++) {
        const item = document.createElement("div");
        item.className = "confetti";
        item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        item.style.left = Math.random() * 100 + "vw";
        item.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(item);

        setTimeout(() => item.remove(), 5000);
    }
}
