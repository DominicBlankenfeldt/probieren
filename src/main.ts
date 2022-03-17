import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9KaqvdcVDYd-zkIqRumFJLJq03TtqAGM",
  authDomain: "test-599b6.firebaseapp.com",
  projectId: "test-599b6",
  storageBucket: "test-599b6.appspot.com",
  messagingSenderId: "798639786545",
  appId: "1:798639786545:web:f4a42108372e9674b26310",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
