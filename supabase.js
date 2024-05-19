//import supabase createclient

const SUPABASE_URL = "https://mzmygwyomxljknpdfitw.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16bXlnd3lvbXhsamtucGRmaXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1MDQyNzYsImV4cCI6MjAzMTA4MDI3Nn0.c7UD0vwAVnjkDCKLswSVhksQ9XYt4JH6u2HiDjt1EP4";
//! New Code

window.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
// Wait for the supabase object to be available
window.addEventListener("load", () => {
  // Now you can use the supabase client
  window.supabase
    .from("table_name")
    .select("*")
    .then(({ data, error }) => {
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log("Data:", data);
      }
    });
});

//! New Code END

// const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// window.userToken = null;

// document.addEventListener("DOMContentLoaded", function (event) {
//   const signUpForm = document.querySelector("#signUpButton");
//   signUpForm.onsubmit = signUpSubmitted.bind(signUpForm);

//   const logInForm = document.querySelector("#log-in");
//   logInForm.onsubmit = logInSubmitted.bind(logInForm);
// });

// const signUpSubmitted = (event) => {
//   event.preventDefault();
//   const email = event.target[0].value;
//   const password = event.target[1].value;

//   supabase.auth
//     .signUp({ email, password })
//     .then((response) => {
//       response.error ? alert(response.error.message) : setToken(response);
//     })
//     .catch((err) => {
//       alert(err);
//     });
// };

// const logInSubmitted = (event) => {
//   event.preventDefault();
//   const email = event.target[0].value;
//   const password = event.target[1].value;

//   supabase.auth
//     .signIn({ email, password })
//     .then((response) => {
//       response.error ? alert(response.error.message) : setToken(response);
//     })
//     .catch((err) => {
//       alert(err.response.text);
//     });
// };

// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://mzmygwyomxljknpdfitw.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16bXlnd3lvbXhsamtucGRmaXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1MDQyNzYsImV4cCI6MjAzMTA4MDI3Nn0.c7UD0vwAVnjkDCKLswSVhksQ9XYt4JH6u2HiDjt1EP4";
// const supaClient = createClient(supabaseUrl, supabaseKey);

// Google OAuth

// const logInBtn = document.getElementById("signInBtn");
// logInBtn.addEventListener("click", () => {
//   supabase.auth.signInWithOAuth({
//     provider: "google",
//   });
// });

// const signupBtn = document.getElementById("signUpBtn");
// signupBtn.addEventListener("click", async () => {
//   try {
//     let { data, error } = await supabase.auth.signUp({
//       email: "someone@email.com",
//       password: "ZcwaEpCoOaLLmrSKhasx",
//     });
//   } catch (error) {
//     console.log("error");
//   }
// });
