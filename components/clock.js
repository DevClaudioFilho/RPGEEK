class Clock extends React.Component {
  constructor(props) {
    super(props);
    let location = document.getElementById('ClocksComponents').getAttribute("systemLocation")

    this.state = { datenow: '', location };

    setInterval(() => {
      var dateString = new Date().toLocaleString("en-US");
      var formattedString = dateString.replace(", ", " - ");
      this.setState({
        datenow: formattedString
      })
    }, 1000)
  }

  render() {
    return React.createElement("div", { className: "clock_container" },
      React.createElement("img", { src: `${this.state.location}assets/clock.svg` }, null),
      React.createElement("span", null, this.state.datenow))
  }
}

ReactDOM.render(React.createElement(Clock), document.getElementById('ClocksComponents'));
