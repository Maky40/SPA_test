document.getElementById('load-articles').addEventListener('click', () => {
    fetch('http://127.0.0.1:8000/api/articles/')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '';
            data.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
                contentDiv.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Erreur :', error));
});
