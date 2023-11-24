let currentIndex = 0;

function nextCard() {
    const cards = document.querySelectorAll('.card');
    
    if (currentIndex < cards.length - 2) {
        
        currentIndex++;
        cards[currentIndex - 1].classList.add('out')
        cards[currentIndex].classList.add('active')

    } else {
        
        currentIndex++;
        cards[currentIndex - 1].classList.add('out')
        cards[currentIndex].classList.add('active')
        document.querySelector('.btn_next').classList.add('hidden')
        document.querySelector('.btn_go').classList.remove('hidden')

    }

    
}