const carousel = document.querySelector('.work__slides');
const firstImage = document.querySelectorAll('.work__slides img')[0];
const arrowButtons = document.querySelectorAll('.arrow-button');

let firstImageWidth = firstImage.clientWidth;

arrowButtons.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    // If the clicked icon is the left, reduce width value from the carousel scroll left, else add to it
    carousel.scrollLeft +=
      arrow.id === 'left' ? -firstImageWidth : firstImageWidth;
  });
});

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = (e) => {
  // Updating gloabal variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  // Scrolling images/carousel to left according to mouse pointer
  e.preventDefault();
  if (!isDragStart) return;
  carousel.classList.add('dragging');
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove('dragging');
};

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);
