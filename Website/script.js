document.addEventListener('DOMContentLoaded', function () {
    const projectTable = document.getElementById('projectTable');

    projectTable.addEventListener('click', function (event) {
        if (event.target.tagName === 'TD') {
            const projectName = event.target.innerText;
            switch (projectName) {
                case 'Google Data Analytics Capstone':
                    window.location.href = 'https://tourloua.github.io/alextourloukisdatacapstone/';
                    break;
                case 'ENGINEER 1P13 Final Project':
                    window.location.href = 'https://tourloua.github.io/1p13capstone/';
                    break;
                case 'Solar Tracker':
                    window.location.href = 'https://tourloua.github.io/Solar-Tracker/';
                    break;

            }
        }
    });
});
