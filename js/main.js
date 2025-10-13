function handleSlideScroll(message){
    document.getElementById("scrolling-message").textContent = message;
}

window.onload = function () {
    handleSlideScroll("Atsushi Hasumoto のオープンソースファンページの個人的な備忘録です。");
}