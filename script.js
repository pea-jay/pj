// script.js
// Blog posts data - add your posts here
const blogPosts = [
    {
        title: "Important",
        url: "important.html",
        excerpt: "I must feel important. I must tell myself a narrative at all times. I must weave meaning into everything that happens to and from me. I am not living my life on autopilot, no sir. That, is banal, bizarre and suboptimal..."
    },
    // Example post structure:
    // {
    //     title: "Post Title", // Optional - omit for no title
    //     url: "https://example.com/post", // Required for clickable posts
    //     date: "January 2025", // Optional
    //     excerpt: "Brief description of the post..." // Optional
    // },
    // Add more posts as needed
];

// Function to render blog posts
function renderBlogPosts() {
    const postsContainer = document.getElementById("blog-posts");
    
    if (!postsContainer) return;
    
    if (blogPosts.length === 0) {
        postsContainer.innerHTML = `
            <div class="no-posts">
                <p>No posts yet. Check back soon for updates!</p>
            </div>
        `;
        return;
    }
    
    postsContainer.innerHTML = blogPosts.map(post => {
        const content = `
            ${post.title ? `<h3 class="post-title">${post.title}</h3>` : ''}
            ${post.date ? `<span class="post-date">${post.date}</span>` : ''}
            ${post.excerpt ? `<p class="post-excerpt">${post.excerpt}</p>` : ''}
        `;
        
        if (post.url && post.url.trim() !== '') {
            return `
                <article class="blog-post-item">
                    <a href="${post.url}" class="blog-post-link">
                        ${content}
                    </a>
                </article>
            `;
        } else {
            return `
                <article class="blog-post-item">
                    <div class="blog-post-link">
                        ${content}
                    </div>
                </article>
            `;
        }
    }).join('');
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    renderBlogPosts();
});