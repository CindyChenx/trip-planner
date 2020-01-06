class ProfilePage extends PageManager {

    constructor(container, adapter){
        super(container)
        this.adapter = new ProfileAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        return null
    }

    get staticHTML(){
        return(`
            <h1>Your Profile Page!</h1>
        `)
    }

}