// form.js

document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form data
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    // Create a blog post object
    const blogPost = {
        username: username,
        title: title,
        content: content
    };
    
    // Save blog post to local storage
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    
    // Redirect to blog.html
    window.location.href = 'blog.html';
});
