import "./Blogs.scss";

const Blogs = () => {
  return (
    <section className="blogs">
      <div className="section-title">
        <h2>latest blog</h2>
      </div>
      <div className="container-blogs">
        <div className="content">
          <div className="blog-wrapper">
            <div className="blog-img">
              <img src="src/assets/images/bloggg.avif" alt="blog" />
            </div>
            <div className="blog-content">
              <span>07 - May - 2018</span>
              <h3>at vero eos et accusamus et iusto odio</h3>
              <span className="blog-btn">View More</span>
            </div>
          </div>
          <div className="blog-wrapper">
            <div className="blog-img">
              <img src="src/assets/images/blog1.avif" alt="blog" />
            </div>
            <div className="blog-content">
              <span>07 - May - 2018</span>
              <h3>alix debuts a swim line for spring 2018</h3>
              <span className="blog-btn">View More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
