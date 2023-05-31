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
			document.getElementById('header__div--enable').style.display = 'flex'
			document.querySelectorAll('.button__a').forEach((element) => {
				element.classList.add('button__a--small')
			})			
			document.getElementById('header__div--disable').style.display = 'none'
		}else{
			document.getElementById('header__div--enable').style.display = 'none'
			document.querySelectorAll('.button__a').forEach((element) => {
				element.classList.remove('button__a--small')
			})			
			document.getElementById('header__div--disable').style.display = 'flex'
		}
	}

	handleMenuAdminIsActive(){
		if(this.session.getItem('isAdmin') !== null | undefined | false){
			document.querySelector('.header__nav').style.gap = '1rem'
			document.querySelectorAll('.header__a').forEach((item) => {
				if(item.innerHTML === 'Projectos') {
					item.style.display = 'block'
				}
			})
		}else{
			document.querySelectorAll('.header__a').forEach((item) => {
				if(item.innerHTML === 'Projectos') {
					item.style.display = 'none'
				}
			})
		}
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