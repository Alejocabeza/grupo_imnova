import { FetchData } from './FetchData.js'
export class FormValue {
	session = sessionStorage
	fetchData = new FetchData()
	handleSubmit(formLogin, formSign) {
		document.addEventListener('submit', async (e) => {
			e.preventDefault()
			if (e.target.matches(formLogin)) {
				let validateEmail
				let validatePass
				//validation of email
				let email = document.getElementById('login_email').value
				if (this.emailValidated(email) === false) {
					validateEmail = false
					alert('el email no es valido')
					document.querySelector(formLogin).reset()
				}else{
					validateEmail = true
				}
				//validation of password
				let password = document.getElementById('login_pass').value
				if (this.passValidated(password) === false) {
					validatePass = false
					alert('la contrase;a no es valido')
					document.querySelector(formLogin).reset()
				}else{
					validatePass = true
				}
				//code for send email
				if(validateEmail === true && validatePass === true) {
					const users = await this.fetchData.finderByEmail(email)
					try {
						users.forEach(user => {
							if(email !== user.email || password !== user.password) {
								throw 'USER NO AUTORIZADO'
							}else{
								window.location.href = '/dashboard.html'
								this.session.setItem('login', true)
								if(user.isAdmin === true) this.session.setItem('isAdmin', true)
								this.session.setItem('emailUser', user.email)
							}
						})
					} catch (error) {
						alert(error.message, error.status)
					}
				}
			}
			if (e.target.matches(formSign)) {
				let validateEmail
				let validatePass
				let isAdmin = false
				// validation name
				let name = document.getElementById('signin_name').value
				let company = document.getElementById('signin_company').value
				// validation Email
				let email = document.getElementById('signin_email').value
				if (this.emailValidated(email) === false) {
					validateEmail = false
					alert('el email no es valido')
					document.querySelector(formSign).reset()
				}else{
					validateEmail = true
					if(email === 'alejandrocabeza400@gmail.com') isAdmin = true
				}
				// validation Password
				let password = document.getElementById('signin_pass').value
				if (this.passValidated(password) === false) {
					validatePass = false
					alert('la contrasena no es valido')
					document.querySelector(formSign).reset()
				}else{
					validatePass = true
				}
				let createdAt = new Date()
				let updatedAt = null
				let deletedAt = null
				const formdata = {
					name,
					company,
					email,
					password,
					isAdmin,
					createdAt,
					updatedAt,
					deletedAt
				}
				//code send email
				if(validateEmail === true && validatePass === true) {
					try{
						await this.fetchData.createNewUser(formdata)
						window.location.href = '/login.html'
					}catch(e) {
						console.log(e)
					}
				}
			}
		})
	}
	emailValidated(email) {
		let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		let isValidEmail = patron.test(email)
		if (!isValidEmail) {
			return false
		}
	}
	passValidated(password) {
		let patron = /^.{8,15}$/
		let isValidPassword = patron.test(password)
		if (!isValidPassword) {
			return false
		}
		return true
	}
}