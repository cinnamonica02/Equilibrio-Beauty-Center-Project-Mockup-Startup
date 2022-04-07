


// Nav Toggle

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("#nav .container ul");

// Open Nav Toggle

menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

// close Nav Toggle

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
})

// change active class to ckicked nav item
const navItems = document.querySelectorAll('nav ul li');


// remove active class from other nav item
const removeActiveClass = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

// add active class to clicked nav item
navItems.forEach(item => {
  const link = item.querySelector('a')
  link.addEventListener('click', () => {
    removeActiveClass();
    link.classList.add('active');
  })
}) 

// Show / hide FAQS

const FAQS = document.querySelectorAll('section#FAQS article'); 

FAQS.forEach(faq => {
  faq.addEventListener('click', () =>{
    faq.classList.toggle('open');

    // Icon change
    const icon = faq.querySelector('.icon i');
    if(icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus'
    } else {
      icon.className = 'uil uil-plus';
    }
  })
})

// Change Navbar Style on Scroll 

window.addEventListener("scroll", () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
}) 