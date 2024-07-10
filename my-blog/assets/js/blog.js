// blog.js

document.addEventListener('DOMContentLoaded', function() {
    // Get blog posts from local storage
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    // Get the blog posts container
    const blogPostsContainer = document.getElementById('blogPosts');
    
    // Display each blog post
    blogPosts.forEach(function(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        
        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;
        postElement.appendChild(postTitle);
        
        const postAuthor = document.createElement('p');
        postAuthor.textContent = `By: ${post.username}`;
        postElement.appendChild(postAuthor);
        
        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        postElement.appendChild(postContent);
        
        blogPostsContainer.appendChild(postElement);
    });
});
