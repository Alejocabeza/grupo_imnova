export class Header {
	panel = document.querySelector('.header')
	selectItem = document.querySelectorAll('.header__a')
	panelSub = document.querySelector('.button')
	session = sessionStorage

	constructor(panelBtn, btnElement) {
		this.panelBtn = panelBtn
		this.btnElement = btnElement
	}

	handleMenuMobile() {
		document.addEventListener('click', e => {
			if (
				e.target.matches(this.panelBtn) ||
				e.target.matches(`${this.panelBtn} *`)
			) {
				this.panel.classList.toggle('header--isActive')
				document.querySelector(this.panelBtn).classList.toggle('is-active')
			}
		})
	}

	handleActiveLink() {
		const path = window.location.pathname.replace('/', '')
		this.selectItem.forEach((item) => {
			if (item.getAttribute('href') === path) {
				item.classList.add('header__a--active')
			}
		})
	}

	handleActiveSubMenu() {
		document.addEventListener('click', (e) => {
			if (e.target.matches(this.btnElement)) {
				e.preventDefault()
				this.panelSub.classList.toggle('button--active')
			}
		})
	}

	handleMenuLoginActive() {
		if(this.session.getItem('login') !== null|undefined|false){
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

	handleMenuAdminIsActive(){
		if(this.session.getItem('isAdmin') === null|undefined|false) {
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

	handleCloseSession() {
		document.addEventListener('click', (e) => {
			if(e.target.matches('#button__close')) {
				this.session.clear()
				window.location.href = '/index.html'
			}
		})
	}
	
}