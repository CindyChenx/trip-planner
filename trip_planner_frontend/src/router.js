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
    }

    assignCallback(callback){
        for(let route in this.routes){ // route is the key; 'in' will find the key of the object
            this.routes[route].redirect = callback
            // this.routes[route][name] = callback
        }
    }

}