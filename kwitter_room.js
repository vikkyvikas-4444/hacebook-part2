const firebaseConfig = {
    apiKey: "AIzaSyB7wSGycsowjDB6qiFhPNzGyF37XzxpQ3s",
    authDomain: "hacebook-room.firebaseapp.com",
    databaseURL: "https://hacebook-room-default-rtdb.firebaseio.com",
    projectId: "hacebook-room",
    storageBucket: "hacebook-room.appspot.com",
    messagingSenderId: "376074970987",
    appId: "1:376074970987:web:cc1a45d291d5958dcfce2e",
    measurementId: "G-4LZFM3WZGB"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
  console.log("Room Name - " Room_names);
 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
 document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome  " + user_name;

function addRoom()
{

      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
   purpose:"adding room name"

 }
);

localStorage.setItem("room_name" , room_name);
window.location="kwitter_page.html";


}

function redirectToRoomName(name)
{

      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location="kwitter_page.html";
}
