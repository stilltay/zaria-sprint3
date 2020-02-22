// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBeGN6Pm4OAZ-89ca5YtmQIkXul8ZhMwSs",
    authDomain: "zaria-eb49c.firebaseapp.com",
    projectId: "zaria-eb49c",
  });

var db = firebase.firestore();

// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {

//         console.log(`${doc.id} => ${doc.data().score}`);
//     });
// });

document.getElementById("surveySubmission").addEventListener('click', e=>{
    const happNum = document.getElementById("happiness").value;
    console.log("I entered doc.get");

    db.collection("users").add({
            time: Date.now(),
            score: happNum,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
  })

//   db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {

//         console.log(`${doc.id} => ${doc.data().score}`);
//     });
// });