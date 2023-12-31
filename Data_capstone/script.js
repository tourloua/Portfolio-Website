// script.js
document.addEventListener('DOMContentLoaded', function () {
    const wordLabels = document.querySelectorAll('.word-list label');
    let clickedIndex = -1;
  
    wordLabels.forEach((label, index) => {
      label.addEventListener('click', function () {
        if (clickedIndex !== -1) {
          wordLabels.forEach((otherLabel, otherIndex) => {
            if (otherIndex > clickedIndex) {
              otherLabel.classList.remove('word-moved-down');
            }
          });
        }
  
        if (clickedIndex !== index) {
          wordLabels.forEach((otherLabel, otherIndex) => {
            if (otherIndex > index) {
              otherLabel.classList.add('word-moved-down');
            }
          });
          clickedIndex = index;
        } else {
          clickedIndex = -1;
        }
      });
    });
  });
  