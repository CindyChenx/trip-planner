class PageManager {

    constructor(container, adapter){
      this.container = container
    }

    fetchAndRenderPageResources(){
        return null  
    }  // do nothing

    render(){
        this.container.innerHTML = this.staticHTML
        this.initBindingsAndEventListeners()
        this.fetchAndRenderPageResources()
    }

}