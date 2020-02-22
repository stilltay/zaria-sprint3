var firebaseConfig = {
    apiKey: "AIzaSyBeGN6Pm4OAZ-89ca5YtmQIkXul8ZhMwSs",
    authDomain: "zaria-eb49c.firebaseapp.com",
    databaseURL: "https://zaria-eb49c.firebaseio.com",
    projectId: "zaria-eb49c",
    storageBucket: "zaria-eb49c.appspot.com",
    messagingSenderId: "514109367920",
    appId: "1:514109367920:web:0ee7c0edb684b110fb36b5",
    measurementId: "G-3JZF17EJY5"
  };
  firebase.initializeApp(firebaseConfig);


  document.getElementById("btnSignUp").addEventListener('click', e=>{
    const email = document.getElementById("txtEmail").value;
    const pass = document.getElementById("txtPassword").value;
    var errorMsg = document.getElementById("errorMsg");
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        errorMsg.innerHTML = error;
    });
  })

  firebase.auth().onAuthStateChanged(user=>{
    if(user){
      window.location.replace("./home.html");
    } else{
      console.log("User not authenticated");
    }
  })