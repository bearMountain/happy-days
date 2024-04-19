const urlParams = new URLSearchParams(window.location.search);
const photoId = urlParams.get('photoId');
const script = document.createElement('script');
script.src = photoId + ".js";
script.defer = true;
document.head.appendChild(script);

script.onload = function() {
    document.getElementById('fun-link').href = detail1.fun.link;
    document.getElementById('fun-image').src = detail1.fun.image;
    document.getElementById('fun-image').alt = detail1.fun.alt;

    document.getElementById('encouragement-image').src = detail1.encouragement.image;
    document.getElementById('encouragement-image').alt = detail1.encouragement.alt;
    document.getElementById('encouragement-text').textContent = detail1.encouragement.text;

    document.getElementById('love-text').textContent = detail1.love.text;
};