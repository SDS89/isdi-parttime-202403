class RegisterForm extends FormWithFeedback {
    constructor() {
        super()

        this.addClass('RegisterForm')

        const nameField = new Field('nombre', 'text', 'Nombre')
        nameField.setPlaceholder('nombre')

        const surnameField = new Field('apellido', 'text', 'Apellido')
        surnameField.setPlaceholder('nombre')

        const emailField = new Field('email', 'email', 'E-mail')
        emailField.setPlaceholder('name@example.com')

        const usernameField = new Field('nombre de usuario', 'text', 'Nombre de usuario')
        usernameField.setPlaceholder('nombre de usuario')

        const passwordField = new Field('contraseña', 'password', 'Contraseña')
        passwordField.setPlaceholder('contraseña')

        const passwordRepeatField = new Field('contraseña', 'password', 'Repetir contraseña')
        passwordRepeatField.setPlaceholder('repetir contraseña')

        const submitButton = new SubmitButton('Registrarse')

        this.add(nameField)
        this.add(surnameField)
        this.add(emailField)
        this.add(usernameField)
        this.add(passwordField)
        this.add(passwordRepeatField)
        this.add(submitButton)
    }

    getName() {
        const nameField = this.children[0]

        return nameField.getValue()
    }

    getSurname() {
        const surnameField = this.children[1]

        return surnameField.getValue()
    }

    getEmail() {
        const emailField = this.children[2]

        return emailField.getValue()
    }

    getUsername() {
        const usernameField = this.children[3]

        return usernameField.getValue()
    }

    getPassword() {
        const passwordField = this.children[4]

        return passwordField.getValue()
    }

    getPasswordRepeat() {
        const passwordFieldRepeat = this.children[5]

        return passwordFieldRepeat.getValue()
    }
}