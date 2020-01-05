class WelcomePage extends PageManager {

    initBindingsAndEventListeners(){
        this.signupLink = this.container.querySelector("a#signup")
        this.loginLink = this.container.querySelector("a#login")

        this.signupLink.addEventListener('click', this.handleSignupClick.bind(this))
        this.loginLink.addEventListener('click', this.handleLoginClick.bind(this))
    }

    handleSignupClick(e){
        e.preventDefault()
        this.redirect('signup')

    }

    handleLoginClick(e){
        e.preventDefault()
        this.redirect('login')
    }

    get staticHTML(){
        return (`
            <h1>Welcome to Trip Planner</h1>
            <h3>Please <a href="a" id="signup">Signup</a> or <a href="a" id="login">Login</a></h3>
        `)
    }
}