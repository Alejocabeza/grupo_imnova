const panel = document.querySelector('.header')
const selectItem = document.querySelectorAll('.header__a')
const panelSub = document.querySelector('.button')
const session = sessionStorage

/**
	 * Esta function maneja el menu mobile
	 * 
	 * @param {string} panelBtn
	 * @returns {void}
	 */
export function handleMenuMobile(panelBtn) {
	document.addEventListener('click', e => {
		if (
			e.target.matches(panelBtn) ||
				e.target.matches(`${panelBtn} *`)
		) {
			panel.classList.toggle('header--isActive')
			document.querySelector(panelBtn).classList.toggle('is-active')
		}
	})
}

/**
	 * Esta function maneja los links activos
	 * 
	 * @returns {void}
	 */
export function handleActiveLink() {
	const path = window.location.pathname.replace('/', '')
	selectItem.forEach((item) => {
		if (item.getAttribute('href') === path) {
			item.classList.add('header__a--active')
		}
	})
}

/**
	 * Esta function maneja el submenu activo
	 * 
	 * @param {string} btnElement
	 * @returns {void}
	 */
export function handleActiveSubMenu(btnElement) {
	document.addEventListener('click', (e) => {
		if (e.target.matches(btnElement)) {
			e.preventDefault()
			panelSub.classList.toggle('button--active')
		}
	})
}

/**
	 * Esta function maneja el menu login activo
	 * 
	 * @returns {void}
	 */
export function handleMenuLoginActive() {
	if(session.getItem('login') !== null|undefined|false){
		document.querySelectorAll('.button__a').forEach((item) => {
			if(item.innerHTML === 'Salir') {
				item.style.display = 'block'
			}
			if(item.innerHTML === 'Ingresar'){
				item.style.display = 'none'
			}
		})
		document.querySelectorAll('.header__a').forEach((item) => {
			if(item.innerHTML === 'Dashboard'){
				item.style.display = 'flex'
			}
		})
	}else{
		document.querySelectorAll('.button__a').forEach((item) => {
			if(item.innerHTML === 'Salir') {
				item.style.display = 'none'
			}
		})
		document.querySelectorAll('.header__a').forEach((item) => {
			if(item.innerHTML === 'Dashboard'){
				item.style.display = 'none'
			}
		})
	}
}

/**
	 * Esta function maneja el menu admin activo
	 * 
	 * @returns {void}
	 */
export function handleMenuAdminIsActive(){
	if(session.getItem('isAdmin') === null|undefined|false) {
		document.querySelectorAll('.header__a').forEach((item) => {
			if(item.innerHTML === 'Administrador') {
				item.style.display = 'none'
				item.addEventListener('click', () => {
					document.querySelector('.header__submenu').classList.remove('header__submenu--active')
				})
			}
		})
		return false
	}
	document.querySelectorAll('.header__a').forEach((item) => {
		if(item.innerHTML === 'Administrador') {
			item.style.display = 'flex'
			item.style.cursor = 'pointer'
			item.addEventListener('click', () => {
				document.querySelector('.header__submenu').classList.toggle('header__submenu--active')
			})
		}
	})
}

/**
	 * Esta function maneja el cierra de session
	 * 
	 * @returns {void}
	 */
export function handleCloseSession() {
	document.addEventListener('click', (e) => {
		if(e.target.matches('#button__close')) {
			session.clear()
			window.location.href = '/index.html'
		}
	})
}