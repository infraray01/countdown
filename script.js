document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const imageId = urlParams.get('image');
    const downloadLink = document.getElementById('downloadLink');
    const countdown = document.getElementById('countdown');

    const imageLinks = {
        '1': 'https://example.com/image1.jpg',
        '2': 'https://example.com/image2.jpg',
        '3': 'https://example.com/image3.jpg'
    };

    let timeLeft = 10;

    const timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            countdown.style.display = 'none';
            downloadLink.href = imageLinks[imageId];
            downloadLink.style.display = 'inline-block';
        } else {
            countdown.textContent = `Please wait ${timeLeft} seconds...`;
        }
        timeLeft -= 1;
    }, 1000);
});
