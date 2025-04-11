document.addEventListener("DOMContentLoaded", function () {
    const neonColors = [
         "rgba(255, 7, 58, 0.7)",   // Soft Red  
    "rgba(255, 140, 0, 0.7)",  // Soft Orange  
    "rgba(127, 255, 0, 0.7)",  // Soft Green  
    "rgba(0, 255, 127, 0.7)",  // Soft Teal  
    "rgba(0, 255, 255, 0.7)",  // Soft Cyan  
    "rgba(30, 144, 255, 0.7)", // Soft Blue  
    "rgba(153, 50, 204, 0.7)", // Soft Purple  
    "rgba(255, 20, 147, 0.7)", // Soft Pink  
    "rgba(255, 69, 0, 0.7)",   // Soft Deep Orange  
    "rgba(186, 85, 211, 0.7)", // Soft Orchid  
    "rgba(72, 209, 204, 0.7)", // Soft Turquoise  
    "rgba(0, 191, 255, 0.7)",  // Soft Sky Blue  
    "rgba(219, 112, 147, 0.7)",// Soft Pale Violet  
    "rgba(240, 128, 128, 0.7)",// Soft Light Coral  
    "rgba(64, 224, 208, 0.7)"  // Soft Aquamarine 
    ];

    function changeUnderlineColor() {
        const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
        
        // Apply color only to <a class="neon-highlight">
        document.querySelectorAll("a.neon-highlight").forEach(link => {
            link.style.color = randomColor; // Change text color
            link.style.borderBottom = `2px solid ${randomColor}`; // Underline for links
        });

        // Apply only the underline color to spans, but not the text color
        document.querySelectorAll("span.neon-highlight").forEach(span => {
            span.style.borderBottom = `2px solid ${randomColor}`; // Keep underline
        });

        // Display the color code
        const colorDisplay = document.getElementById("color-display");
        if (colorDisplay) {
            colorDisplay.innerText = randomColor;
            colorDisplay.style.color = randomColor;
        }
    }

    // Apply random color initially
    changeUnderlineColor();

    // Change color on click anywhere on the page
    document.body.addEventListener("click", changeUnderlineColor);



    // Smooth Text Animation - Letter by Letter
    function animateText(element) {
        let text = element.innerText;
        element.innerText = "";
        element.style.opacity = "1";

        text.split("").forEach((char, i) => {
            let span = document.createElement("span");
            span.innerText = char;
            span.style.opacity = "0";
            span.style.animation = `fadeLetter 0.5s ${i * 0.05}s forwards`;
            element.appendChild(span);
        });
    }

    document.querySelectorAll(".animated-text").forEach((element, index) => {
        setTimeout(() => animateText(element), index * 200);
    });
});
