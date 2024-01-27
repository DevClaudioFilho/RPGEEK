class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideIndex: 1 };
  }

  plusSlides(n) {
    this.showSlides(this.state.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.state.slideIndex = n);
  }

  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { this.state.slideIndex = 1 }
    if (n < 1) { this.state.slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.state.slideIndex - 1].style.display = "block";
    dots[this.state.slideIndex - 1].className += " active";
  }

  componentDidMount() {
    this.showSlides(this.state.slideIndex)
    setInterval(() => {
      this.showSlides(this.state.slideIndex)
      this.state.slideIndex += 1
    }, 5000)
  }


  render() {
    let slide = (
      React.createElement('div', { className: 'section_slideshow' },
        React.createElement('div', { className: 'slideshow-container' },
          React.createElement('div', { className: 'mySlides fade' },
            React.createElement('img', { src: 'assets/images/banner.jpg' }, null),
            React.createElement('p', { className: 'text' }, "Gurps esta nesse site"),
          ),
          React.createElement('div', { className: 'mySlides fade' },
            React.createElement('img', { src: 'assets/images/d&d_banner.webp' }, null),
            React.createElement('p', { className: 'text' }, "D&D esta nesse site"),
          ),
          React.createElement('div', { className: 'mySlides fade' },
            React.createElement('img', { src: 'assets/images/guaxa.webp' }, null),
            React.createElement('p', { className: 'text' }, "O guaxinin esta solto nesse site"),
          ),
        ),
        React.createElement('div', { className: 'dotsContainer' },
          React.createElement('span', { className: 'dot', onClick: () => this.currentSlide(1) }, null),
          React.createElement('span', { className: 'dot', onClick: () => this.currentSlide(2) }, null),
          React.createElement('span', { className: 'dot', onClick: () => this.currentSlide(3) }, null),

        )
      )
    )

    return slide
  }



}

ReactDOM.render(React.createElement(Slideshow), document.getElementById('slideshowComponents'));
