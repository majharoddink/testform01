
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDlkuilPvt4vfbXcj4szFr3E2nI7jljb_A",
    authDomain: "testfor01-78ddb.firebaseapp.com",
    databaseURL: "https://testfor01-78ddb.firebaseio.com",
    projectId: "testfor01-78ddb",
    storageBucket: "testfor01-78ddb.appspot.com",
    messagingSenderId: "362234845246",
    appId: "1:362234845246:web:75e8fce1750300bdf9596f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();


    function signUp(){
        
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        alert("Signed Up");
    }
    
    
    
    function signIn(){
        
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        
        
        
    }
    
    
    function signOut(){
        
        auth.signOut();
        alert("Signed Out");
        
    }
    
    
    
    auth.onAuthStateChanged(function(user){
        
        if(user){
            
            var email = user.email;
            alert("Active User " + email);
            
            //Take user to a different or home page

            //is signed in
            
        }else{
            
            alert("No Active User");
            //no user is signed in
        }
        
        
        
    });
    
