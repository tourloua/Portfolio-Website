const backButton = document.getElementById('backButton');

if (backButton) {
  backButton.addEventListener('click', function () {
    window.location.href = 'https://twitter.com/';//change link to project main page
  });
}