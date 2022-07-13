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
var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name1 = message_data['name'];
         message = message_data["message"];
         name_with_tag ="<h4 style='top-margin:20;'>" + name1 + "<img class='user_tick' src='tick.png'> </h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
row = name_with_tag + message_with_tag;

if(name1 == user_name){
  row = "<span style='text-align:right;'>"+row+"</span>";
}
else{
  row = "<span style='text-align:left;'>"+row+"</span>";
}

document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
  });

  document.getElementById("msg").value = "";
}


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
}
