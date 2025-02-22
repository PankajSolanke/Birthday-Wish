// Confetti animation
const confettiElements = document.querySelectorAll('.confetti');

confettiElements.forEach((confetti, index) => {
  confetti.style.top = `${Math.random() * 100}%`;
  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.animationDelay = `${index * 0.5}s`;
});

// Balloon animation
const balloonElements = document.querySelectorAll('.balloon');

balloonElements.forEach((balloon, index) => {
  balloon.style.top = `${Math.random() * 100}%`;
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.animationDelay = `${index * 0.5}s`;
});

// Gradient animation
const backgroundElement = document.querySelector('.background');

backgroundElement.style.backgroundPosition = '0% 0%';

setInterval(() => {
  const backgroundPosition = backgroundElement.style.backgroundPosition;
  const [x, y] = backgroundPosition.split('%').map(Number);
  backgroundElement.style.backgroundPosition = `${x + 1}% ${y + 1}%`;
}, 50);

// Text animation
const titleElement = document.querySelector('.title');
const messageElement = document.querySelector('.message');
const message2Element = document.querySelector('.message2');
const message3Element = document.querySelector('.message3');

titleElement.style.opacity = 0;
messageElement.style.opacity = 0;
message2Element.style.opacity = 0;
message3Element.style.opacity = 0;

setTimeout(() => {
  titleElement.style.opacity = 1;
}, 500);

setTimeout(() => {
  messageElement.style.opacity = 1;
}, 1000);

setTimeout(() => {
  message2Element.style.opacity = 1;
}, 1500);

setTimeout(() => {
  message3Element.style.opacity = 1;
}, 2000);

// Add event listener to balloons
balloonElements.forEach((balloon) => {
  balloon.addEventListener('click', () => {
    balloon.style.transform = 'scale(1.2)';
    setTimeout(() => {
      balloon.style.transform = 'scale(1)';
    }, 500);
  });
});

// Add event listener to confetti
confettiElements.forEach((confetti) => {
  confetti.addEventListener('click', () => {
    confetti.style.transform = 'scale(1.2)';
    setTimeout(() => {
      confetti.style.transform = 'scale(1)';
    }, 500);
  });
});