const deviceCards = document.querySelectorAll('.device-card');

deviceCards.forEach(card => {
  const checkbox = card.querySelector('.device-card__checkbox');

  checkbox.addEventListener('change', () => {
    card.classList.toggle('device-card--selected', checkbox.checked);
  });
});
