document.addEventListener("DOMContentLoaded", function() {
    var cardBodies = document.querySelectorAll(".card-body");
    

    cardBodies.forEach(function(cardBody) {
        var cardTitle = cardBody.querySelector(".card-title");
        var sectionDivider = cardBody.querySelector(".section2divider");
        var cardText = cardBody.querySelector(".card-text");

        // Initially hide the card text
        cardText.style.display = "none";

        // Show card text on mouseover
        cardBody.addEventListener("mouseover", function() {
            cardTitle.style.position = "static";
            sectionDivider.style.position = "static";
            cardText.style.display = "block";
        });

        // Hide card text on mouseout
        cardBody.addEventListener("mouseout", function() {
            cardTitle.style.position = "absolute";
            sectionDivider.style.position = "absolute";
            cardText.style.display = "none";
        });
    });
});



// JavaScript
document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.Development-Methodologies-card1, .Development-Methodologies-card2, .Development-Methodologies-card3');
  
  cards.forEach(function (card) {
      card.addEventListener('mouseover', function () {
          // Change background color to white on hover
          this.style.backgroundColor = '#fff';

          // Rotate the image and change its color to green
          var dropdown = this.querySelector('.agiledropdown');
          // dropdown.classList.add('rotate', 'green');
          dropdown.style.background = 'linear-gradient(90deg, #23899C 13.04%, #2CA068 91.03%)'; // Change background to gradient
          
          // Show the hidden elements
          var innerPara = this.querySelector('.card1innerpara');
          var divider = this.querySelector('.card1divider');
          var moreAboutAgile = this.querySelector('.moreaboutagile');
          innerPara.style.display = 'block';
          divider.style.display = 'block';
          moreAboutAgile.style.display = 'block';
      });

      card.addEventListener('mouseout', function () {
          // Restore original background color
          this.style.backgroundColor = 'rgba(44, 160, 104, 0.7)';
          
          // Reset image rotation and color
          var dropdown = this.querySelector('.agiledropdown');
          // dropdown.classList.remove('rotate', 'green');
          dropdown.style.background = ''; // Reset background
          
          // Hide the elements again
          var innerPara = this.querySelector('.card1innerpara');
          var divider = this.querySelector('.card1divider');
          var moreAboutAgile = this.querySelector('.moreaboutagile');
          innerPara.style.display = 'none';
          divider.style.display = 'none';
          moreAboutAgile.style.display = 'none';
      });
  });
});

//section8=================
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtnbottom = document.getElementById('prevBtnbotton');
const nextBtnbottom = document.getElementById('nextBtnbottom');
const cards = document.querySelectorAll('.session11_card');
let currentIndex = 0;
let visibleCardCount = calculateVisibleCardCount();

function calculateVisibleCardCount() {
    // Determine the number of visible cards based on the screen size
    return window.innerWidth <= 768 ? 1 : 4;
}

function toggleButtonsState() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= cards.length - visibleCardCount;
    prevBtnbottom.disabled = currentIndex === 0;
    nextBtnbottom.disabled = currentIndex >= cards.length - visibleCardCount;
}

function showCurrentCards() {
    // Hide all cards and display only the ones within the visible range
    cards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + visibleCardCount) {
            card.classList.remove('hidden-card');
        } else {
            card.classList.add('hidden-card');
        }
    });
}

function updateUI() {
    visibleCardCount = calculateVisibleCardCount();
    toggleButtonsState();
    showCurrentCards();
}

// Initial setup
updateUI();

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateUI();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - visibleCardCount) {
        currentIndex++;
        updateUI();
    }
});

prevBtnbottom.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateUI();
    }
});

nextBtnbottom.addEventListener('click', () => {
    if (currentIndex < cards.length - visibleCardCount) {
        currentIndex++;
        updateUI();
    }
});

