function handleSlideScroll(message){
    document.getElementById("scrolling-message").textContent = message;
}

window.onload = function () {
    handleSlideScroll("Atsushi Hasumoto's Open Source Fun Pages!!");
}