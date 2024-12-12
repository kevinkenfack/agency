import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogSection.css';

const BlogSection = () => {
  const posts = [
    {
      title: "Latest Trends in Web Development 2024",
      excerpt: "Discover the most impactful web technologies and frameworks that are shaping the future of web development.",
      image: "/blog/web-dev-trends.jpg",
      date: "Mar 15, 2024"
    },
    {
      title: "The Power of UI/UX Design",
      excerpt: "Learn how great design can transform your digital product and enhance user engagement.",
      image: "/blog/ui-ux-design.jpg",
      date: "Mar 10, 2024"
    },
    {
      title: "Mobile App Development Guide",
      excerpt: "Everything you need to know about building successful mobile applications.",
      image: "/blog/mobile-dev.jpg",
      date: "Mar 5, 2024"
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="section-title">Latest Insights</h2>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <article key={index} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to="/blog" className="read-more">Read More →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 