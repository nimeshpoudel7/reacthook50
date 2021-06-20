class Authentication{
    // constructor
    constructor(authenticated) {
    this.authenticated=false;
    }

    loginAuth(){
        this.authenticated=true;
    }
    logoutAuth(){
        this.authenticated=false;
    }

    isAuthenticated(){
        return this.authenticated
    }
}