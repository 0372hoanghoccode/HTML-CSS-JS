const tabs = document.querySelectorAll('nav ul li');
const images = document.querySelectorAll('.screen img');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    
    images.forEach((img) => img.classList.remove('show'));
    images[index].classList.add('show');
  });
});
