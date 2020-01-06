class ProfilePage extends PageManager {

    constructor(container, adapter){
        super(container)
        this.adapter = new ProfileAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        return null
    }

    async fetchAndRenderPageResources(){
        try{
            const trips = await this.adapter.getTrips()
            this.container.innerHTML = trips.map(trip => trip.country).join(' ')
        } catch(err) {
            this.handleError(err)
        }
    }

    get staticHTML(){
        return(`
            <h1>Your Profile Page!</h1>
        `)
    }

}