var firebaseConfig = {
  apiKey: "AIzaSyDipV58AR9MEtw7H4K88bY-ar89cBHROhg",
  authDomain: "databases-2f0a2.firebaseapp.com",
  databaseURL: "https://databases-2f0a2-default-rtdb.firebaseio.com",
  projectId: "databases-2f0a2",
  storageBucket: "databases-2f0a2.appspot.com",
  messagingSenderId: "27240971622",
  appId: "1:27240971622:web:62c39edf8f297b356f5ca7",
  measurementId: "G-YFV42WRSJJ"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name_display").innerHTML = " Welcome : " + user_name;



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
         document.getElementById("output").innerHTML += row;  
      });});}
getData();

function addRoom(){
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
     });

     localStorage.setItem("room_name" , room_name);

     window.location = "kwitter_page.html";
}


function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location="kwitter_page.html";
}


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
}