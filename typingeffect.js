document.addEventListener("DOMContentLoaded", function() {
    const text = `Parikshit is a student and inventor in the fields of Artificial Intelligence 
    (AI) and Space Technology. He is interested in pushing the boundaries of technology with
     inventions in the fields of Machine Learning and Autonomous Robotics.`;

    let i = 0;
    const speed = 10; // Speed in milliseconds per character

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-effect").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed); // Recursively call the function
        }
    }

    typeWriter(); // Initiate typing effect when the page loads
});



// menuToggle.js
const hamburger = document.getElementById('hamburger-menu');
const menuItems = document.getElementById('menu-items');

if (hamburger && menuItems) {
    hamburger.addEventListener('click', () => {
        menuItems.classList.toggle('show');
    });
}

