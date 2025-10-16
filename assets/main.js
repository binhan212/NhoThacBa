(
    function() {
        const backGround = document.querySelector('.section-1');
        let images = ['banner.jpg','banner1.jpg', 'banner2.jpg'];
        let index = 0;
        setInterval(() => {
            index = (index + 1) % images.length;
            backGround.style.backgroundImage = `url(assets/img/${images[index]})`;
        },3000);
    }
)()