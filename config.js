
import { initializeApp, getApp, getApps } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDggnZQRpuCnoZ91Vmym_Izkbe0yTpCxGc",
  authDomain: "satishdevnp1.firebaseapp.com",
  projectId: "satishdevnp1",
  storageBucket: "satishdevnp1.firebasestorage.app",
  messagingSenderId: "742944901732",
  appId: "1:742944901732:web:07275492ed919876762d71",
  measurementId: "G-SMQZC70B08"
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
  
