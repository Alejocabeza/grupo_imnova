import { FetchData } from './FetchData.js'
export class MappedValue {
	fetchData = new FetchData()
	session = sessionStorage
	pathname = window.location.pathname.replace('/', '')
	async mappedData() {
		if (this.session.getItem('emailUser') !== null | false | undefined && this.pathname === 'dashboard.html') {
			const users = await this.fetchData.finderByEmail(this.session.getItem('emailUser'))
			users.forEach(async (user) => {
				const projects = this.session.getItem('isAdmin') !== null | undefined | false ? await this.fetchData.finderProjectsAll() : await this.fetchData.finderProjectsByUser(user.email)
				console.log(projects)
				document.getElementById('dashboard__span').textContent = user.name
				const box = document.querySelector('.dashboard__div')
				const template = document.getElementById('dashboard__template').content
				const fragment = document.createDocumentFragment()
				if (projects.length > 0) {
					projects.forEach((project) => {
						template.querySelector('.dashboard__h3').textContent = project.name
						template.querySelector('.dashboard__p').textContent = project.description
						template.querySelector('.dashboard__button').textContent = `Mira el avance de ${project.name}`
						let clone = document.importNode(template, true)
						fragment.append(clone)
					})
					box.appendChild(fragment)
				}
			})
		}
		if (this.session.getItem('isAdmin') !== null | undefined | false && this.pathname === 'projects.html') {
			const select = document.getElementById('project_user')
			const users = await this.fetchData.finderUserAll()
			console.log(users)
			if (users.length > 0) {
				users.forEach((user) => {
					const option = document.createElement('option')
					option.value = user.name // Set the value attribute
					option.text = user.name // Set the visible text
					option.setAttribute('class', 'project__option')
					select.appendChild(option)
				})
			}
		}
	}
}