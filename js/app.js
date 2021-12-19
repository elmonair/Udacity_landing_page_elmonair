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

// Define Global Variables

const navBarList = document.getElementById('navbar__list'),
  sectionsArray = Array.from(document.getElementsByTagName('section'));

//building navigation bar using  for of loop and create links to navigation and scroll   to sections
const createNavList = () => {
  for (const section of sectionsArray) {
    const listItem = `<li><a href='#${section.id}' data-nav='${section.id}' class='menu__link'>${section.dataset.nav}</a></li>`;
    navBarList.insertAdjacentHTML('beforeend', listItem);
  }
};

createNavList();

// set section active when scroll  using  getBoundingClientRect and set active navbar link
window.addEventListener('scroll', () => {
  sectionsArray.forEach(function (active) {
    let navBarItem = navBarList.querySelector(`[data-nav=${active.id}]`);
    let topLocation = active.getBoundingClientRect().top;
    if (topLocation >= -100 && topLocation <= 300) {
      active.classList.add('your-active-class');
      navBarItem.classList.add('active-bar');
    } else {
      active.classList.remove('your-active-class');
      navBarItem.classList.remove('active-bar');
    }
  });
});
