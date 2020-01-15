class Navbar extends PageManager {

    constructor(container, adapter){
        super(container)
        this.adapter = adapter
    }

    get is_authenticated(){
        return !!this.adapter.token    // return boolean
    }

    initBindingsAndEventListeners(){
        this.container.addEventListener('click', this.handleClick.bind(this))
    }

    handleClick(e){
        if(e.target.tagName === "A"){
            e.preventDefault()
            if (e.target.id !== 'logout-link'){
                const route = e.target.id.split('-')[0]
                // console.log(route)
                this.redirect(route)
                // if (route !== this.currentPage()) {this.redirect(route)}
            } else {
                this.adapter.token = null
                this.redirect('welcome')
            }
            // console.log(e.target)
        }
    }

    get staticHTML(){
        if(this.is_authenticated){
            return (`
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">TripPlanner</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#" id="profile-link">Profile<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="logout-link" href="#">Logout</a>
                    </li>
                    </ul>
                 </div>
            </nav>
            `)
        } else {
            return (`
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">TripPlanner</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#" id="welcome-link">Welcome<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="login-link">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="signup-link">Signup</a>
                    </li>
                    </ul>
                 </div>
            </nav>            
            `)
        }
    }

}