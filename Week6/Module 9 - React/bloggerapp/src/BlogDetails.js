function BlogDetails() {
  const showBlog = true;

  return (
    <div className="blog">
      <h2>Blog Details</h2>

      {showBlog ? (
        <div>
          <h3>React Learning</h3>
          <p>Stephen Biz</p>
          <p>Welcome to learning React!</p>

          <h3>Installation</h3>
          <p>Schwarzenegger</p>
          <p>You can install React from npm.</p>
        </div>
      ) : (
        <p>No blog available.</p>
      )}
    </div>
  );
}

export default BlogDetails;