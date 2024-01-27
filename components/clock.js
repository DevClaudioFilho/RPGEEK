class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datenow: '' };

    setInterval(() => {
      var dateString = new Date().toLocaleString("en-US");
      var formattedString = dateString.replace(", ", " - ");
      this.setState({
        datenow: formattedString
      })
    }, 1000)
  }

  render() {
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));

    let imgsrc = '/'
    if (dir != '' && dir != '/RPGEEK') {
      imgsrc = '../'
    }

    return React.createElement("div", { className: "clock_container" },
      React.createElement("img", { src: `${imgsrc}assets/clock.svg` }, null),
      React.createElement("span", null, this.state.datenow))
  }
}

ReactDOM.render(React.createElement(Clock), document.getElementById('ClocksComponents'));
