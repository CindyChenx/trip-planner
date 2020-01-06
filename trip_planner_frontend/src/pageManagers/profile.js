class ProfilePage extends PageManager {

    constructor(container, adapter){
        super(container)
        this.adapter = new ProfileAdapter(adapter)
        this.user = null
    }

    initBindingsAndEventListeners(){
        return null
    }

    profileBindingsAndEventListeners(){
        const tripList = this.container.querySelector('ul')
        tripList.addEventListener('click', this.handleTripClick.bind(this))
        // const addTrip = this.container.querySelector('button')
        // addTrip.addEventListener('click', this.handleAddTripClick.bind(this))
    }

    dogBindingsAndEventListeners(){
        const editButton = this.container.querySelector('button')
        editButton.addEventListener('click', this.formalizeTrip.bind(this))
    }

    tripFormBindingsAndEventListeners(){
        const form = this.container.querySelector('form')
        form.addEventListener('submit', this.handleUpdateTrip.bind(this))
    }
    
    handleTripClick(e){
        if(e.target.tagName === "A"){
            const tripId = e.target.dataset.id 
            const trip = this.getTripById(tripId)
            this.renderTrip(trip)
        }
    }

    // async handleAddTripClick(e){
    //     e.preventDefault()
    //     this.container.innerHTML = trip.formHTML

    //     const [id, country, length, price] = Array.from(e.target.querySelectorAll('input')).map(i => i.value)
    //     const description = e.target.querySelector('textarea').value 
    //     const params = {country, length, price, description, id}

    //     const originTrip = new Trip({id, country, length, price, description})


    // }
    
    formalizeTrip(e){
        const id = e.target.dataset.id 
        const trip = this.user.trips.find(t => t.id == id)
        if(trip){
            this.container.innerHTML = trip.formHTML
            this.tripFormBindingsAndEventListeners()
        } else {
            this.handleError({
                type: "404 not found",
                msg: "Trip was not found"
            })
        }
    }
    
    async handleUpdateTrip(e){
        e.preventDefault()
        const [id, country, length, price] = Array.from(e.target.querySelectorAll('input')).map(i => i.value)
        const description = e.target.querySelector('textarea').value 

        const params = {country, length, price, description, id}
        const trip = this.getTripById(id)
        const originTrip = new Trip({id, country, length, price, description})
        trip.country = country
        trip.length = length
        trip.price = price
        trip.description = description
        this.renderTrip(trip)
        try{
            const {id, country, length, price, description} = await this.adapter.updateTrip(params)
        } catch(err){
            trip.country = originTrip.country
            trip.length = originTrip.length
            trip.price = originTrip.price
            trip.description = originTrip.description
            this.renderTrip(trip)
            this.handleError(err)
        }
    }

    async fetchAndRenderPageResources(){
        try{
            const userObj = await this.adapter.getUser()
            this.user = new User(userObj)
            // this.container.innerHTML = trips.map(trip => trip.country).join(' ')
            this.renderUser()
        } catch(err) {
            this.handleError(err)
        }
    }

    get staticHTML(){
        return(`
            <div class="loader"></div>
        `)
    }

    getTripById(id){
        return this.user.trips.find(t => t.id == id)
    }

    renderTrip(trip){
        if(trip){
            this.container.innerHTML = trip.showHTML
            this.dogBindingsAndEventListeners()
        } else {
            this.handleError({
                type: "404 not found",
                msg: "Trip was not found"
            })
        }
    }

    renderUser(){
        this.container.innerHTML = this.user.profileHTML
        this.profileBindingsAndEventListeners()
    }

}