document.getElementById('language-toggle').addEventListener('click', function () {
  const currentFlag = this.getAttribute('src');
  const currentPage = window.location.pathname; // Get the current page path

  if (currentFlag === 'images/flags/german_flag.png') {
    // Switch to German page (index-de.html)
    this.setAttribute('src', 'images/flags/british_flag.png'); // Change to British flag
    this.setAttribute('title', 'Switch to English');
    window.location.href = currentPage.replace('index.html', 'index-de.html'); // Redirect to the German page
  } else {
    // Switch to English page (index.html)
    this.setAttribute('src', 'images/flags/german_flag.png'); // Change to German flag
    this.setAttribute('title', 'Switch to German');
    window.location.href = currentPage.replace('index-de.html', 'index.html'); // Redirect to the English page
  }
});
window.addEventListener('load', function () {
  const currentPage = window.location.pathname;
  const flagImg = document.getElementById('language-toggle');

  if (currentPage.includes('index-de.html')) {
    // If we are on the German page, show the English flag
    flagImg.setAttribute('src', 'images/flags/british_flag.png');
    flagImg.setAttribute('title', 'Switch to English');
  } else {
    // If we are on the English page, show the German flag
    flagImg.setAttribute('src', './images/flags/german_flag.png');
    flagImg.setAttribute('title', 'Switch to German');
  }
});
