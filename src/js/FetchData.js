/**
 * Esta function crea un nuevo proyecto en la base de datos
 *  
 * @param {*} value 
 * @return Promise<any>
 */
export async function createNewProjects(value) {
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

/**
 * Esta function crea un nuevo usuario en la base de datos
 * 
 * @param {*} value 
 * @returns Promise<any>
 */
export async function createNewUser(value) {
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

/**
 * Esta function busca un usuario por email en la base de datos
 * 
 * @param {*} email 
 * @returns Promise<any>
 */
export async function finderByEmail(email) {
	let options = {
		method: 'GET'
	}
	const data = await fetch(`http://localhost:3000/users?email=${email}`, options)
	const res = await data.json()
	return res
}

/**
 * Esta Function busca un proyecto por id en la base de datos
 * 
 * @param {*} userId 
 * @returns  Promise<any>
 */
export async function finderProjectsByUser(userId) {
	let options = {
		method: 'GET'
	}
	const data = await fetch(`http://localhost:3000/projects?user=${userId}`, options)
	const res = await data.json()
	return res
}

/**
 * esta function busca todos los proyectos en la base de datos
 * 
 * @returns Promise<any>
 */
export async function finderProjectsAll() {
	let options = {
		method: 'GET'
	}
	const data = await fetch('http://localhost:3000/projects', options)
	const res = await data.json()
	return res
}

/**
 * Esta function busca todos los usuarios en la base de datos
 * 
 * @returns Promise<any> 
 */
export async function finderUserAll() {
	let options = {
		method: 'GET'
	}
	const data = await fetch('http://localhost:3000/users?isAdmin=false', options)
	const res = await data.json()
	return res
}
