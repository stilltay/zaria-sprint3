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

  document.getElementById("btnLogOut").addEventListener('click', e=>{
    firebase.auth().signOut();
    window.location.replace("../index.html");
  })