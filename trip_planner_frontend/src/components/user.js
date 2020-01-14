class User {

    constructor(user) {
        // console.log(user)
        const {id, email, name, address, trips} = user
        this.id = id
        this.email = email
        this.name = name
        this.address = address
        this.trips = trips.map(t => new Trip(t))
    }

    get profileHTML(){
        return (`
            <h2>Welcome ${this.name}! </h2>
            <h3>Your Buck List:</h3>
            <ul>
                ${this.trips.map(t => t.liAndLinkHTML).join('')}
            </ul>
            <button id="add-new-trip">Add New Trip</button>
        `)
    }
}