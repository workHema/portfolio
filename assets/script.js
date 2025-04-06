window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let topup = document.querySelector('.header_back__30UYF')
    if (window.scrollY > 0) { // Scroll position greater than 0
        header.style.position = "fixed";
        header.style.top = "0"; // Make sure the header stays at the top
        header.style.width = "91.8%"; // Ensure it takes up full width
        header.style.backgroundColor = "rgb(51 51 51 / 7%)";
        topup.style.transform = "rotate(90deg)"

    } else {
        header.style.position = "relative"; // Reset position when at the top
        header.style.width = "100%";
          topup.style.transform = "rotate(0deg)"
    }
});


document.querySelector('.header_back__30UYF').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This makes the scroll to top smooth
    });
});

