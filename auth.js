
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { auth } from "./config.js";

// SIGNUP
export async function signup(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return {
      success: true,
      user: userCredential.user
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
}

// LOGIN
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return {
      success: true,
      user: userCredential.user
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
}

// LOGOUT
export async function logout() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
}

// CHECK LOGIN STATUS
export function checkAuth(callback) {
  return onAuthStateChanged(auth, callback);
  }
      
