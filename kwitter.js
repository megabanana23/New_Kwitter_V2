function addUser()
    {
        user_name = document.getElementById("user_name").value;
        localStorage.setItem("user_name", user_name);
        window.location = "kwitter_room.html";
    }

    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBciO6HpW2PDYv_i1wt0mdESEjOyKJ4OS4",
  authDomain: "kwitter-new-c12b3.firebaseapp.com",
  projectId: "kwitter-new-c12b3",
  storageBucket: "kwitter-new-c12b3.appspot.com",
  messagingSenderId: "545708895071",
  appId: "1:545708895071:web:11a297364245ea1b0324ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
