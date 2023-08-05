import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore,collection,addDoc ,getDocs, updateDoc,doc ,serverTimestamp  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDuRKkLMTKOxdYJ9QIfDRHZsB36KbrsCqE",
    authDomain: "fir-assigment-e923c.firebaseapp.com",
    projectId: "fir-assigment-e923c",
    storageBucket: "fir-assigment-e923c.appspot.com",
    messagingSenderId: "97178963752",
    appId: "1:97178963752:web:83d5f2ec0d7312e139ca1d",
    measurementId: "G-TD856XT58T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);



// let btnReg = document.getElementById('Register-btn')
// btnReg.addEventListener('click',()=>{
//     let name = document.getElementById('name')
//     let phone = document.getElementById('phone')
//     let email = document.getElementById('email')
//     let password = document.getElementById('password')
//     let userData = {
//         name : name.value,
//         phone: phone.value,
//         email : email.value,
//         password: password.value,
        
        
//       }
//       createUserWithEmailAndPassword(auth, userData.email, userData.password)
//       .then(async(userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log('user-->',user)
//         try {
//           const docRef = await addDoc(collection(db, "users"), {
//             ...userData,
//             uid : user.uid,
//             timestamp: serverTimestamp(),
        
//       });
//       console.log('time-->',time)
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log('error-->',error)
//     // ..
//   });
//     // console.log('user-->',user)
// })

// let getAllUsers =async ()=>{

//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} =>`,doc.data());
//   });
// }
// getAllUsers()

let btn = document.getElementById('update-btn')
// console.log(btn)
btn.addEventListener('click',async()=>{
  console.log('current-->', auth.currentUser)
  const id = auth.currentUser.uid
  console.log('id-->',id)
//   const washingtonRef = doc(db, "users", id);
//   let updateName = document.getElementById('updateName')
//   let updatePhone = document.getElementById('updatePhone')
//   // console.log('ref-->',washingtonRef)
//   try{  
//   await updateDoc(washingtonRef, {
//     name: updateName.value,
//     phone: updatePhone.value,
//   });
//   console.log('updated')
// }catch(err){
//   console.log('error-->',err)
// }
})

// import { doc, updateDoc, increment } from "firebase/firestore";

// const washingtonRef = doc(db, "cities", "DC");

// // Atomically increment the population of the city by 50.
// await updateDoc(washingtonRef, {
//     population: increment(50)
// });