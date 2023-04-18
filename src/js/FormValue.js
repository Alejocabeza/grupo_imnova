export class FormValue {
	handleSubmit(formLogin, formSign) {
		document.addEventListener('submit', (e) => {
			e.preventDefault();
			if (e.target.matches(formLogin)) {
				console.log('submit desde el login')
			}

			if (e.target.matches(formSign)) {
				console.log('submit desde el register')
			}
		})
	}
}