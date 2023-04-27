export class FormValue {

	constructor(formLogin, formSign) {
		this.formLogin = formLogin
		this.formSign = formSign
	}

	handleSubmit() {
		document.addEventListener('submit', (e) => {
			e.preventDefault();
			if (e.target.matches(this.formLogin)) {
				console.log('submit desde el login')
			}

			if (e.target.matches(this.formSign)) {
				console.log('submit desde el register')
			}
		})
	}
}