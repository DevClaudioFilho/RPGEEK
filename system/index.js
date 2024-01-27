class PageSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { system: {} };
    let systemId = document.getElementById('page_system').getAttribute("systemId")

    fetch("/db/sytems.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ system: data.systems[data.systems.findIndex((x) => x.id == systemId)] });
      })
      .catch((err) => console.log(err))
  }


  render() {
    if (this.state.system.books) {
      let system_banner = (
        React.createElement('img', { className: 'system_banner', src: this.state.system.banner_image },
        )
      )

      let system_about = (
        React.createElement('section', { className: 'content_container system_about', id: 'system_about' },
          React.createElement('h1', { className: 'title' }, "Sobre o " + this.state.system.title),
          React.createElement('div', {}, this.state.system.description),
        )
      )

      let system_how_play = (
        React.createElement('section', { className: 'content_container system_how_play', id: 'system_how_play' },
          React.createElement('h1', { className: 'title' }, "Como e com o que se joga"),
          React.createElement('div', {},
            React.createElement('iframe', { src: this.state.system.video_url }, this.state.system.description),
            React.createElement('p', {}, (this.state.system.how_play_text.replace('<br/>', '\f\r\f'))),
          ),
        )
      )


      let list_books = React.createElement('section', { className: 'content_container', id: 'list_books' },
        React.createElement('h1', { className: 'title' }, "Livros para utilizar"),
        React.createElement('p', null, 'Que pena...Não achamos nenhum livro desse sistema, aconselho pesquisar na comunidade.'
        ))

      if (this.state.system.books.length > 0) {
        list_books = (
          React.createElement('section', { className: 'content_container', id: 'list_books' },
            React.createElement('h1', { className: 'title' }, "Livros para utilizar"),
            React.createElement('ul', { className: 'list_books cards_lists' },
              this.state.system.books.map((card) => React.createElement("li", { key: card.id + card.title, className: "card" },
                React.createElement('img', { src: card.banner_image }, null),
                React.createElement('div', { className: 'card_info' },
                  React.createElement('div', { className: 'card_title' },
                    React.createElement('h1', null, card.title),
                    React.createElement('span', null, card.short_description),
                  ),
                  React.createElement('p', null, card.description),
                  React.createElement('a', { href: card.link_url }, 'Veja mais'),
                ))
              ),
            ),
          )
        )
      }

      let content = (
        React.createElement('div', {},
          system_banner,
          system_about,
          system_how_play,
          list_books
        )
      )
      return content
    }
    else {
      return React.createElement('p', null, 'Teste')
    }
  }
}

ReactDOM.render(React.createElement(PageSystem), document.getElementById('page_system'));
