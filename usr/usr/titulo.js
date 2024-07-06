document.addEventListener("DOMContentLoaded", function() {
    const baseText = "@Miz992";
    const fullText = baseText.split("");
    let currentIndex = 1;
    let isDeleting = false;

    function typeWriter() {
        let displayedText = baseText[0];  // Always start with @
        if (isDeleting) {
            currentIndex--;
        } else {
            currentIndex++;
        }
        
        if (currentIndex > 1) {
            displayedText += fullText.slice(1, currentIndex).join("");
        }

        document.title = displayedText;

        if (!isDeleting && currentIndex === fullText.length) {
            setTimeout(() => isDeleting = true, 1500);  // Pause before deleting
        } else if (isDeleting && currentIndex === 1) {
            isDeleting = false;
        }

        setTimeout(typeWriter, isDeleting ? 200 : 300);
    }

    typeWriter();
});