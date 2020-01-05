class LoginAdapter {

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

    async login(params){
        const res = await fetch(`${this.baseURL}/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(params)
        })
        this.baseAdapter.checkStatus(res)
        this.baseAdapter.token = res.headers.get('authorization').split(' ')[1] // 0 is bearer 1 is token
        // console.log(this.baseAdapter.token)
    }


}