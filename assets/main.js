(function() {
    const img = document.getElementById("img-section-1");
    let images = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];
    const imagePath = 'assets/img/'; 

    let index = 0;
    setInterval(() => {
        index = (index + 1) % images.length; 
        img.src = imagePath + images[index];    
    }, 3000);
})();