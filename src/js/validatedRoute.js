export class ValidatedRoute {
	routes = ['dashboard.html']
	session = sessionStorage
	pathname = window.location.pathname.replace('/', '')

	handleValidateIsLogin() {
		this.routes.forEach((route) => {
			if(this.pathname === route && this.session.getItem('login') === null | false | undefined) {
				window.location.href = '/login.html'
				return false
			}
		}) 
	}
	handleValidateIsAdmin(){
		if(this.pathname === 'projects.html' && this.session.getItem('isAdmin') === null | false | undefined) {
			if(this.session.getItem('login') !== null | false | undefined) {
				window.location.href = '/dashboard.html'
				return false
			}else{
				window.location.href = '/login.html'
				return false
			}
		}	
	}
}