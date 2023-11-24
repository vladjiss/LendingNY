let currentIndex = 0;
let startX = 0;
let endX = 0;
let endSwap = false;

function nextCard() {
    const cards = document.querySelectorAll('.card');

    if (currentIndex < cards.length - 2) {
        currentIndex++;
        cards[currentIndex - 1].classList.add('out');
        cards[currentIndex].classList.add('active');
    } else {
        endSvap = true;
        currentIndex++;
        cards[currentIndex - 1].classList.add('out');
        cards[currentIndex].classList.add('active');
        document.querySelector('.btn_next').classList.add('hidden');
        document.querySelector('.btn_go').classList.remove('hidden');
    }
}


function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) { // Порог для определения свайпа (можно настроить)
        if (!endSwap) { 
            nextCard();
        }
    }
}

// Добавляем обработчики событий touchstart и touchend к контейнеру, где расположены карточки
const container = document.querySelector('.swipper');
container.addEventListener('touchstart', handleTouchStart, false);
container.addEventListener('touchend', handleTouchEnd, false);

