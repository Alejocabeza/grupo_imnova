import {handleSubmit } from './FormValue.js'
import {handleActiveLink, handleActiveSubMenu, handleCloseSession, handleMenuAdminIsActive, handleMenuLoginActive, handleMenuMobile } from './Header.js'
import {handleCloseModal, handleOpenModal } from './Modal.js'
import {mappedValueDashboard, mappedValueProjects, mappedValueService } from './MappedValue.js'
import {handleValidateIsAdmin, handleValidateIsLogin } from './validatedRoute.js'

/**
 * Esta function ejecuta el codigo cuando el DOM este listo
 */
document.addEventListener('DOMContentLoaded', () => {
	// FUNCTIONALITY HEADER
	handleMenuMobile('.hamburger--button')
	handleActiveLink()
	handleActiveSubMenu('.header__button')
	handleMenuLoginActive()
	handleMenuAdminIsActive()
	handleCloseSession()
	// FUNCTIONALITY HEADER
	// FORM LOGIN AND REGISTER
	handleSubmit()
	// FORM LOGIN AND REGISTER
	//Open and Close Modal
	handleOpenModal()
	handleCloseModal()
	//validation route
	handleValidateIsLogin()
	handleValidateIsAdmin()
	//mapped value
	mappedValueDashboard()
	mappedValueProjects()
	mappedValueService()
})