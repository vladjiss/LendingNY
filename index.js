const swiper = document.querySelector('.swipper');
const cards = Array.from(swiper.querySelectorAll('.card'));

let activeCardIndex = 0;
cards[activeCardIndex].classList.add('active');

swiper.addEventListener('touchstart', handleTouchStart, false);
swiper.addEventListener('touchmove', handleTouchMove, false);
swiper.addEventListener('touchend', handleTouchEnd, false);

let initialX = null;
let deltaX = null;

const deltaXThreshold = 50;

function handleTouchStart(event) {
    initialX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!initialX) return;

    deltaX = event.touches[0].clientX - initialX;


    event.preventDefault();
}

function handleTouchEnd() {
    if (!deltaX || Math.abs(deltaX) < deltaXThreshold) return;

    const swipeDirection = deltaX > 0 ? 'prev' : 'next';

    if (swipeDirection === 'prev') {
        if (activeCardIndex > 0) {
            cards[activeCardIndex].classList.remove('active', 'left');
          
            activeCardIndex--;
            cards[activeCardIndex].style.zIndex = -cards[activeCardIndex].style.zIndex;
            cards[activeCardIndex].classList.add('active', 'left');
        
        }
    } else if (swipeDirection === 'next') {
        nextCard();
    }

    initialX = null;
    deltaX = null;
}

function nextCard() {
    if (activeCardIndex == cards.length - 2) {
        document.querySelector('.btn_next').classList.add('hidden');
        document.querySelector('.btn_go').classList.remove('hidden');
        document.querySelector('.btn_go').addEventListener('click', goClicked);
    }
    if (activeCardIndex < cards.length - 1) {
        cards[activeCardIndex].classList.add('animate-out-left');

        setTimeout(() => {
            cards[activeCardIndex].classList.remove('active', 'animate-out-left', 'left');
            cards[activeCardIndex].style.zIndex = -cards[activeCardIndex].style.zIndex;
            activeCardIndex++;
            cards[activeCardIndex].classList.add('active');
        }, 250); // Задержка 500ms для анимации
    } else {
        for (let i = 0; i < cards.length; i++) {
            if( i != activeCardIndex) {
                cards[i].classList.add('hidden');
            }
        }
        cards[activeCardIndex].classList.add('animate-out-left');
        setTimeout(() => {
            const pageUrl = document.querySelector('.btn_go').getAttribute('data-page-url');
            window.location.href = pageUrl;
        }, 500);
    }
}
function goClicked() {
    const goButton = document.querySelector('.btn_go');
    const pageUrl = goButton.getAttribute('data-page-url');
    window.location.href = pageUrl;
}



