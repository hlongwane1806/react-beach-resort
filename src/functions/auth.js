class Auth {
    constructor() {
      this.authenticated = false;
      this.User ={};
    }
  
    login(cb) {
      this.authenticated = true;
      this.User = cb();
      
    }
  
    logout(cb) {
      this.authenticated = false;
      this.User = cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }

    getUser(){
      if(this.authenticated){
           return this.User;
      }
      return null;
    }
  }
  
  export default new Auth();
  