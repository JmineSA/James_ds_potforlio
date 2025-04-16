$(document).ready(function () {

  $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if (window.scrollY > 60) {
          document.querySelector('#scroll-top').classList.add('active');
      } else {
          document.querySelector('#scroll-top').classList.remove('active');
      }

      // scroll spy
      $('section').each(function () {
          let height = $(this).height();
          let offset = $(this).offset().top - 200;
          let top = $(window).scrollTop();
          let id = $(this).attr('id');

          if (top > offset && top < offset + height) {
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find(`[href="#${id}"]`).addClass('active');
          }
      });
  });

  // smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top,
      }, 500, 'linear')
  });

  // <!-- emailjs to mail contact form data -->
  $("#contact-form").submit(function (event) {
      emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

      emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
          .then(function (response) {
              console.log('SUCCESS!', response.status, response.text);
              document.getElementById("contact-form").reset();
              alert("Form Submitted Successfully");
          }, function (error) {
              console.log('FAILED...', error);
              alert("Form Submission Failed! Try Again");
          });
      event.preventDefault();
  });
  // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
  function () {
      if (document.visibilityState === "visible") {
          document.title = "Portfolio | Jigar Sable";
          $("#favicon").attr("href", "assets/images/favicon.png");
      }
      else {
          document.title = "Come Back To Portfolio";
          $("#favicon").attr("href", "assets/images/favhand.png");
      }
  });


// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Get current theme or system preference
  function getCurrentTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme;
    return prefersDark.matches ? 'dark' : 'light';
  }
  
  // Apply theme
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.checked = (theme === 'dark');
  }
  
  // Initialize
  applyTheme(getCurrentTheme());
  
  // Toggle event
  themeToggle.addEventListener('change', function() {
    applyTheme(this.checked ? 'dark' : 'light');
  });
  
  // Watch for system theme changes
  prefersDark.addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
});

//loading animation
document.addEventListener('DOMContentLoaded', function() {
  // Create binary rain
  const binaryRain = document.querySelector('.binary-rain');
  const binaryChars = ['0', '1', 'α', 'β', 'λ', 'σ', 'δ', '∇', '∑', '∏'];
  
  for (let i = 0; i < 100; i++) {
      const char = document.createElement('div');
      char.textContent = binaryChars[Math.floor(Math.random() * binaryChars.length)];
      char.style.position = 'absolute';
      char.style.left = `${Math.random() * 100}%`;
      char.style.top = `${Math.random() * 100}%`;
      char.style.color = `rgba(0, 255, 255, ${Math.random() * 0.5 + 0.1})`;
      char.style.fontSize = `${Math.random() * 10 + 10}px`;
      char.style.animation = `fall ${Math.random() * 5 + 3}s linear infinite`;
      char.style.animationDelay = `${Math.random() * 5}s`;
      binaryRain.appendChild(char);
  }
  
  // Create floating particles
  const particles = document.querySelector('.particles');
  for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = `${Math.random() * 6 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = `rgba(0, ${Math.random() * 155 + 100}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.1})`;
      particle.style.borderRadius = '50%';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px rgba(0, 255, 255, 0.7)`;
      particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particles.appendChild(particle);
  }
  
  // Add keyframes dynamically
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
      @keyframes fall {
          to { transform: translateY(100vh); }
      }
  `, styleSheet.cssRules.length);
  
  styleSheet.insertRule(`
      @keyframes float {
          0% { transform: translate(0, 0); }
          25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
          50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
          75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
          100% { transform: translate(0, 0); }
      }
  `, styleSheet.cssRules.length);
  
  // Simulate loading progress
  const progressBar = document.querySelector('.progress-bar');
  const progressText = document.querySelector('.progress-text');
  const subTexts = [
      "Decrypting data streams...",
      "Analyzing datasets...",
      "Training neural networks...",
      "Visualizing insights...",
      "Compiling portfolio...",
      "Ready to explore!"
  ];
  const subTextElement = document.querySelector('.loading-subtext');
  
  let progress = 0;
  const interval = setInterval(() => {
      progress += Math.random() * 5;
      if (progress > 100) progress = 100;
      
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${Math.floor(progress)}%`;
      
      // Change subtext at certain intervals
      if (progress < 20) subTextElement.textContent = subTexts[0];
      else if (progress < 40) subTextElement.textContent = subTexts[1];
      else if (progress < 60) subTextElement.textContent = subTexts[2];
      else if (progress < 80) subTextElement.textContent = subTexts[3];
      else if (progress < 95) subTextElement.textContent = subTexts[4];
      else subTextElement.textContent = subTexts[5];
      
      if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
              document.querySelector('.preloader').style.opacity = '0';
              setTimeout(() => {
                  document.querySelector('.preloader').style.display = 'none';
                  // Here you would typically load your main content
              }, 500);
          }, 500);
      }
  }, 200);
});
// loading ends 


