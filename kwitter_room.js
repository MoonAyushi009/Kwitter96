
const firebaseConfig = {
  apiKey: "AIzaSyBA0oPpJrX2K9j8X58nhkuCrZO9LBkPusk",
  authDomain: "kwitterayushi.firebaseapp.com",
  databaseURL: "https://kwitterayushi-default-rtdb.firebaseio.com",
  projectId: "kwitterayushi",
  storageBucket: "kwitterayushi.appspot.com",
  messagingSenderId: "637771886831",
  appId: "1:637771886831:web:c3507a2c727d81c873eb1a",
  measurementId: "G-3E8PL5WL6L"
};

firebase.initializeApp(firebaseConfig);


 
 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
