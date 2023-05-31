import { FormValue } from './FormValue.js'
import { Header } from './Header.js'
import { Modal } from './Modal.js'
import { person } from './data/persons.js'
import { MappedValue } from './MappedValue.js'
import { ValidatedRoute } from './validatedRoute.js'


document.addEventListener('DOMContentLoaded', () => {
	// FUNCTIONALITY HEADER
	const header = new Header('.hamburger--button', '.header__button')
	header.handleMenuMobile()
	header.handleActiveLink()
	header.handleActiveSubMenu()
	header.handleMenuLoginActive()
	header.handleMenuAdminIsActive()
	header.handleCloseSession()
	// FUNCTIONALITY HEADER

	// FORM LOGIN AND REGISTER
	const form = new FormValue()
	form.handleSubmit('#formLogin', '#formSignin')
	// FORM LOGIN AND REGISTER

	//Open and Close Modal
	const modal = new Modal('#teamArticle', '#modalCustom', person, '.modalCustom__button')
	modal.handleOpenModal()
	modal.handleCloseModal()

	//validation route
	const validatedRoute = new ValidatedRoute()
	validatedRoute.handleValidateIsLogin()
	validatedRoute.handleValidateIsAdmin()

	//mapped value
	const mappedValue = new MappedValue()
	mappedValue.mappedData()
})