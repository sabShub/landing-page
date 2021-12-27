/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const segments = Array.from(document.querySelectorAll('section'));
const navMenu = document.getElementById('navbar__list');
let noOfSegments = segments.length;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//this function creates the nav menu
function createMenuList() {
    for (segment of segments) {
        segmentName = segment.getAttribute('data-nav');
        segmentId = segment.getAttribute('id');

        // create an item for each of the segment
        itemList = document.createElement('li');

        // add text to the item
        itemList.innerHTML = ` <a class='menu__link' href='#${segmentId}'> ${segmentName}</a>`;

        // add item created to the navmenu array
        navMenu.appendChild(itemList);
    }
}

function segmentInView(element) {
    let segmentPosition = element.getBoundingClientRect();

    return (segmentPosition.top >= 0);
}

//highlights section when in viewport
function toggleActiveClass() {
    for (segment of segments) {
        
        
        if (segmentInView(segment)) {

            if(!segment.classList.contains('your-active-class')) {

                segment.classList.add('your-active-class');
            }
        } else {
            segment.classList.remove('your-active-class');
        }

    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

createMenuList();

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', toggleActiveClass);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


