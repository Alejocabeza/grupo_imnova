export class FetchData {
	async createNewProjects(value) {
		const options = {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(value)
		}
		const data = await fetch('http://localhost:3000/projects', options)
		return await data.json()
	}
	async createNewUser(value) {
		const options = {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(value)
		}
		const data = await fetch('http://localhost:3000/users', options)
		const res = await data.json()
		return res
	}
	async finderByEmail(email) {
		let options = {
			method: 'GET'
		}
		const data = await fetch(`http://localhost:3000/users?email=${email}`, options)
		const res = await data.json()
		return res
	}
	async finderProjectsByUser(userId) {
		let options = {
			method: 'GET'
		}
		const data = await fetch(`http://localhost:3000/projects?user=${userId}`, options)
		const res = await data.json()
		return res
	}
	async finderProjectsAll() {
		let options = {
			method: 'GET'
		}
		const data = await fetch('http://localhost:3000/projects', options)
		const res = await data.json()
		return res
	}
	async finderUserAll() {
		let options = {
			method: 'GET'
		}
		const data = await fetch('http://localhost:3000/users?isAdmin=false', options)
		const res = await data.json()
		return res
	}
}