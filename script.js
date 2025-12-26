
/* ================= COURSES SCROLL ================= */

const scrollContainer = document.getElementById("coursesScroll");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

let autoScrollInterval;
let autoScrollPaused = false;

/* BUTTON SCROLL */
scrollLeftBtn.onclick = () => scrollCourses(-1);
scrollRightBtn.onclick = () => scrollCourses(1);

function scrollCourses(direction) {
  autoScrollPaused = true;

  scrollContainer.scrollBy({
    left: direction * 320,
    behavior: "smooth"
  });

  // resume auto scroll after 3 seconds
  setTimeout(() => {
    autoScrollPaused = false;
  }, 3000);
}

/* AUTO SCROLL */
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    if (!autoScrollPaused) {
      scrollContainer.scrollBy({
        left: 1,
        behavior: "smooth"
      });

      // reset when end reached
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      }
    }
  }, 25);
}

/* PAUSE ON HOVER */
scrollContainer.addEventListener("mouseenter", () => {
  autoScrollPaused = true;
});

scrollContainer.addEventListener("mouseleave", () => {
  autoScrollPaused = false;
});

/* START */
startAutoScroll();

const form = document.getElementById('contactForm');
const successMsg = document.querySelector('.success-msg');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submit

  const formData = new FormData(form);
  const action = form.getAttribute('action');

  fetch(action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      successMsg.style.display = 'block';
      errorMsg.style.display = 'none';
      form.reset();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    successMsg.style.display = 'none';
    errorMsg.style.display = 'block';
  });
});

