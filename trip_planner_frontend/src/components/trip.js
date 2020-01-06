class Trip {


    static formHTML(trip){
        return (`
        <form id="${trip ? 'edit' : 'new'}-trip-form">
        ${trip ? '<input type="hidden" value="' + trip.id + '">' : '' }
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="country">Country</label>
                <input type="text" class="form-control" id="country" placeholder="country" value=${trip ? trip.country : ''} required >
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="length">Length</label>
                <input type="text" class="form-control" id="length" placeholder="length" value=${trip ? trip.length : ''} required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="price">Price</label>
                <input type="text" class="form-control" id="price" placeholder="price" value=${trip ? trip.price : ''} required >
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="description">Description</label>
                <textarea class="form-control" id="description" rows="3">${trip ? trip.description : ''}</textarea>
            </div>
        </div>
       <button type="submit" class="btn btn-primary">${trip ? 'Update' : 'Create'} Trip</button>
    </form>
        `)
    }

    constructor(trip){
        const {id, country, length, price, description} = trip
        this.id = id
        this.country = country
        this.length = length
        this.price = price
        this.description = description
    }

    get formHTML(){
        return Trip.formHTML(this)
    }

    get showHTML(){
        return (`
            <h2>${this.country}</h2>
            <h3>Length: ${this.length}</h3>
            <h3>Price: ${this.price}</h3>
            <p>Description: \n${this.description? this.description : "None"}</p>
            <button data-id=${this.id} id="edit-id">Edit</button>
        `)
    }


    get liAndLinkHTML(){
        return `<li><a href="#" data-id="${this.id}">${this.country} - ${this.length}</a></li>`
    }
}