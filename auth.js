
const supabaseClient = window.supabase.createClient(
  window.SUPABASE_URL,
  window.SUPABASE_PUBLISHABLE_KEY
);

// SIGN UP — email verification required
async function signUp(email, password, fullName) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
      emailRedirectTo: window.location.origin + "/login.html"
    }
  });

  if (error) throw error;
  return data;
}

// LOGIN — email + password
async function login(email, password) {
  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if (error) throw error;
  return data;
}

// SEND LOGIN OTP — existing accounts only
async function sendEmailCode(email) {
  const { error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: { shouldCreateUser: false }
  });

  if (error) throw error;
}

// VERIFY LOGIN OTP
async function verifyEmailCode(email, code) {
  const { data, error } = await supabaseClient.auth.verifyOtp({
    email,
    token: code,
    type: "email"
  });

  if (error) throw error;
  return data;
}

// GOOGLE LOGIN
async function loginWithGoogle() {
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + "/login.html"
    }
  });

  if (error) throw error;
}

// FACEBOOK LOGIN
async function loginWithFacebook() {
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: "facebook",
    options: {
      redirectTo: window.location.origin + "/login.html"
    }
  });

  if (error) throw error;
}

// LOGOUT
async function logout() {
  const { error } = await supabaseClient.auth.signOut();
  if (error) throw error;
             }
    
