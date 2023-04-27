import { FormValue } from "./FormValue.js"
import { Header } from "./Header.js"
import { Modal } from "./Modal.js"
import { person } from "./data/persons.js"


document.addEventListener('DOMContentLoaded', () => {
	// FUNCTIONALITY HEADER
	const header = new Header('.hamburger--button', '.header', '.header__a', '.header__button', '.button')
	header.handleMenuMobile()
	header.handleActiveLink()
	header.handleActiveSubMenu()
	// FUNCTIONALITY HEADER

	// FORM LOGIN AND REGISTER
	const form = new FormValue('#formLogin', '#formSignin')
	form.handleSubmit();
	// FORM LOGIN AND REGISTER

	//Open and Close Modal
	const modal = new Modal('#teamArticle', '#modalCustom', person, '.modalCustom__button')
	modal.handleOpenModal()
	modal.handleCloseModal()
})