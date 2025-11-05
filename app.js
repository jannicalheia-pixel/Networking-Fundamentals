document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  });
});
