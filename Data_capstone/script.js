document.addEventListener('DOMContentLoaded', function () {
  const wordLabels = document.querySelectorAll('.word-list label');
  let clickedIndex = -1;

  const askText = 'ASK Text';

  const prepareTexts = [
    'PREPARE Text 1',
    'PREPARE Text 2',
    'PREPARE Text 3',
  ];

  const prepareImages = [
    'https://i.imgur.com/prepare-image1.jpg',
    'https://i.imgur.com/prepare-image2.jpg',
    'https://i.imgur.com/prepare-image3.jpg',
  ];

  const processTexts = [
    'PROCESS Text 1',
    'PROCESS Text 2',
    'PROCESS Text 3',
    'PROCESS Text 4',
  ];

  const processImages = [
    'https://i.imgur.com/process-image1.jpg',
    'https://i.imgur.com/process-image2.jpg',
    'https://i.imgur.com/process-image3.jpg',
  ];

  const analyzeTexts = [
    'Text 1',
    'Text 2',
    'Text 3',
    'Text 4',
    'Text 5',
    'Text 6',
    'Text 7',
  ];

  const analyzeImages = [
    'https://i.imgur.com/image1.jpg',
    'https://i.imgur.com/image2.jpg',
    'https://i.imgur.com/image3.jpg',
    'https://i.imgur.com/image4.jpg',
    'https://i.imgur.com/image5.jpg',
    'https://i.imgur.com/image6.jpg',
    'https://i.imgur.com/image7.jpg',
  ];
  const shareTexts = [
    'SHARE Text 1',
    'SHARE Text 2',

  ];

  const shareImages = [
    'https://i.imgur.com/share-image1.jpg',

  ];
  const actTexts = [
    'ACT Text 1',
  ];
  
  const backButton = document.getElementById('backButton');

  if (backButton) {
    backButton.addEventListener('click', function () {
      window.location.href = 'https://twitter.com/';//change link to project main page
    });
  }

  wordLabels.forEach((label, index) => {
    label.addEventListener('click', function () {
      removeExistingTextAndImages();

      if (clickedIndex !== -1) {
        wordLabels.forEach((otherLabel, otherIndex) => {
          if (otherIndex > clickedIndex) {
            otherLabel.classList.remove('word-moved-down', 'ask-moved-down');
          }
        });
      }

      if (clickedIndex !== index) {
        wordLabels.forEach((otherLabel, otherIndex) => {
          if (otherIndex > index) {
            otherLabel.classList.add('word-moved-down');
            if (index === 0) {
              otherLabel.classList.add('ask-moved-down');
            }
          }
        });

        const newTextElement = document.createElement('div');
        newTextElement.className = 'added-text';

        if (index === 0) {
          newTextElement.innerHTML = askText;
        } else if (index === 1) {
          newTextElement.innerHTML = prepareTexts[0];

          // Add image 1
          const newImageElement1 = document.createElement('div');
          newImageElement1.className = 'added-image';
          newImageElement1.innerHTML = `<img src="${prepareImages[0]}" alt="Prepare Image 1">`;
          newTextElement.appendChild(newImageElement1);

          // Add text 2
          const newTextAfterImage1 = document.createElement('div');
          newTextAfterImage1.className = 'added-text';
          newTextAfterImage1.innerHTML = prepareTexts[1];
          newTextElement.appendChild(newTextAfterImage1);

          // Add image 2
          const newImageElement2 = document.createElement('div');
          newImageElement2.className = 'added-image';
          newImageElement2.innerHTML = `<img src="${prepareImages[1]}" alt="Prepare Image 2">`;
          newTextElement.appendChild(newImageElement2);

          // Add text 3
          const newTextAfterImage2 = document.createElement('div');
          newTextAfterImage2.className = 'added-text';
          newTextAfterImage2.innerHTML = prepareTexts[2];
          newTextElement.appendChild(newTextAfterImage2);

        } else if (index === 2) {
          newTextElement.innerHTML = processTexts[0];

          // Add image 1
          const newImageElement1 = document.createElement('div');
          newImageElement1.className = 'added-image';
          newImageElement1.innerHTML = `<img src="${processImages[0]}" alt="Process Image 1">`;
          newTextElement.appendChild(newImageElement1);

          // Add text 2
          const newTextAfterImage1 = document.createElement('div');
          newTextAfterImage1.className = 'added-text';
          newTextAfterImage1.innerHTML = processTexts[1];
          newTextElement.appendChild(newTextAfterImage1);

          // Add image 2
          const newImageElement2 = document.createElement('div');
          newImageElement2.className = 'added-image';
          newImageElement2.innerHTML = `<img src="${processImages[1]}" alt="Process Image 2">`;
          newTextElement.appendChild(newImageElement2);

          // Add text 3
          const newTextAfterImage2 = document.createElement('div');
          newTextAfterImage2.className = 'added-text';
          newTextAfterImage2.innerHTML = processTexts[2];
          newTextElement.appendChild(newTextAfterImage2);

          // Add image 3
          const newImageElement3 = document.createElement('div');
          newImageElement3.className = 'added-image';
          newImageElement3.innerHTML = `<img src="${processImages[2]}" alt="Process Image 3">`;
          newTextElement.appendChild(newImageElement3);

          // Add text 4
          const newTextAfterImage3 = document.createElement('div');
          newTextAfterImage3.className = 'added-text';
          newTextAfterImage3.innerHTML = processTexts[3];
          newTextElement.appendChild(newTextAfterImage3);
        } else if (index === 3) {
          // Change the condition to index === 3
          analyzeImages.forEach((imageUrl, i) => {
            // Add text
            const newTextBeforeImage = document.createElement('div');
            newTextBeforeImage.className = 'added-text';
            newTextBeforeImage.innerHTML = analyzeTexts[i];
            newTextElement.appendChild(newTextBeforeImage);

            // Add image
            const newImageElement = document.createElement('div');
            newImageElement.className = 'added-image';
            newImageElement.innerHTML = `<img src="${imageUrl}" alt="Analyze Image ${i + 1}">`;
            newTextElement.appendChild(newImageElement);

          });

          // Additional Image after image 7
          const newAdditionalImageElement = document.createElement('div');
          newAdditionalImageElement.className = 'added-image';
          newAdditionalImageElement.innerHTML = `<img src="URL_OF_YOUR_ADDITIONAL_IMAGE" alt=" Image 8">`;
          newTextElement.appendChild(newAdditionalImageElement);

          // Additional Text after image 7
          const newTextAfterAdditionalImage = document.createElement('div');
          newTextAfterAdditionalImage.className = 'added-text';
          newTextAfterAdditionalImage.innerHTML = 'Text 8';
          newTextElement.appendChild(newTextAfterAdditionalImage);

          // Additional Image after image 8
          const newAdditionalImageElement2 = document.createElement('div');
          newAdditionalImageElement2.className = 'added-image';
          newAdditionalImageElement2.innerHTML = `<img src="URL_OF_YOUR_ADDITIONAL_IMAGE" alt=" Image 9">`;
          newTextElement.appendChild(newAdditionalImageElement2);

          // Additional Text after image 8
          const newTextAfterAdditionalImage2 = document.createElement('div');
          newTextAfterAdditionalImage2.className = 'added-text';
          newTextAfterAdditionalImage2.innerHTML = 'Text 9';
          newTextElement.appendChild(newTextAfterAdditionalImage2);

          // Additional Image after image 9
          const newAdditionalImageElement3 = document.createElement('div');
          newAdditionalImageElement3.className = 'added-image';
          newAdditionalImageElement3.innerHTML = `<img src="URL_OF_YOUR_ADDITIONAL_IMAGE" alt=" Image 10">`;
          newTextElement.appendChild(newAdditionalImageElement3);

          // Additional Text after image 9
          const newTextAfterAdditionalImage3 = document.createElement('div');
          newTextAfterAdditionalImage3.className = 'added-text';
          newTextAfterAdditionalImage3.innerHTML = 'Text 10';
          newTextElement.appendChild(newTextAfterAdditionalImage3);

          // Additional Image after image 10
          const newAdditionalImageElement4 = document.createElement('div');
          newAdditionalImageElement4.className = 'added-image';
          newAdditionalImageElement4.innerHTML = `<img src="URL_OF_YOUR_ADDITIONAL_IMAGE" alt=" Image 11">`;
          newTextElement.appendChild(newAdditionalImageElement4);

          // Additional Text after image 10
          const newTextAfterAdditionalImage4 = document.createElement('div');
          newTextAfterAdditionalImage4.className = 'added-text';
          newTextAfterAdditionalImage4.innerHTML = 'Text 11';
          newTextElement.appendChild(newTextAfterAdditionalImage4);

          // Additional Image after image 11
          const newAdditionalImageElement5 = document.createElement('div');
          newAdditionalImageElement5.className = 'added-image';
          newAdditionalImageElement5.innerHTML = `<img src="URL_OF_YOUR_ADDITIONAL_IMAGE" alt=" Image 12">`;
          newTextElement.appendChild(newAdditionalImageElement5);

          // Additional Text after image 11
          const newTextAfterAdditionalImage5 = document.createElement('div');
          newTextAfterAdditionalImage5.className = 'added-text';
          newTextAfterAdditionalImage5.innerHTML = 'Text 12';
          newTextElement.appendChild(newTextAfterAdditionalImage5);

          // Additional Image after image 12
          const newAdditionalImageElement6 = document.createElement('div');
          newAdditionalImageElement6.className = 'added-image';
          newAdditionalImageElement6.innerHTML = `<img src="URL_OF_YOUR_ADDITIONAL_IMAGE" alt=" Image 13">`;
          newTextElement.appendChild(newAdditionalImageElement6);

          // Additional Text after image 12
          const newTextAfterAdditionalImage7 = document.createElement('div');
          newTextAfterAdditionalImage7.className = 'added-text';
          newTextAfterAdditionalImage7.innerHTML = 'Text 13';
          newTextElement.appendChild(newTextAfterAdditionalImage7);

          // Additional Image after image 13
          const newAdditionalImageElement7 = document.createElement('div');
          newAdditionalImageElement7.className = 'added-image';
          newAdditionalImageElement7.innerHTML = `<img src="URL_OF_YOUR_ADDITIONAL_IMAGE" alt=" Image 14">`;
          newTextElement.appendChild(newAdditionalImageElement7);

          // Additional Text after image 13
          const newTextAfterAdditionalImage8 = document.createElement('div');
          newTextAfterAdditionalImage8.className = 'added-text';
          newTextAfterAdditionalImage8.innerHTML = 'Text 14';
          newTextElement.appendChild(newTextAfterAdditionalImage8);

          // Additional Image after image 14
          const newAdditionalImageElement9 = document.createElement('div');
          newAdditionalImageElement9.className = 'added-image';
          newAdditionalImageElement9.innerHTML = `<img src="URL_OF_YOUR_ADDITIONAL_IMAGE" alt=" Image 15">`;
          newTextElement.appendChild(newAdditionalImageElement9);

          // Additional Text after image 14
          const newTextAfterAdditionalImage10 = document.createElement('div');
          newTextAfterAdditionalImage10.className = 'added-text';
          newTextAfterAdditionalImage10.innerHTML = 'Text 15';
          newTextElement.appendChild(newTextAfterAdditionalImage10);

          // Additional Image after image 15
          const newAdditionalImageElement10 = document.createElement('div');
          newAdditionalImageElement10.className = 'added-image';
          newAdditionalImageElement10.innerHTML = `<img src="URL_OF_YOUR_ADDITIONAL_IMAGE" alt=" Image 16">`;
          newTextElement.appendChild(newAdditionalImageElement10);

          // Additional Text after image 15
          const newTextAfterAdditionalImage11 = document.createElement('div');
          newTextAfterAdditionalImage11.className = 'added-text';
          newTextAfterAdditionalImage11.innerHTML = 'Text 16';
          newTextElement.appendChild(newTextAfterAdditionalImage11);

          // Additional Image after image 16
          const newAdditionalImageElement11 = document.createElement('div');
          newAdditionalImageElement11.className = 'added-image';
          newAdditionalImageElement11.innerHTML = `<img src="URL_OF_YOUR_ADDITIONAL_IMAGE" alt=" Image 17">`;
          newTextElement.appendChild(newAdditionalImageElement11);

          // Additional Text after image 16
          const newTextAfterAdditionalImage12 = document.createElement('div');
          newTextAfterAdditionalImage12.className = 'added-text';
          newTextAfterAdditionalImage12.innerHTML = 'Text 17';
          newTextElement.appendChild(newTextAfterAdditionalImage12);

          // Continue this pattern for additional images and texts
          // ...

        }else if (index === 4) {
          // Change the condition to index === 4
          shareImages.forEach((imageUrl, i) => {
            // Add text
            const newTextBeforeImage = document.createElement('div');
            newTextBeforeImage.className = 'added-text';
            newTextBeforeImage.innerHTML = shareTexts[i];
            newTextElement.appendChild(newTextBeforeImage);

            // Add image
            const newImageElement = document.createElement('div');
            newImageElement.className = 'added-image';
            newImageElement.innerHTML = `<img src="${imageUrl}" alt="Share Image ${i + 1}">`;
            newTextElement.appendChild(newImageElement);

            const newTextAfterImage = document.createElement('div');
            newTextAfterImage.className = 'added-text';
            newTextAfterImage.innerHTML = shareTexts[i+1];
            newTextElement.appendChild(newTextAfterImage);
          });
        }else if (index === 5) { // Assuming "act" is at index 5
          newTextElement.innerHTML = actTexts[0];
        };
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

  function removeExistingTextAndImages() {
    const existingTextElements = document.querySelectorAll('.added-text, .added-image');
    existingTextElements.forEach((element) => {
      element.remove();
    });
  }
});