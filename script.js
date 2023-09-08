

// Array dei post
let posts = [

    {
        id: 1,
        name: 'Gianluca',
        lastName: 'Vallese',
        profilePic: 'https://picsum.photos/100/100?random=1',
        date: new Date(2022,3,4),
        text: 'Questo è il testo del post.',
        image: 'https://picsum.photos/400/200?random=2',
        likes: 96,
        likeOn: false
    },

    {
        id: 2,
        name: 'Mario',
        lastName: 'Rossi',
        profilePic: '',
        date: new Date(2023,7,4),
        text: 'Questo è un post senza immagine e senza profile pic.',
        image: '',
        likes: 112,
        likeOn: false
    }

];

console.log(posts);

// Seleziono nodi DOM
let postsContainer = document.getElementById('postsContainer');

// Creo feed
for (let i = 0; i < posts.length; i++) {
    
    postMarkupCreation(postsContainer,posts[i]);
    
}

// Seleziono bottoni likes
let btnLikes = document.querySelectorAll('button.btn');

// Creo event listener
for (let i = 0; i < btnLikes.length; i++) {
    
    btnLikes[i].addEventListener('click', function(){
        modifyLikes(posts[i])
    })
    
}



/* Sezione function */

function postMarkupCreation(postsContainer,post) {

    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let profilePicMarkup;
    if (post.profilePic == '') {

        profilePicMarkup = `
        <div class="rounded-circle text-bg-dark ratio ratio-1x1 p-0 m-0 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
            ${post.name[0] + post.lastName[0]}
        </div>
        `;

    } else {
        profilePicMarkup = `
            <img src="${post.profilePic}" width="50" class="rounded-circle" alt="">
        `;
    }

    let postImageMarkup;
    if (post.image == '') {

        postImageMarkup = ``;

    } else {
        postImageMarkup = `
            <img src="${post.image}" class="w-100 py-2" alt="">
        `;
    }
    
    let postMarkup = `
    <div class="text-bg-light d-flex flex-column align-items-center w-50 p-3 mb-5 rounded">
    
        <div class="d-flex align-items-center w-100 py-2">
    
            ${profilePicMarkup}
    
            <div class="px-4">
                <h5 class="p-0 m-0 mb-1">${post.name + ' ' + post.lastName}</h5>
                <p class="p-0 m-0">${post.date.toLocaleDateString('it-IT',dateOptions)}</p>
            </div>
    
        </div>
        
        <div class="w-100 py-2">
            ${post.text}
        </div>

        ${postImageMarkup}
        
        <div class="d-flex align-items-center justify-content-around w-100 py-2">
    
            <button type="button" id="btnLikes${post.id}" class="btn btn-light fw-bold">
                <i class="fa-solid fa-thumbs-up"></i> Mi piace
            </button>
    
            <div>
                Piace a <span id="numbLikes${post.id}" class="fw-bold">${post.likes}</span> persone
            </div>
    
        </div>
    
    </div>
    `;
    
    postsContainer.innerHTML += postMarkup;

}


function modifyLikes(post) {

    console.log(post)

    if (!post.likeOn) {
        
        // cambio classe al bottone
        let btnToUpdate = document.getElementById('btnLikes' + post.id);
        btnToUpdate.classList.remove('btn-light');
        btnToUpdate.classList.add('btn-dark');
        post.likeOn = true;
        
        // cambio numero like
        let likesToUpdate = document.getElementById('numbLikes' + post.id);
        let likesValue = Number(likesToUpdate.innerHTML);
        likesValue += 1;
        likesToUpdate.innerHTML = likesValue;

    } else if (post.likeOn) {
        
        // cambio classe al bottone
        let btnToUpdate = document.getElementById('btnLikes' + post.id);
        btnToUpdate.classList.remove('btn-dark');
        btnToUpdate.classList.add('btn-light');
        post.likeOn = false;
        // cambio numero like
        let likesToUpdate = document.getElementById('numbLikes' + post.id);
        let likesValue = Number(likesToUpdate.innerHTML);
        likesValue -= 1;
        likesToUpdate.innerHTML = likesValue;

    }

}
