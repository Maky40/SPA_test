// Cibler les éléments nécessaires
const playButton = document.getElementById('play-button');
const mainContent = document.getElementById('main-content');
const dashContent = document.getElementById('dashboard-content');
const loginForm = document.getElementById('login-form');
const chatContent = document.getElementById('chat-content');
const chatButton = document.getElementById('chat-button');
const homeButton = document.getElementById('home-button');
const dashboardButton = document.getElementById('dashboard-button');
const connexionButton = document.getElementById('connexion-button');

// Variable globale pour connaitre la vue actuelle et gerer l'historique
let currentView = 'home';

// Fonction pour basculer entre les vues
function changeView(view) {
	if (view === 'home') {
		mainContent.style.display = 'flex';
		loginForm.style.display = 'none';
		chatContent.style.display = 'none';
		dashContent.style.display = 'none';
	} else if (view === 'login') {
		mainContent.style.display = 'none';
		loginForm.style.display = 'flex';
		chatContent.style.display = 'none';
		dashContent.style.display = 'none';
	} else if (view == 'chat') {
		mainContent.style.display = 'none';
		loginForm.style.display = 'none';
		chatContent.style.display = 'grid';
		dashContent.style.display = 'none';
	} else if (view == 'dashboard') {
		mainContent.style.display = 'none';
		loginForm.style.display = 'none';
		chatContent.style.display = 'none';
		dashContent.style.display = 'none';
	}
	currentView = view;
}

// Ajouter un événement au clic sur le bouton "PLAY"
playButton.addEventListener('click', () => {
	if (currentView !== 'login'){
		changeView('login');
		history.pushState({ view: 'login' }, '', '#login');}
});

connexionButton.addEventListener('click', () => {
	if (currentView !== 'login'){
		changeView('login');
		history.pushState({ view: 'login' }, '', '#login');}
});

// Ajouter un événement au clic sur le bouton "CHAT"
chatButton.addEventListener('click', () => {
	if (currentView !== 'chat'){
		changeView('chat');
		history.pushState({ view: 'chat' }, '', '#chat');}
})

homeButton.addEventListener('click', () => {
	if (currentView !== 'home'){
		changeView('home');
		history.pushState({ view: 'home' }, '', '#home');}
})

// Gérer les changements de l'historique
window.onpopstate = (event) => {
	const state = event.state;
	if (state && state.view)
		changeView(state.view);
	else
		changeView('home');
};

// Initialiser la vue en fonction de l'URL
window.addEventListener('load', () => {
	const hash = window.location.hash;
	if (hash === '#login')
		changeView('login');
	else if (hash === '#chat')
		changeView('chat');
	else
		changeView('home');

});