// Update UI on window resize
window.addEventListener('resize', updateUI);



  document.addEventListener("DOMContentLoaded", function() {
    const frontForm = document.querySelector('.webapp_section_10_testimonialfrontform');
    const backForm = document.querySelector('.webapp_section_10_testimonialbackform');
    const backForm3 = document.querySelector('.webapp_section_10_testimonialbackform3');
    const backForm4 = document.querySelector('.webapp_section_10_testimonialbackform4');
    const carousels = document.querySelectorAll('.webapp_section_10_testimonialcarosuel div');

    // Initially activate the first carousel item
    carousels[0].classList.add('active');

    // Click event listener for each carousel item
    carousels.forEach((carousel, index) => {
        carousel.addEventListener('click', function() {
            // Remove 'active' class from all carousel items
            carousels.forEach((c) => c.classList.remove('active'));
            
            // Add 'active' class to clicked carousel item
            carousel.classList.add('active');
            
            // Toggle visibility of front and back forms based on the index of clicked carousel item
            if (index === 0) {
                // If first carousel item is clicked, show front form and hide back forms
                frontForm.style.opacity = 1;
                backForm.style.opacity = 0;
                backForm3.style.opacity = 0;
                backForm4.style.opacity = 0;
            } else if (index === 1) {
                // If second carousel item is clicked, hide front form and show first back form
                frontForm.style.opacity = 0;
                backForm.style.opacity = 1;
                backForm3.style.opacity = 0;
                backForm4.style.opacity = 0;
            } else if (index === 2) {
                // If third carousel item is clicked, hide front form and show second back form
                frontForm.style.opacity = 0;
                backForm.style.opacity = 0;
                backForm3.style.opacity = 1;
                backForm4.style.opacity = 0;
            } else if (index === 3) {
                // If fourth carousel item is clicked, hide front form and show third back form
                frontForm.style.opacity = 0;
                backForm.style.opacity = 0;
                backForm3.style.opacity = 0;
                backForm4.style.opacity = 1;
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.webapp_section_11_casestudiescenter');

  function showSlide(n) {
    slides.forEach((slide, index) => {
      if (index === n) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  const nextBtn = document.getElementById('nextBtnicon1');
  const prevBtn = document.getElementById('prevBtnicon1');

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  showSlide(currentSlide);
});


document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.webapp_section_11_border');

  function showSlide(n) {
    slides.forEach((slide, index) => {
      if (index === n) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  const nextBtn = document.getElementById('nextBtnicon');
  const prevBtn = document.getElementById('prevBtnicon');

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  showSlide(currentSlide);
});



//section 3
document.addEventListener('DOMContentLoaded', function () {
  const secondCollayout = document.querySelector('.Our-Developers-secondcollayout');

  secondCollayout.addEventListener('mouseenter', function () {
      document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'36\' height=\'36\'><circle cx=\'18\' cy=\'18\' r=\'18\' fill=\'rgba(44, 160, 104, 0.72)\'/></svg>") 18 18, auto';
  });

  secondCollayout.addEventListener('mouseleave', function () {
      document.body.style.cursor = 'auto';
  });
});






  // document.addEventListener('DOMContentLoaded', function() {
  //   const caseStudiesCenters = document.querySelectorAll('.webapp_section_11_casestudiescenter');
  //   const caseLeftButton = document.querySelector('.webapp_section_11_caseleftbutton');
  //   const caseRightButton = document.querySelector('.webapp_section_11_caserightbutton');
  //   let currentIndex = 0;
  
  //   function updateButtonState() {
  //       if (currentIndex === 0) {
  //           caseLeftButton.classList.add('disabled');
  //       } else {
  //           caseLeftButton.classList.remove('disabled');
  //       }
  
  //       if (currentIndex === caseStudiesCenters.length - 1) {
  //           caseRightButton.classList.add('disabled');
  //       } else {
  //           caseRightButton.classList.remove('disabled');
  //       }
  //   }
  
  //   updateButtonState();
  
  //   caseRightButton.addEventListener('click', function() {
  //       currentIndex++;
  //       caseStudiesCenters[currentIndex - 1].style.display = 'none';
  //       caseStudiesCenters[currentIndex].style.display = 'block';
  //       updateButtonState();
  
  //       if (currentIndex === caseStudiesCenters.length - 1) {
  //           caseRightButton.classList.add('disabled');
  //       }
  //   });
  
  //   caseLeftButton.addEventListener('click', function() {
  //       currentIndex--;
  //       caseStudiesCenters[currentIndex + 1].style.display = 'none';
  //       caseStudiesCenters[currentIndex].style.display = 'block';
  //       updateButtonState();
  
  //       if (currentIndex === 0) {
  //           caseLeftButton.classList.add('disabled');
  //       }
  //   });
  // });



  document.addEventListener("DOMContentLoaded", function () {
    // Get all footer columns
    var footerColumns = document.querySelectorAll('.footer-column');
    var currentOpenMenu = null;
  
    // Loop through each footer column
    footerColumns.forEach(function (column) {
        // Find the h3 element
        var h3 = column.querySelector('h3');
  
        // Find the ul element
        var menu = column.querySelector('ul');
  
        // Add click event listener to the icon
        h3.addEventListener('click', function () {
            // If there's an open menu and it's not the current one, close it
            if (currentOpenMenu && currentOpenMenu !== menu) {
                currentOpenMenu.classList.remove('active');
                currentOpenMenu.previousElementSibling.querySelector('i').classList.add('bi-chevron-down');
                currentOpenMenu.previousElementSibling.querySelector('i').classList.remove('bi-chevron-up');
            }
  
            // Toggle the active class on the menu when the icon is clicked
            menu.classList.toggle('active');
  
            // Toggle the icon between chevron-down and chevron-up
            h3.querySelector('i').classList.toggle('bi-chevron-down');
            h3.querySelector('i').classList.toggle('bi-chevron-up');
  
            // Update the current open menu
            currentOpenMenu = menu.classList.contains('active') ? menu : null;
        });
    });
  });



// script.js
// script.js
document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  let currentOpenAccordion = null;
  
  accordionHeaders.forEach(header => {
      header.addEventListener('click', function () {
          const accordionItem = this.parentElement;
          const accordionContent = accordionItem.querySelector('.accordion-content');
          const accordionToggle = accordionItem.querySelector('.accordion-toggle').querySelector('.arrow');
  
          // If there's an open accordion and it's not the current one, close it
          if (currentOpenAccordion && currentOpenAccordion !== accordionItem) {
              const openContent = currentOpenAccordion.querySelector('.accordion-content');
              const openToggle = currentOpenAccordion.querySelector('.accordion-toggle .arrow');
  
              openContent.style.display = 'none';
              openToggle.classList.remove('up');
              openToggle.classList.add('down');
  
              // Remove active class and reset styles for the previously open accordion header
              currentOpenAccordion.querySelector('.accordion-header').classList.remove('active');
              openToggle.classList.remove('white');
              currentOpenAccordion.querySelector('.accordion-header').classList.remove('white');
          }
  
          // Toggle the current accordion content and arrow
          if (accordionContent.style.display === 'block') {
              accordionContent.style.display = 'none';
              accordionToggle.classList.remove('up');
              accordionToggle.classList.add('down');
              this.classList.remove('active');
              accordionToggle.classList.remove('white');
              this.classList.remove('white');
  
              currentOpenAccordion = null;
          } else {
              accordionContent.style.display = 'block';
              accordionToggle.classList.remove('down');
              accordionToggle.classList.add('up');
              this.classList.add('active');
              accordionToggle.classList.add('white');
              this.classList.add('white');
  
              currentOpenAccordion = accordionItem;
          }
      });
  });
  });
