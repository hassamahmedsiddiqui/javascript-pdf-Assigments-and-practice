

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";

const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);

const storage = getStorage();


let upload = document.getElementById("upload");


const uploadFile = (file) => {
    return new Promise((resolve, reject) => {
        const mountainsRef = ref(storage, `images/saylani/${file.name}`);
        const uploadTask = uploadBytesResumable(mountainsRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    })
}

upload.addEventListener('click', async () => {
    try {
        let file = document.getElementById("file");
        const res = await uploadFile(file.files[0])
        console.log("res-->", res)
        let img = document.getElementById("img");
        img.src = res;
    } catch (err) {
        console.log(err)
    }
})

let deleteBtn = document.getElementById("delete-file")
deleteBtn.addEventListener('click', () => {
    const desertRef = ref(storage, 'images/Group 8.png');

    deleteObject(desertRef).then((res) => {
        console.log("res--->", res)
    }).catch((error) => {
        console.log(error)
    });
})