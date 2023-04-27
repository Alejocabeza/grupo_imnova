export class Header {

	constructor(panelBtn, panel, selectItem, btnElement, panelSub) {
		this.panelBtn = panelBtn
		this.panel = document.querySelector(panel)
		this.selectItem = document.querySelectorAll(selectItem)
		this.btnElement = btnElement
		this.panelSub = document.querySelector(panelSub)
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
				e.preventDefault();
				this.panelSub.classList.toggle('button--active');
			}
		})
	}
}