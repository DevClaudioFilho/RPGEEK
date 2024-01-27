class contactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitform(event) {
    event.preventDefault()

    const name = document.getElementById("form_name").value;
    const email = document.getElementById("form_email").value;
    const assunto = document.getElementById("form_assunto").value;
    const mensager = document.getElementById("form_mensager").value;

    const email_body = { 'name': name, 'email': email, 'assunto': assunto, 'mensager': mensager }

    localStorage.setItem("email_data", JSON.stringify(email_body));
    console.log(localStorage.getItem('email_data'))
  }


  render() {
    let inputName = React.createElement('div', { className: 'input_form' },
      React.createElement('label', { htmlFor: "form_name" }, 'Name: '),
      React.createElement('input', { type: "Name", name: "Name", id: "form_name", required: true })
    )

    let inputEmail = React.createElement('div', { className: 'input_form' },
      React.createElement('label', { htmlFor: "form_email" }, 'Email: '),
      React.createElement('input', { type: "email", name: "Email", id: "form_email", required: true })
    )

    let inputAssunto = React.createElement('div', { className: 'input_form' },
      React.createElement('label', { htmlFor: "form_assunto" }, 'Assunto: '),
      React.createElement('input', { type: "text", name: "Assunto", id: "form_assunto", required: true })
    )

    let inputMensagem = React.createElement('div', { className: 'input_form input_form_textarea' },
      React.createElement('label', { htmlFor: "form_mensager" }, 'Mensagem: '),
      React.createElement('textarea', { name: "Mensagem", id: "form_mensager", required: true })
    )

    let buttonSubmit = React.createElement('button', { className: 'button_form', type: "submit" }, 'Enviar')

    let content = (
      React.createElement('form', { onSubmit: (event) => this.submitform(event) },
        inputName,
        inputEmail,
        inputAssunto,
        inputMensagem,
        buttonSubmit
      )
    )
    return content
  }
}

ReactDOM.render(React.createElement(contactForm), document.getElementById('contactFormComponents'));