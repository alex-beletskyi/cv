document.getElementById('language-toggle').addEventListener('click', function () {
  console.log('Flag toggled');
  const currentFlag = this.getAttribute('src');
  console.log('Current flag:', currentFlag);
  const basePath = ''; // Используем относительные пути

  if (currentFlag.includes('german_flag.png')) {
    console.log('Switching to English...');
    this.setAttribute('src', basePath + 'images/flags/british_flag.png');
    this.setAttribute('title', 'Switch to English');
    window.location.href = basePath + 'index-de.html';
  } else {
    console.log('Switching to German...');
    this.setAttribute('src', basePath + 'images/flags/german_flag.png');
    this.setAttribute('title', 'Switch to German');
    window.location.href = basePath + 'index.html';
  }
});

window.addEventListener('load', function () {
  console.log('Page loaded');
  const currentPage = window.location.pathname;
  const flagImg = document.getElementById('language-toggle');
  const basePath = ''; // Используем относительные пути

  if (!flagImg) {
    console.error('Element with id \"language-toggle\" not found');
    return;
  }

  if (currentPage.includes('index-de.html')) {
    console.log('Setting flag to British');
    flagImg.setAttribute('src', basePath + 'images/flags/british_flag.png');
    flagImg.setAttribute('title', 'Switch to English');
  } else {
    console.log('Setting flag to German');
    flagImg.setAttribute('src', basePath + 'images/flags/german_flag.png');
    flagImg.setAttribute('title', 'Switch to German');
  }
});