// Navbar scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', function() {
  navbar.classList.toggle('active');
  this.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
  });
});

// Typed.js initialization
const typed = new Typed('.typing-text', {
  strings: ['Data Scientist', 'Machine Learning Engineer', 'AI Enthusiast', 'Data Analyst'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
  let response
  type === "skills" ?
      response = await fetch("skills.json")
      :
      response = await fetch("./projects/projects.json")
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach(skill => {
      skillHTML += `
      <div class="bar">
            <div class="info">
              <img src=${skill.icon} alt="skill" />
              <span>${skill.name}</span>
            </div>
          </div>`
  });
  skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
  let projectsContainer = document.querySelector("#work .box-container");
  let projectHTML = "";
  projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
      projectHTML += `
      <div class="box tilt">
    <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
    <div class="content">
      <div class="tag">
      <h3>${project.name}</h3>
      </div>
      <div class="desc">
        <p>${project.desc}</p>
        <div class="btns">
          <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
          <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
        </div>
      </div>
    </div>
  </div>`
  });
  projectsContainer.innerHTML = projectHTML;

  // <!-- tilt js effect starts -->
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 15,
  });
  // <!-- tilt js effect ends -->
  document.addEventListener('DOMContentLoaded', function() {
    // 1. 3D Tilt Effect with Mouse Tracking
    const imageContainer = document.querySelector('.about .row .image');
    const profileImage = document.querySelector('.about .row .image img');
    
    if (imageContainer && profileImage) {
      imageContainer.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
        
        profileImage.style.transform = `
          perspective(1000px)
          rotateY(${xAxis}deg)
          rotateX(${yAxis}deg)
          scale(1.05)
        `;
      });
  
      imageContainer.addEventListener('mouseleave', () => {
        profileImage.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
      });
    }
  
    // 2. Animated Counter for Stats
    const statNumbers = document.querySelectorAll('.about .stat-number');
    const statsSection = document.querySelector('.about .stats-box');
    
    if (statNumbers.length && statsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            statNumbers.forEach(stat => {
              const target = parseInt(stat.textContent);
              const suffix = stat.textContent.match(/\D+$/)?.[0] || '';
              const duration = 2000;
              const start = 0;
              const startTime = performance.now();
              
              const animateCount = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const currentValue = Math.floor(progress * (target - start) + start);
                
                stat.textContent = currentValue + suffix;
                
                if (progress < 1) {
                  requestAnimationFrame(animateCount);
                }
              };
              
              requestAnimationFrame(animateCount);
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(statsSection);
    }
  
    // 3. Dynamic Gradient Text Effect
    const heading = document.querySelector('.about .row .content h3');
    
    if (heading) {
      document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        heading.style.setProperty('--gradient-x', x);
        heading.style.setProperty('--gradient-y', y);
      });
      
      // Add CSS variables to your heading style
      heading.style.setProperty('--gradient-x', 0.5);
      heading.style.setProperty('--gradient-y', 0.5);
    }
  
    // 4. Interactive Expertise List
    const expertiseItems = document.querySelectorAll('.about .expertise-list li');
    
    expertiseItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('i');
        if (icon) {
          icon.style.transform = 'scale(1.3) rotate(10deg)';
        }
      });
      
      item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('i');
        if (icon) {
          icon.style.transform = 'scale(1) rotate(0deg)';
        }
      });
    });
  
    // 5. Parallax Background Effect
    const aboutSection = document.querySelector('.about');
    
    if (aboutSection) {
      window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        aboutSection.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
      });
    }
  
    // 6. Button Wave Effect
    const buttons = document.querySelectorAll('.resumebtn .btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 1000);
      });
    });
  
    // 7. Animated Background Elements
    const floatingElements = document.querySelectorAll('.about .floating-element');
    
    floatingElements.forEach((el, index) => {
      // Randomize initial positions
      const randomX = Math.random() * 100 - 50;
      const randomY = Math.random() * 100 - 50;
      el.style.transform = `translate(${randomX}px, ${randomY}px)`;
      
      // Create unique floating patterns
      const duration = 15 + Math.random() * 10;
      const delay = index * 3;
      
      el.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    });
  
    // 8. Dynamic Content Loading
    const methodologySection = document.querySelector('.about .methodology');
    
    if (methodologySection) {
      // Simulate loading dynamic content
      setTimeout(() => {
        methodologySection.innerHTML += `
          <div class="methodology-stats">
            <div class="stat">
              <div class="number">85-95%</div>
              <div class="label">Model Accuracy</div>
            </div>
            <div class="stat">
              <div class="number">40%</div>
              <div class="label">Faster Insights</div>
            </div>
          </div>
        `;
      }, 1500);
    }
  
    // 9. Viewport-aware Animations
    const aboutContent = document.querySelector('.about .row .content');
    
    if (aboutContent) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, { threshold: 0.3 });
      
      observer.observe(aboutContent);
    }
  
    // 10. Audio Feedback on Interactions
    const interactiveElements = document.querySelectorAll(
      '.about .image, .about .expertise-list li, .about .btn'
    );
    
    const hoverSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3');
    hoverSound.volume = 0.2;
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
      });
    });
  });

  /* ===== SCROLL REVEAL ANIMATION ===== */
  const srtop = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 1000,
      reset: true
  });

  /* SCROLL PROJECTS */
  srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
  showSkills(data);
});

