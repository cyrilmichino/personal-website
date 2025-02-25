function toggleMenu() {
    // Access the the navigation bar and content overlay elements
    var navbar = document.getElementById("main-menu");
    var overlay = document.getElementById("overlay");
    // Hide or show the Navigation bar and content overlay when function called
    navbar.classList.toggle("hide-mobile");
    overlay.classList.toggle("hide-mobile");
}

// Define the blog posts to be displayed on the website (Featured blogs will have featured = 1)
let blogs = [{featured: 1, image: "public/founderalgorithm.webp", title: "The Founder's Algorithm – 7 Lessons I Wish I Learned Sooner",
    description: "From costly mistakes to proven strategies: A founder shares 7 fundamental rules for building successful startups, distilled from 5+ years of hands-on experience",
    url: "https://michino.substack.com/p/the-founders-algorithm-7-rules-i", date: "Feb 14, 2025", posted: 'Substack'},
    {featured: 1, image: "public/aieducation.webp", title: "AI in Education: How Zindua School is Transforming Learning with AI",
    description: "We're integrating AI-powered tutors, automated project feedback, and adaptive learning at Zindua. Explore our strategic approach to AI...",
    url: "https://zinduaschool.com/ai-in-education/", date: "Feb 24, 2025", posted: 'Zindua School'},
    {featured: 1, image: "public/founderalgorithm.webp", title: "The Founder's Algorithm – 7 Lessons I Wish I Learned Sooner",
    description: "From costly mistakes to proven strategies: A founder shares 7 fundamental rules for building successful startups, distilled from 5+ years of hands-on experience",
    url: "https://michino.substack.com/p/the-founders-algorithm-7-rules-i", date: "Feb 14, 2025", posted: 'Substack'},
    {featured: 0, image: "public/founderalgorithm.webp", title: "The Founder's Algorithm – 7 Lessons I Wish I Learned Sooner",
    description: "From costly mistakes to proven strategies: A founder shares 7 fundamental rules for building successful startups, distilled from 5+ years of hands-on experience",
    url: "https://michino.substack.com/p/the-founders-algorithm-7-rules-i", date: "Feb 14, 2025", posted: 'Substack'},
    {featured: 0, image: "public/founderalgorithm.webp", title: "The Founder's Algorithm – 7 Lessons I Wish I Learned Sooner",
    description: "From costly mistakes to proven strategies: A founder shares 7 fundamental rules for building successful startups, distilled from 5+ years of hands-on experience",
    url: "https://michino.substack.com/p/the-founders-algorithm-7-rules-i", date: "Feb 14, 2025", posted: 'Substack'}];

// Display blogs on the homepage and blog page (Categorised based on if featured)
const featuredBlogs = document.getElementById('featured-blogs')

let featuredBlogContent = ""
for (i=0; i<blogs.length; i++) {
    if (blogs[i].featured == 1) {
        featuredBlogContent += `<a href=${blogs[i].url} class="full-height"><div class="card blog-card full-height">
            <img src=${blogs[i].image} alt="Blog Banner">
            <div class="blog-card-content">
              <h3>${blogs[i].title}</h3>
              <p>${blogs[i].description}</p>
              <p class="text-light">Posted on ${blogs[i].posted} • ${blogs[i].date}</p>
            </div>
          </div></a>`
    }
}
featuredBlogs.innerHTML = featuredBlogContent

// Create typed animation on blog header page
var typed = new Typed('#toggle-text', {
    strings: ['a Data Scientist', 'an Entrepreneur','a Data Consultant'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });