import { FormValue } from './FormValue.js'

export class MappedValue {
	form = new FormValue() 
	session = sessionStorage
	pathname = window.location.pathname.replace('/', '')

	async mappedData() {
		if(this.session.getItem('emailUser') !== null|false|undefined && this.pathname === 'dashboard.html'){
			const users = await this.form.finderByEmail(this.session.getItem('emailUser'))
			users.forEach(async (user) => {
				const projects =	this.session.getItem('isAdmin') !== null | undefined | false ? this.form.finderProjectsAll() : this.form.finderProjectsByUser(user.email)
				document.getElementById('dashboard__span').textContent = user.name
				const box = document.querySelector('.dashboard__div')
				const template = document.getElementById('dashboard__template').content
				const fragment = document.createDocumentFragment()
				projects.forEach((project) => {
					template.querySelector('.dashboard__h3').textContent = project.name
					template.querySelector('.dashboard__p').textContent = project.description
					template.querySelector('.dashboard__button').textContent = `Mira el avance de ${project.name}`
					let clone = document.importNode(template, true)
					fragment.append(clone)
				})
				box.appendChild(fragment)
			})

		}
	}
}