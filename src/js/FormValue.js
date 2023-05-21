export class FormValue {
	constructor(formLogin, formSign) {
		this.formLogin = formLogin
		this.formSign = formSign
	}

	handleSubmit() {
		document.addEventListener('submit', (e) => {
			e.preventDefault();
			if (e.target.matches(this.formLogin)) {
				//validation of email
				let email = document.getElementById('login_email').value;
				if (!this.validateEmail(email)) {
					alert('El correo proporcionado es invalido')
				}
				//validation of password
				let password = document.getElementById('login_pass').value;
				if (!this.validatePassword(password)) {
					alert('La contraseña proporcionada es invalida')
				}
				//code for send email
			}

			if (e.target.matches(this.formSign)) {
				// validation name
				let branch = document.getElementById('signin_branch').value
				// validation Email
				let email = document.getElementById('signin_email').value
				if (!this.validateEmail(email)) {
					alert('El correo proporcionado es invalido')
				}
				// validation Password
				let password = document.getElementById('signin_pass').value;
				if (!this.validatePassword(password)) {
					alert('La contraseña proporcionada es invalida')
				}
				//code send email
			}
		})
	}

	validateEmail(email) {
		let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		let isValidEmail = patron.test(email);
		if (!isValidEmail) {
			return false
		}
		return true
	}

	validatePassword(password) {
		let patron = /^.{8,15}$/
		let isValidPassword = patron.test(password)
		if (!isValidPassword) {
			return false
		}
		return true
	}
}