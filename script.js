const projects = [{
        name: '01-background-color-flipper',
        path: 'javascript'
    },
    {
        name: '02-counter',
        path: 'javascript'
    },
    {
        name: '03-reviews',
        path: 'javascript'
    },
    {
        name: '04-modal',
        path: 'javascript'
    },
    {
        name: '05-random-quote-generator',
        path: 'javascript'
    },
    {
        name: '06-expanding-cards',
        path: 'javascript'
    },
    {
        name: '07-rotating-navigation',
        path: 'javascript'
    },
    {
        name: '08-progress-steps',
        path: 'javascript'
    },
    {
        name: '09-number-guessing',
        path: 'javascript'
    },
    {
        name: '10-sidebar',
        path: 'javascript'
    },
    {
        name: '11-questions',
        path: 'javascript'
    },
    {
        name: '12-menu',
        path: 'javascript'
    },
    {
        name: '13-form-validator',
        path: 'javascript'
    },
    {
        name: '14-grocery-list',
        path: 'javascript'
    },
    {
        name: '15-lorem-ipsum',
        path: 'javascript'
    },
    {
        name: '16-video',
        path: 'javascript'
    },
    {
        name: '17-guess-my-number-game',
        path: 'javascript'
    },
    {
        name: '18-dice-game',
        path: 'javascript'
    },
    {
        name: '19-tic-tac-toe-game',
        path: 'javascript'
    },
    {
        name: '20-countdown',
        path: 'javascript'
    },
    {
        name: '21-random-joke',
        path: 'javascript'
    },
    {
        name: '22-random-user',
        path: 'javascript'
    },
    {
        name: '01-four-card-feature-section',
        path: 'html-css'
    }

];

const list = document.getElementById('list');

projects.forEach(({
    name,
    path
}) => {
    const listItem = document.createElement('li');

    listItem.innerHTML = `
		<a href="./${path}-projects/${name}/index.html" target="_blank">
        <img src="./${path}-projects/${name}/img/${name}.jpg" alt="${name}">
        			<p>${formatProjectName(name)}</p>
		</a>	`;

    list.appendChild(listItem);
});

function formatProjectName(name) {
    return name
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}