document.addEventListener('readystatechange', function() {
  if (document.readyState === "complete") {
    RapRacer.init();
  }
})
