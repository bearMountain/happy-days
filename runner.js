var detail1 = {
    fun: {
        link: 'https://youtu.be/Pl23TcdlDqM?si=i1eXNy6wbe0bbOwJ',
        image: 'fail.png',
        alt: 'Chess Game Preview'
    },
    encouragement: {
        image: 'mo2.png',
        alt: 'Chess Game Preview',
        text: 'You have valuable, insightful opinions that are worth listening to. Honestly, it\'s one of the things that made me fall in love with you.'
    },
    love: {
        text: 'You\'re the love of my life bu. As far as I really remember, this is the only life I\'ve had. I choose to spend it with you, I get to spend it with you. Thank you bb, I\'m a lucky guy. You rock, I love you. -j'
    }
};

document.getElementById('fun-link').href = detail1.fun.link;
document.getElementById('fun-image').src = detail1.fun.image;
document.getElementById('fun-image').alt = detail1.fun.alt;

document.getElementById('encouragement-image').src = detail1.encouragement.image;
document.getElementById('encouragement-image').alt = detail1.encouragement.alt;
document.getElementById('encouragement-text').textContent = detail1.encouragement.text;

document.getElementById('love-text').textContent = detail1.love.text;