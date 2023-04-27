export class Modal {
	constructor(article, modal, person, btnClose) {
		this.article = document.querySelectorAll(article)
		this.modal = document.querySelector(modal)
		this.persons = person
		this.btnClose = btnClose
	}

	handleOpenModal() {
		this.article.forEach((item) => {
			item.addEventListener('click', (e) => {
				if (e.target.matches('.team__button')) {
					const title = item.querySelector('.team__h3').innerText
					const person = this.persons.filter((person) => person.name === title)
					if (person.length > 0) {
						this.modal.querySelector('.modalCustom__img').setAttribute('src', person[0]['avatar'])
						this.modal.querySelector('.modalCustom__h3').innerText = person[0]['name']
						this.modal.querySelector('.modalCustom__h4').innerText = person[0]['puesto']
						this.modal.querySelector('.modalCustom__p').innerText = person[0]['description']
						this.modal.classList.toggle('modalCustom--open')
						this.modal.querySelector('.modalCustom__div').classList.add('modalCustom__div--open')
					}
				}
			})
		})
	}

	handleCloseModal() {
		document.addEventListener('click', (e) => {
			if (e.target.matches(this.btnClose)) {
				this.modal.querySelector('.modalCustom__div').classList.remove('modalCustom__div--open')
				this.modal.classList.remove('modalCustom--open');
			}
		})
	}

}