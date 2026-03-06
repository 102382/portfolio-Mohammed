const navA = document.querySelectorAll('nav a');

let navAnimationDely = 0.2;
navA.forEach(link => {

  link.style.animationDelay = `${navAnimationDely}s`;
  navAnimationDely += 0.1;
});



// About me section animation

const boxes = document.querySelectorAll('.Aboutme > div');
let width = window.innerWidth;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

boxes.forEach((box, index) => {
  if (width > 820) {
    box.style.setProperty('--delay', index * 0.2);
  }
  observer.observe(box);
});


// Technieken animatie


window.onload = function () {
  setTimeout(() => {
    const techniekenSection = document.getElementById("technieken-grid");
    const techniek1 = techniekenSection.querySelectorAll(".techniek1")

    const techniek1Animation = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animation');
          techniek1Animation.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    techniek1.forEach((techniek, index) => {
      techniek1Animation.observe(techniek);
    });
  }, 100)

}
