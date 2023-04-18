import { FormValue } from "./FormValue.js"
import { Header } from "./Header.js"


document.addEventListener('DOMContentLoaded', () => {
	// FUNCTIONALITY HEADER
	const header = new Header()
	header.handleMenuMobile('.hamburger--button', '.header')
	header.handleActiveLink('.header__a')
	// FUNCTIONALITY HEADER
	// FORM LOGIN AND REGISTER
	const form = new FormValue()
	form.handleSubmit('#formLogin', '#formSignin');
})