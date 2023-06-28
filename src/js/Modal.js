import { persons } from './data/persons.js'

const article = document.querySelectorAll('#teamArticle')
const modal = document.querySelector('#modalCustom')

/**
  * Esta function maneja el abrir del modal
  * 
  * @returns {void}
  */
export function handleOpenModal() {
	article.forEach((item) => {
		item.addEventListener('click', (e) => {
			if (e.target.matches('.team__button')) {
				const title = item.querySelector('.team__h3').innerText
				const person = persons.filter((person) => person.name === title)
				if (person.length > 0) {
					modal.querySelector('.modalCustom__img').setAttribute('src', person[0]['avatar'])
					modal.querySelector('.modalCustom__h3').innerText = person[0]['name']
					modal.querySelector('.modalCustom__h4').innerText = person[0]['puesto']
					modal.querySelector('.modalCustom__p').innerText = person[0]['description']
					modal.classList.toggle('modalCustom--open')
					modal.querySelector('.modalCustom__div').classList.add('modalCustom__div--open')
				}
			}
		})
	})
}

/**
	 * Esta function maneja el cerrar del modal
	 * 
	 * @returns {void}
	 */
export function handleCloseModal() {
	document.addEventListener('click', (e) => {
		if (e.target.matches('.modalCustom__button')) {
			modal.querySelector('.modalCustom__div').classList.remove('modalCustom__div--open')
			modal.classList.remove('modalCustom--open')
		}
	})
}
