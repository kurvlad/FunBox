let cards = document.querySelectorAll('.item-card');
let cardsLink = document.querySelectorAll('.item-subscr-link');

for (let i = 0; i < cardsLink.length; i++) {
  cards[i].addEventListener('click', function () {
    if (!this.className.includes('disabled')) {
      this.classList.toggle('selected')
    }
  })

  cardsLink[i].addEventListener('click', function () {
    if (!cards[i].className.includes('disabled')) {
      cards[i].classList.toggle('selected')
    }
  })
}