document.addEventListener('DOMContentLoaded', () => {
    const viewMoreLink = document.querySelector('.view-more-link');

    if (viewMoreLink) {
        viewMoreLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            document.body.classList.add('slide-out'); // Add the slide-out class

            // Delay the page change to allow animation to complete
            setTimeout(() => {
                window.location.href = viewMoreLink.href; // Redirect after animation
            }, 1000); // Match this delay with your CSS animation duration
        });
    }
});
