const navbar = document.getElementById('navbar');

// Function to handle scroll event
function handleScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  // Add or remove the "active" class based on scroll position
  if (scrollPosition >= 30) {
    navbar.classList.add('navactive');
  } else {
    navbar.classList.remove('navactive');
  }
}
window.addEventListener('scroll', handleScroll);




function navtoggler() {
    console.log('clicked');
    var middleLinks = document.getElementById("middlelinks");
    var navLinkOverlay = document.getElementById("navlinkovalay");
  
    middleLinks.classList.toggle('navlinkactive');
    navLinkOverlay.classList.toggle('navlinkactiveovalay');
  
    // Remove class names if navlinkactiveoverlay is clicked
    navLinkOverlay.addEventListener('click', function() {
      middleLinks.classList.remove('navlinkactive');
      navLinkOverlay.classList.remove('navlinkactiveovalay');
    });
  
    // Remove class names if screen width is greater than 999px
    window.addEventListener('resize', function() {
      if (window.innerWidth > 999) {
        middleLinks.classList.remove('navlinkactive');
        navLinkOverlay.classList.remove('navlinkactiveovalay');
      }
    });
  }


  gsap.to(".imgs1", {
    y: -20,
    duration: 0.7,
    repeat: -1,
    yoyo: true,
    ease: "power1.out"
  }
  
  
  );
  
  gsap.to(".imgs2", {
    x: -20,
    duration: 0.9,
    repeat: -1,
    yoyo: true,
    ease: "power1.out"
  }
  
  
  );


  gsap.to(".imgs3", {
    y: -10,
    duration: 1.1,
    repeat: -1,
    yoyo: true,
    ease: "power1.out"
  }
  
  
  );
  
  const imageUrls2 = [
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/firefox.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/pure-maps.svg',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/signal.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/vlc.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/gmail.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/whatsapp.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/google-voice.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/textnow.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/telegram.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/discord.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/netflix.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/tiktok.webp',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/twitter.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/snapchat.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/instagram.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/polaris-office.png',
    'https://puri.sm/wp-content/themes/wp-purism/images/pick-your-app/icons/evernote.png',


    // Add more image URLs as needed
  ];
  // Function to create and append image elements to the accordion div
  function appendImagesToAccordionDivs() {
    const accordionDivs = document.getElementById('accordiondiv');
  
    // Loop through the imageUrls array
    for (const imageUrl of imageUrls2) {
      // Create a new image element
      const imgElement = document.createElement('img');
       imgElement.classList.add('logoimg');
  
      // Set the source attribute to the URL from the array
      imgElement.src = imageUrl;
  
      // Optionally, you can set other attributes and styles for the image element here
      // Example: imgElement.alt = 'Image description';
  
      // Append the image element to the accordion div
      accordionDivs.appendChild(imgElement);
    }
  }
  
  // Call the function to append images to the accordion div
  appendImagesToAccordionDivs();


// Original Array of image URLs
const imageUrls = [
    'media/new/intercom.png',
    'media/new/marvel.png',
    'media/new/shazam.png',
    'media/new/treehouse.png',
    'media/new/zapier.png',

    // Add more image URLs as needed
  ];
  
  // Function to duplicate an array a specified number of times
  function duplicateArray(arr, times) {
    const duplicatedArray = [];
    for (let i = 0; i < times; i++) {
      duplicatedArray.push(...arr);
    }
    return duplicatedArray;
  }
  
  // Function to create and append image elements to the accordion div
  function appendImagesToAccordionDiv() {
    const accordionDiv = document.getElementById('accordiondiv');
  
    // Duplicate the imageUrls array 50 times
    const duplicatedImageUrls = duplicateArray(imageUrls, 50);
  
    // Loop through the duplicatedImageUrls array
    for (const imageUrl of duplicatedImageUrls) {
      // Create a new image element
      const imgElement = document.createElement('img');
  
      // Set the source attribute to the URL from the array
      imgElement.src = imageUrl;
  
      // Optionally, you can set other attributes and styles for the image element here
      // Example: imgElement.alt = 'Image description';
  
      // Append the image element to the accordion div
      accordionDiv.appendChild(imgElement);
    }
  }
  
  // Call the function to append images to the accordion div
  appendImagesToAccordionDiv();





  const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);




const countUpDiv = document.querySelector(".count-up");
const countUpSection = document.querySelector(".count-up-section");

let countTarget = Number(countUpDiv.getAttribute("data-target"));
let countStart = 0;
let animationDuration = 10000; // 2 seconds

let startTime = null;

function countAnimation(currentTime) {
  if (!startTime) startTime = currentTime;
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / animationDuration, 1);
  const currentCount = Math.floor(progress * (countTarget - countStart) + countStart);
  countUpDiv.textContent = currentCount;

  if (progress < 1) {
    requestAnimationFrame(countAnimation);
  }
}

function startCountUpAnimation() {
  requestAnimationFrame(countAnimation);
}

function handleScroll() {
  const rect = countUpSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    startCountUpAnimation();
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);




// Get all the accordion labels
let items = document.querySelectorAll(".faq-main .faq-item .faq-label");

items.forEach(function (label) {
  label.addEventListener("click", function (event) {
    // Toggle the class "faq-item-show" on the clicked label
    label.classList.toggle("faq-item-show");

    // Loop through all the labels and remove the "faq-item-show" class from others if they have it
    items.forEach(function (otherLabel) {
      if (otherLabel !== label && otherLabel.classList.contains("faq-item-show")) {
        otherLabel.classList.remove("faq-item-show");
      }
    });

    // Slide down the content when the label is active
    const content = label.nextElementSibling;
    if (label.classList.contains("faq-item-show")) {
   
    } else {
    
    }
  });
});



AOS.init({
    duration: 1200,  // Animation duration in milliseconds
    offset: 120,  // Offset (in pixels) from the original trigger point
    easing: 'ease-in-out',  // Easing function for the animation
    delay: 100,  // Delay (in milliseconds) before the animation starts
    once: true,  // Whether the animation should only happen once
    anchorPlacement: 'center',  // Defines vertical anchor placement (top, center, bottom)
  });
