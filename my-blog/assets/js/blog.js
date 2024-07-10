document.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blogPosts');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p><em>By ${post.username}</em></p>
        `;
        blogPostsContainer.appendChild(postElement);
    });

    document.getElementById('toggleMode').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});