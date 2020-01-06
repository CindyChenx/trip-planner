class Router {
    // key value pair for a string identifier to a pageManager
    // startingPage

    constructor(kvpairs){
        this.routes = kvpairs
    }

    set rootPage(rootPageKey){
        this.rootPage = this.routes[rootPageKey]
    }

    render(page){
        this.routes[page].render()
        if(this.navbar) { this.navbar.render() }
        this.currentPage = page
    }

    assignRedirect(callback){
        this.assignCallback(callback, 'redirect')
    }

    assignAlertHandler(callback){
        this.assignCallback(callback, 'handleAlert')
    }

    assignCallback(callback, name){
        for(let route in this.routes){ // route is the key; 'in' will find the key of the object
            this.routes[route][name] = callback
        }
        if(this.navbar) { this.navbar.redirect = callback}
    }

    assignNavbar(navbar){
        this.navbar = navbar
        this.navbar.currentPage = () => {
            return this.currentPage
        }
    }

}