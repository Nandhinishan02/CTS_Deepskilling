function CourseDetails() {
  const showCourses = true;

  return (
    <div className="course">
      <h2>Course Details</h2>

      {showCourses && (
        <div>
          <h3>Angular</h3>
          <p>4/5/2021</p>

          <h3>React</h3>
          <p>6/3/2021</p>
        </div>
      )}
    </div>
  );
}

export default CourseDetails;