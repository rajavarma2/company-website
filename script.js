
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

/* ================= THANK YOU TOAST ================= */

window.addEventListener("load", function () {
  if (window.location.hash === "#contact") {
    const toast = document.getElementById("thankYouToast");
    if (!toast) return;

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }
});


  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
