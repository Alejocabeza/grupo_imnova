import { finderByEmail, finderProjectsAll, finderProjectsByUser, finderUserAll } from './FetchData.js'
import Services from './data/services.js'

const session = sessionStorage
const pathname = window.location.pathname.replace('/', '')

/**
	 * Esta function mapea los valores del dashboard
	 * 
	 * @returns {Promise}
	 */
export async function mappedValueDashboard(){
	if (session.getItem('emailUser') !== null | false | undefined && pathname === 'dashboard.html') {
		const users = await finderByEmail(session.getItem('emailUser'))
		users.forEach(async (user) => {
			const projects = session.getItem('isAdmin') !== null | undefined | false ? await finderProjectsAll() : await finderProjectsByUser(user.email) 
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
}

/**
	 * Esta function mapea los valores de la seccion de proyectos
	 * 
	 * @returns {Promise}
	 */
export async function mappedValueProjects(){
	if (session.getItem('isAdmin') !== null | undefined | false && pathname === 'projects.html') {
		const select = document.getElementById('project_user')
		const users = await finderUserAll()
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

/**
 * Esta function mapea los valores de la seccion de servicios
 * 
 * @returns {void}
 */
export function mappedValueService()
{
	if(pathname === 'services.html'){
		const box = document.querySelector('.services__div')
		const template = document.getElementById('services__template')
		const fragment = document.createDocumentFragment()
		Services.forEach((service) => {
			template.content.querySelector('.services__h3').textContent = service.name
			template.content.querySelector('.services__p').textConent = service.desc
			let clone = document.importNode(template.content, true)
			fragment.append(clone)
		})
		console.log(template)
		box.appendChild(fragment)
	}
}
