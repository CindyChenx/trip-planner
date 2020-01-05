class App {

    constructor(){
        this.adapter = new BaseAdapter()
        this.initBindingsAndEventListeners()
        // this.renderPage(new SignupPage(this.pageContainer, this.adapter))  // make signup page more flexible

        this.router = new Router({
            'welcome': new WelcomePage(this.pageContainer, this.adapter),
            'login': new LoginPage(this.pageContainer, this.adapter),
            'signup': new SignupPage(this.pageContainer, this.adapter)
        })
        this.router.assignCallback(this.pageManagerRedirect.bind(this))
        this.renderPage('welcome')
    }

    initBindingsAndEventListeners(){
        this.container = document.querySelector("#app-container")
        this.alertContainer = document.querySelector("#alert-container")
        this.navbarContainer = document.querySelector("#navbar-container")
        this.pageContainer = document.querySelector("#page-container")
    }

    pageManagerRedirect(page){
        this.renderPage(page)
    }

    renderPage(page){
        this.router.render(page)
    }

}