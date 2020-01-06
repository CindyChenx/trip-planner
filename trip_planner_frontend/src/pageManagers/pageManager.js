class PageManager {

    constructor(container, adapter){
      this.container = container
    }

    fetchAndRenderPageResources(){
        return null  
    }  // do nothing

    handleError(err){
        if(err.type === "Authorization Error") {
            this.handleAlert(err.msg)
            this.redirect('welcome')
        } else {
            this.handleAlert(err)
        }
    }

    render(){
        this.container.innerHTML = this.staticHTML
        this.initBindingsAndEventListeners()
        this.fetchAndRenderPageResources()
    }

}