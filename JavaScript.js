
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { auth } from "./config.js";

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

signupForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
});

loginForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
});

onAuthStateChanged(auth, (user) => {
  console.log(user ? "User is logged in" : "No user logged in");
});

export async function logout() {
  await signOut(auth);
  window.location.href = "index.html";
                             }
