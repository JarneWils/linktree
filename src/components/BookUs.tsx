function BookUs() {
  const handleClick = () => {
    window.location.href = "mailto:dampbookings@gmail.com";
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="book-container">
        <p className="book-text">
          Book us {'>'}
        </p>
      </div>
    </div>
  );
}

export default BookUs;
