const sections = document.querySelectorAll('.sections');
const scrollIcon = document.querySelector('.scroll-up');

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 3.5) * 2;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}

const scrollButton = () => {
  const scrollDown = window.scrollY;
  if (scrollDown >= 250) {
    scrollIcon.classList.add('showBtn');
  } else {
    scrollIcon.classList.remove('showBtn');
    scrollIcon.classList.remove('onClick');
  }
};

scrollIcon.addEventListener('click', () => scrollIcon.classList.add('onClick'));
window.addEventListener('scroll', () => {
  checkBoxes();
  scrollButton();
});
