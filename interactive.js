const navLinks = document.querySelectorAll('nav a'); // Select all navigation links

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#ddd'; // Change background color on hover
  });

  link.addEventListener('mouseout', () => {
    link.style.backgroundColor = ''; // Remove background color on mouseout
  });
});
