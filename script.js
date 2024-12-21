document.getElementById('language-toggle').addEventListener('click', function () {
  const currentFlag = this.getAttribute('src');
  const basePath = window.location.origin + '/alex-beletskyi-cv/';

  if (currentFlag.includes('german_flag.png')) {
    // Switch to German
    this.setAttribute('src', basePath + 'images/flags/british_flag.png'); 
    this.setAttribute('title', 'Switch to English');
    window.location.href = basePath + 'index-de.html'; 
  } else {
    // Switch to English
    this.setAttribute('src', basePath + 'images/flags/german_flag.png'); 
    this.setAttribute('title', 'Switch to German');
    window.location.href = basePath + 'index.html'; 
  }
});

window.addEventListener('load', function () {
  const currentPage = window.location.pathname;
  const flagImg = document.getElementById('language-toggle');
  const basePath = window.location.origin + '/alex-beletskyi-cv/';

  if (currentPage.includes('index-de.html')) {
    flagImg.setAttribute('src', basePath + 'images/flags/british_flag.png');
    flagImg.setAttribute('title', 'Switch to English');
  } else {
    flagImg.setAttribute('src', basePath + 'images/flags/german_flag.png');
    flagImg.setAttribute('title', 'Switch to German');
  }
});
