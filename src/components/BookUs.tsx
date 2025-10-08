function BookUs() {

    const handleClick = () => {
        window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=dampbookings@gmail.com",
        "_blank"
        );
    };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
        {/* <a href="mailto:dampbookings@gmail.com" className="book-link"> */}
            <div className="book-container">
                <p className="book-text">
                    Book us {'>'}
                </p>
            </div>
        {/* </a> */}
    </div>
    
  )
}

export default BookUs