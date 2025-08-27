// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
  
  // Dropdown functionality
  const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
  
  dropdownItems.forEach(function(item) {
    const link = item.querySelector('.nav-link');
    
    // Desktop hover behavior
    if (window.innerWidth > 768) {
      item.addEventListener('mouseenter', function() {
        this.classList.add('show');
      });
      
      item.addEventListener('mouseleave', function() {
        this.classList.remove('show');
      });
    }
    
    // Mobile click behavior
    if (link) {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle('show');
        }
      });
    }
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-item.has-dropdown')) {
      dropdownItems.forEach(function(item) {
        item.classList.remove('show');
      });
    }
  });
  
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        if (navToggle) {
          navToggle.classList.remove('active');
        }
      }
    }, 250);
  });
});