fetchData("projects").then(data => {
  showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});
// <!-- tilt js effect ends -->


// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
  }
}



// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: true
});

/**
 * Skills Section Particle Animation
 * Creates dynamic floating particles in the skills section
 */
document.addEventListener('DOMContentLoaded', function() {
  const skillsSection = document.querySelector('.skills');
  if (!skillsSection) return;

  // Create particles container with higher z-index
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'skills-particles';
  particlesContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;  // Higher than section content
  `;
  skillsSection.prepend(particlesContainer);

  // Make skills section relative for proper positioning
  skillsSection.style.position = 'relative';

  // Enhanced particle creation
  function createParticles() {
    // Clear existing particles
    particlesContainer.innerHTML = '';

    // Create 40 particles (more than before)
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // More visible properties
      const size = Math.random() * 20 + 10; // Larger particles (10-30px)
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 20 + 20; // Longer duration
      const opacity = Math.random() * 0.6 + 0.4; // More opaque (0.4-1.0)
      const hue = 240 + Math.random() * 60; // Blue-purple range
      const saturation = 70 + Math.random() * 30; // More vibrant
      const lightness = 50 + Math.random() * 30;
      
      // Add occasional "sparkle" particles
      const isSparkle = Math.random() > 0.8;
      const sparkleClass = isSparkle ? 'sparkle' : '';

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        top: ${posY}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        opacity: ${opacity};
        background: hsla(${hue}, ${saturation}%, ${lightness}%, 0.7);
        border-radius: ${Math.random() > 0.3 ? '50%' : '10%'};
        box-shadow: ${isSparkle ? '0 0 15px 5px rgba(255,255,255,0.7)' : 'none'};
        z-index: 2;
      `;

      particlesContainer.appendChild(particle);
    }
  }

  // Add this CSS to your stylesheet
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.5;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }
    .particle {
      position: absolute;
      animation: float linear infinite;
      will-change: transform;
    }
    .sparkle {
      animation: float 8s linear infinite, pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.5); }
    }
  `;
  document.head.appendChild(style);

  createParticles();

  // Recreate on resize for responsiveness
  window.addEventListener('resize', function() {
    createParticles();
  });
});



/* ===== SCROLL REVEAL ANIMATION ===== */


/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .kaggle', { interval: 1000 });
srtop.reveal('.home .email', { interval: 1200 });


// Social Icons Animation Only
const srSocial = ScrollReveal({
  origin: 'bottom',
  distance: '20px',
  duration: 800,
  easing: 'ease-out',
  interval: 150  // Stagger effect between icons
});

// Reveal each social icon with a nice stagger effect
srSocial.reveal('.social-icons li', {
  opacity: 0,
  scale: 0.8,
  delay: 200,  // Initial delay before first icon appears
  afterReveal: function(el) {
    // Add hover effect class after reveal
    el.classList.add('animate__animated', 'animate__pulse');
  }
});

srSocial.reveal('.social-icons li', {
  opacity: 0,
  scale: 0.5,
  delay: 200,
  interval: 100,
  easing: 'cubic-bezier(0.47, 1.64, 0.41, 0.8)'
});


/* About Section Animations */
// Section heading
srtop.reveal('.about .heading', { 
  delay: 200,
  distance: '20px',
  origin: 'top'
});

// Profile image animation
srtop.reveal('.about .image', { 
  delay: 300,
  distance: '100px',
  origin: 'left',
  easing: 'ease-in-out'
});

// Stats box with fade animation
srtop.reveal('.about .stats-box', {
  delay: 500,
  opacity: 0,
  distance: '20px',
  origin: 'bottom',
  interval: 200, // Stagger animation for stat items
  easing: 'ease-in-out',
  afterReveal: function(el) {
    el.style.opacity = 1; // Ensure it stays visible after animation
  }
});

// Individual stat items (optional - if you want separate animations)
srtop.reveal('.about .stat-item', {
  delay: 600,
  opacity: 0,
  distance: '10px',
  interval: 100,
  origin: 'bottom',
  easing: 'ease-in-out'
});

// Content animations
srtop.reveal('.about .content h3', { 
  delay: 400,
  distance: '30px',
  origin: 'right'
});

srtop.reveal('.about .content .tag', {
  delay: 450,
  scale: 0.8,
  duration: 800
});

srtop.reveal('.about .content p', {
  delay: 500,
  distance: '20px',
  origin: 'bottom',
  easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

// Expertise section animations
srtop.reveal('.about .expertise-section h4', {
  delay: 600,
  distance: '20px',
  origin: 'left'
});

srtop.reveal('.about .expertise-list li', {
  delay: 650,
  distance: '10px',
  interval: 100, // Stagger animation for list items
  origin: 'right'
});

// Methodology animation
srtop.reveal('.about .methodology', {
  delay: 700,
  scale: 0.95,
  easing: 'ease-in-out'
});

// Button animations
srtop.reveal('.about .resumebtn', {
  delay: 800,
  distance: '30px',
  origin: 'bottom',
  interval: 150 // Stagger animation for buttons
})


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

// Education Section animations
srtop.reveal('.education .heading', { 
  delay: 200,
  distance: '20px'
});

srtop.reveal('.timeline-line', { 
  delay: 300,
  distance: '40px',
  origin: 'left'
});

// Animate each education container with staggered delay
srtop.reveal('.container.left', { 
  delay: 400,
  distance: '100px',
  origin: 'left',
  interval: 200  // Stagger animation between items
});

srtop.reveal('.container.right', { 
  delay: 400,
  distance: '100px',
  origin: 'right',
  interval: 200  // Stagger animation between items
});

// Animate the content inside each container
srtop.reveal('.content .tag', {
  delay: 600,
  distance: '20px'
});

srtop.reveal('.content h3', {
  delay: 650,
  distance: '20px'
});

srtop.reveal('.content p', {
  delay: 700,
  distance: '20px'
});

srtop.reveal('.education-details li', {
  delay: 750,
  distance: '10px',
  interval: 100  // Stagger list items
});

srtop.reveal('.morebtn', {
  delay: 800,
  distance: '30px',
  origin: 'bottom'
});

// Education Section animations end 

// Projects Section animations
srtop.reveal('.projects .heading', { 
  delay: 200,
  distance: '20px'
});

srtop.reveal('.projects .subheading', { 
  delay: 250,
  distance: '20px'
});

// Animate project grid with staggered delay
srtop.reveal('.project-grid', { 
  delay: 300,
  distance: '40px',
  origin: 'bottom'
});

// Animate each project card with staggered delay
srtop.reveal('.project-card', { 
  delay: 400,
  distance: '50px',
  origin: 'bottom',
  interval: 200  // Stagger animation between cards
});

// Animate the experience card separately
srtop.reveal('.experience-card', { 
  delay: 500,
  distance: '60px',
  origin: 'right'
});

// Animate the content inside each project card
srtop.reveal('.project-badge', {
  delay: 600,
  distance: '20px',
  interval: 100
});

srtop.reveal('.project-tag h3', {
  delay: 650,
  distance: '20px'
});

srtop.reveal('.project-stats', {
  delay: 700,
  distance: '20px'
});

srtop.reveal('.project-desc p', {
  delay: 750,
  distance: '20px'
});

srtop.reveal('.tech-stack li', {
  delay: 800,
  distance: '10px',
  interval: 100  // Stagger list items
});

srtop.reveal('.project-actions', {
  delay: 850,
  distance: '30px',
  origin: 'bottom'
});

// Animate experience card content
srtop.reveal('.experience-header', {
  delay: 600,
  distance: '30px'
});

srtop.reveal('.experience-item', {
  delay: 700,
  distance: '30px',
  interval: 200
});

srtop.reveal('.experience-highlights li', {
  delay: 800,
  distance: '15px',
  interval: 100
});

srtop.reveal('.experience-actions', {
  delay: 900,
  distance: '30px',
  origin: 'bottom'
});

// Animate view all button
srtop.reveal('.view-all', {
  delay: 1000,
  distance: '40px',
  origin: 'bottom'
});

// Projects Section animations end

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });




/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

