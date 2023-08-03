// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut }
//   from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
//   import { doc, setDoc ,getFirestore} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"; 

// const firebaseConfig = {
//   apiKey: "AIzaSyDuRKkLMTKOxdYJ9QIfDRHZsB36KbrsCqE",
//   authDomain: "fir-assigment-e923c.firebaseapp.com",
//   projectId: "fir-assigment-e923c",
//   storageBucket: "fir-assigment-e923c.appspot.com",
//   messagingSenderId: "97178963752",
//   appId: "1:97178963752:web:83d5f2ec0d7312e139ca1d",
//   measurementId: "G-TD856XT58T"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth();
// const db = getFirestore();
let getNews = (search, page) => {
    fetch(`https://api.newscatcherapi.com/v2/search?q=${search}&page_size=12&page=${page ? page : 1}`, {
        headers: {
            'x-api-key': 'tALHqDfvsKylZD8tlTKTuQokjTsT7MdX2hGRWPghptM'
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            let news = document.getElementById("news");
            const articles = res.articles
            for (var i = 0; i < articles.length; i++) {
                const { media, title, summary } = articles[i];
                console.log(articles[i])
                news.innerHTML += `
        <div class="card mt-2" style="width: 18rem;">
        <img src="${media}" class="news-image card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${title.slice(0, 20)}...</h5>
        <p class="card-text">${summary.slice(0, 50)}...</p>
        </div>
        </div>
        `
            }
        })
        .catch(err => console.log(err))
}

getNews()

let page = 1;

let newsSearch = () => {
    let news = document.getElementById("news");
    let search = document.getElementById("search");
    news.innerHTML = ""
    getNews(search.value)
}

let loadMore = () => {
    let search = document.getElementById("search");
    page++
    getNews(search.value, page)
}
