function toggleMenu() {
    // Access the the navigation bar and content overlay elements
    var navbar = document.getElementById("main-menu");
    var overlay = document.getElementById("overlay");
    // Hide or show the Navigation bar and content overlay when function called
    navbar.classList.toggle("hide-mobile");
    overlay.classList.toggle("hide-mobile");
}

/* Display blogs on the homepage and blog page (Blog Sections) */

// Define the blog posts to be displayed on the website
let blogs = [{featured: 1, image: "public/founderalgorithm.webp", title: "The Founder's Algorithm – 7 Lessons I Wish I Learned Sooner", categories: ['Startup Ops'],
    description: "From costly mistakes to proven strategies: A founder shares 7 fundamental rules for building successful startups, distilled from 5+ years of hands-on experience",
    url: "https://michino.substack.com/p/the-founders-algorithm-7-rules-i", date: "Feb 14, 2025", posted: 'Substack'},
    {featured: 1, image: "public/aieducation.webp", title: "AI in Education: How Zindua School is Transforming Learning with AI", categories: ['Data Science', 'AI'],
    description: "We're integrating AI-powered tutors, automated project feedback, and adaptive learning at Zindua. Explore our strategic approach to AI...",
    url: "https://zinduaschool.com/ai-in-education/", date: "Feb 24, 2025", posted: 'Zindua School'},
    {featured: 1, image: "public/founderalgorithm.webp", title: "The Founder's Algorithm – 7 Lessons I Wish I Learned Sooner", categories: ['Startup Ops'],
    description: "From costly mistakes to proven strategies: A founder shares 7 fundamental rules for building successful startups, distilled from 5+ years of hands-on experience",
    url: "https://michino.substack.com/p/the-founders-algorithm-7-rules-i", date: "Feb 14, 2025", posted: 'Substack'},
    {featured: 0, image: "public/founderalgorithm.webp", title: "The Founder's Algorithm – 7 Lessons I Wish I Learned Sooner", categories: ['Startup Ops'],
    description: "From costly mistakes to proven strategies: A founder shares 7 fundamental rules for building successful startups, distilled from 5+ years of hands-on experience",
    url: "https://michino.substack.com/p/the-founders-algorithm-7-rules-i", date: "Feb 14, 2025", posted: 'Substack'},
    {featured: 0, image: "public/founderalgorithm.webp", title: "The Founder's Algorithm – 7 Lessons I Wish I Learned Sooner", categories: ['Startup Ops'],
    description: "From costly mistakes to proven strategies: A founder shares 7 fundamental rules for building successful startups, distilled from 5+ years of hands-on experience",
    url: "https://michino.substack.com/p/the-founders-algorithm-7-rules-i", date: "Feb 14, 2025", posted: 'Substack'}];

// Add blog cards to blog divs based on whether a blog ios featured or not
const featuredBlogs = document.getElementById('featured-blogs')
const otherBlogs = document.getElementById('other-blogs')

let featuredBlogContent = ""
let otherBlogContent = ""

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
    } else {
        let blogCategories = ""
        let categories =  blogs[i].categories

        if (categories.length > 0) {
            for (j=0; i<categories.length; j++) {
                blogCategories += `<p class="text-accent font-semi-bold text-smallest">${categories[j]}</p>`
            }
        }
        otherBlogContent += `<a href=${blogs[i].url}><div class="grid four-column">
                      <div class="span-3-cols flex flex-direction-column vertical-centered blog-row-content">
                        <div class="flex flex-direction-row space-evenly">${blogCategories}</div>
                        <h3>${blogs[i].title}</h3>
                        <p>${blogs[i].description}</p>
                        <p class="text-light">Posted on ${blogs[i].posted} • ${blogs[i].date}</p>
                      </div>
                        <img src=${blogs[i].image} alt="Blog Banner" class="hide-tablet">
                      </div></a>`
    }
}

featuredBlogs.innerHTML = featuredBlogContent
otherBlogs.innerHTML = otherBlogContent


// Create typed animation on homepage banner
var typed = new Typed('#toggle-text', {
    strings: ['a Data Scientist', 'an Entrepreneur','a Data Consultant'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });