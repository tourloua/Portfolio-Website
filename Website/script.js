document.addEventListener('DOMContentLoaded', function () {
    const projectTable = document.getElementById('projectTable');

    projectTable.addEventListener('click', function (event) {
        if (event.target.tagName === 'TD') {
            const projectName = event.target.innerText;
            switch (projectName) {
                case 'Google Data Analytics Capstone Project':
                    window.location.href = 'https://www.google.com/';//change this to capstone website
                    break;
                case 'ENGINEER 1P13 Final Project':
                    window.location.href = 'https://www.youtube.com/';//change this to 1p13 final website
                    break;
            }
        }
    });
});