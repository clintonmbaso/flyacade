// Utility functions for the Learning Hub

/**
 * Format a string to title case
 * @param {string} str - The string to format
 * @returns {string} The title-cased string
 */
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

/**
 * Debounce function to limit how often a function is called
 * @param {function} func - The function to debounce
 * @param {number} wait - Time to wait in milliseconds
 * @returns {function} The debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

/**
 * Check if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} True if the element is in the viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Simple animation to scroll to an element smoothly
 * @param {HTMLElement} element - The element to scroll to
 * @param {number} duration - Duration of the scroll in milliseconds
 */
function scrollToElement(element, duration = 500) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

/**
 * Create a DOM element with attributes and children
 * @param {string} tag - The HTML tag name
 * @param {object} attributes - Object of attributes to set
 * @param {array} children - Array of child elements or text
 * @returns {HTMLElement} The created element
 */
function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
    
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    
    return element;
}

/**
 * Format a date string for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date (e.g., "Jan 1, 2023")
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

/**
 * Generate a unique ID
 * @returns {string} A unique ID
 */
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

export {
    toTitleCase,
    debounce,
    isInViewport,
    scrollToElement,
    createElement,
    formatDate,
    generateId
};