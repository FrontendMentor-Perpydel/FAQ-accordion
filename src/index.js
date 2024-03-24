document.addEventListener('DOMContentLoaded', () => {
  // the accordion (question and answer)
  const accordions = document.querySelectorAll('.accordion-section');

  accordions.forEach(accordion => {
    // each question
    const question = accordion.querySelector('.question');

    question.addEventListener('click', () => {
        // each answer
      const answer = accordion.querySelector('.answer');

      //  each minus icon
      const iconMinus = accordion.querySelector('.icon-minus');
      //  each plus icon
      const iconPlus = accordion.querySelector('.icon-plus');
      answer.classList.toggle('active');
      
      // if the answer is open/active
      if (answer.classList.contains('active')) {
        answer.style.display = 'block';
        iconMinus.style.display = 'block';
        iconPlus.style.display = 'none';
        // if the answer is closed/not active
      } else {
        answer.style.display = 'none';
        iconMinus.style.display = 'none';
        iconPlus.style.display = 'block';
      }
    });
  });
});
