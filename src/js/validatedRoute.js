const routes = ['dashboard.html', 'signin.html', 'projects.html']
const session = sessionStorage
const pathname = window.location.pathname.replace('/', '')

/**
 * Esta function valida si el usuario esta logueado y restrige el acceso a las rutas
 * 
 * @returns {void}
 */
export function handleValidateIsLogin() {
	routes.forEach((route) => {
		if(pathname === route && session.getItem('login') === null | false | undefined) {
			window.location.href = '/login.html'
			return false
		}
	}) 
}

/**
 * Esta function valida si el usuario es admin y restringe el acceso a las rutas
 * 
 * @returns {void}
 */
export function handleValidateIsAdmin(){
	if(pathname === 'projects.html' && pathname === 'login.html' && session.getItem('isAdmin') === null | false | undefined) {
		if(session.getItem('login') !== null | false | undefined) {
			window.location.href = '/dashboard.html'
			return false
		}else{
			window.location.href = '/login.html'
			return false
		}
	}	
}
