export class Header {
	handleMenuMobile(panelBtn, panel) {
		document.addEventListener('click', e => {
			if (
				e.target.matches(panelBtn) ||
				e.target.matches(`${panelBtn} *`)
			) {
				document.querySelector(panel).classList.toggle('header--isActive')
				document.querySelector(panelBtn).classList.toggle('is-active')
			}
		})
	}

	handleActiveLink(selectItem) {
		const path = window.location.pathname.replace('/', '')
		const items = document.querySelectorAll(selectItem);
		items.forEach((item) => {
			if (item.getAttribute('href') === path) {
				item.classList.add('header__a--active')
			}
		})
	}
}