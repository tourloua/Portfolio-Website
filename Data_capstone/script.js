// script.js
document.addEventListener('DOMContentLoaded', function () {
  const wordLabels = document.querySelectorAll('.word-list label');
  let clickedIndex = -1;

  const uniqueTexts = [
      'PROBLEM STATEMENT: Investigate how to convince casual cyclists in a bike share in Chicago to sign up for annual memberships.<br><br>The insights generated from this analysis can be used to guide the company, (known as Cyclistic) to allocate its resources in the most effective may possible to maximize the number of casual cyclists that sign up for annual memberships.<br><br>In this project, I have three (fictional) stakeholders. My first stakeholder is Lily Moreno, the director of marketing at Cyclistic and my manager. My other two stakeholders are the marketing analytics and the “notoriously detail-oriented” executive team at Cyclistic.',
      'Additional text for PREPARE',
      'Additional text for PROCESS',
      'Additional text for ANALYZE',
      'Additional text for SHARE',
      'Additional text for ACT'
  ];

  wordLabels.forEach((label, index) => {
      label.addEventListener('click', function () {
          const existingTextElements = document.querySelectorAll('.added-text');
          existingTextElements.forEach((element) => {
              element.remove();
          });

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

              const newTextElement = document.createElement('div');
              newTextElement.className = 'added-text';
              newTextElement.innerHTML = uniqueTexts[index];

              const nextLabel = wordLabels[index + 1] || null;
              if (nextLabel) {
                  nextLabel.parentNode.insertBefore(newTextElement, nextLabel);
              } else {
                  // If the last label is clicked, insert after the last label
                  label.parentNode.appendChild(newTextElement);
              }

              clickedIndex = index;
          } else {
              clickedIndex = -1;
          }
      });
  });
});

  