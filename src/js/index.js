import { FormValue } from "./FormValue.js"
import { Header } from "./Header.js"
import { Modal } from "./Modal.js"
import { person } from "./data/persons.js"


document.addEventListener('DOMContentLoaded', () => {
	// FUNCTIONALITY HEADER
	const header = new Header()
	header.handleMenuMobile('.hamburger--button', '.header')
	header.handleActiveLink('.header__a')
	// FUNCTIONALITY HEADER

	// FORM LOGIN AND REGISTER
	const form = new FormValue()
	form.handleSubmit('#formLogin', '#formSignin');
	// FORM LOGIN AND REGISTER

	//Open and Close Modal
	const modal = new Modal('#teamArticle', '#modalCustom', person)
	modal.handleOpenModal()
	modal.handleCloseModal('.modalCustom__button')
})