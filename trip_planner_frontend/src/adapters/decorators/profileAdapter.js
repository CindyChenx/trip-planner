class ProfileAdapter {

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    get token(){
        return this.baseAdapter.token
    }

    get headers(){
        return this.baseAdapter.headers
    }
    
    async getUser(){
        const res = await fetch(`${this.baseURL}/profile`, {
            headers: this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

    async updateTrip(params){
        const { country, length, price, description, id} = params
        const url = `${this.baseURL}/trips/${id}`
        const body = {
            trip: {
                country, 
                length,
                price,
                description
            }
        }
        const res = await fetch(url, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(body)
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }



}