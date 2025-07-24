document.getElementById("applyForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for applying! We’ll contact you soon.");
  this.reset();
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! We'll get back to you shortly.");
  this.reset();
});