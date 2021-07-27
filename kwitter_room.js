 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA1PpoLsY9eji7vGcgPI5pb_C-OwI8AGp4",
  authDomain: "kwitter-522a0.firebaseapp.com",
  databaseURL: "https://kwitter-522a0-default-rtdb.firebaseio.com",
  projectId: "kwitter-522a0",
  storageBucket: "kwitter-522a0.appspot.com",
  messagingSenderId: "304720878075",
  appId: "1:304720878075:web:bc6e056ef02a331dd7535e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);






user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";




function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}




function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
  



getData();




function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}






function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}