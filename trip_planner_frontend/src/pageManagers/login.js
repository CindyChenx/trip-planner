class LoginPage extends PageManager {

    constructor(container, adapter){
        super(container)
        this.adapter = new LoginAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        this.form = this.container.querySelector('form#login-form')
        
        this.form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    async handleSubmit(e){
        e.preventDefault()
        const [email, password] = Array.from(e.target.querySelectorAll('input')).map(input => input.value)
        const params = {
            user: {email, password}
        }

        try{
            await this.adapter.login(params)
            this.redirect('profile')
        }catch(err){
            alert(err)
        }
    }

    get staticHTML(){
        return(`
        <h2>Log In</h2>
        <form id="login-form">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" required >
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password" required >
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Log in</button>
        </form>
        `)
    }
}