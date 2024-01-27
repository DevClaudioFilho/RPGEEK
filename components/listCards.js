class ListCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { systems: [] };

    let location = document.getElementById('listCardsComponents').getAttribute("systemLocation")

    fetch(`${location}db/sytems.json`, { mode: 'no-cors' })
      .then((response) => response.json())
      .then((data) => this.setState({
        systems: data.systems
      }))

  }

  render() {
    if (this.state.systems.length != 0) {
      return this.state.systems.map((card) => React.createElement("li", { key: card.id, className: "card" },
        React.createElement('img', { src: card.banner_image }, null),
        React.createElement('div', { className: 'card_info' },
          React.createElement('div', { className: 'card_title' },
            React.createElement('h1', null, card.title),
            React.createElement('span', null, card.short_description),
          ),
          React.createElement('p', null, card.description),
          React.createElement('a', { href: card.link_url }, 'Veja mais'),
        ))
      )
    }
    else {
      return React.createElement('p', null, 'Opa...nao ')
    }
  }
}

ReactDOM.render(React.createElement(ListCard), document.getElementById('listCardsComponents'));
