const caseButtons = document.querySelectorAll('.case-card[data-target]');

caseButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    if (target) {
      window.location.href = target;
    }
  });
});
