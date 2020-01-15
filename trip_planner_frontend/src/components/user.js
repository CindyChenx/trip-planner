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
        
        this.trips.sort(function(a,b){
            var nameA = a.country.toUpperCase(); // ignore upper and lowercase
            var nameB = b.country.toUpperCase();
            
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            
            // names must be equal
            return 0;
        })

        return (`
            <h2>Welcome ${this.name}! </h2>
            <h3>Your Bucket List:</h3>
            <ul>
            ${this.trips.map(t => t.liAndLinkHTML).join('')}
            </ul>
            <button id="add-new-trip">Add New Trip</button>
        `)
    }

   
}