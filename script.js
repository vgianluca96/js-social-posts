

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
        likes: 96
    },

    {
        id: 2,
        name: 'Mario',
        lastName: 'Rossi',
        profilePic: '',
        date: new Date(2022,9,4),
        text: 'Questo è un post senza immagine.',
        image: '',
        likes: 112
    }

];

console.log(posts);

// Seleziono nodi DOM
let postsContainer = document.getElementById('postsContainer');


for (i = 0; i < posts.length; i++) {

    postMarkupCreation(postsContainer,posts);

}



/* Sezione function */

function postMarkupCreation(postsContainer,posts) {

    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let profilePicMarkup;
    if (posts[i].profilePic == '') {

        profilePicMarkup = `
        <div class="rounded-circle text-bg-dark ratio ratio-1x1 p-0 m-0 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
            ${posts[i].name[0] + posts[i].lastName[0]}
        </div>
        `;

    } else {
        profilePicMarkup = `
            <img src="${posts[i].profilePic}" width="50" class="rounded-circle" alt="">
        `;
    }

    let postImageMarkup;
    if (posts[i].image == '') {

        postImageMarkup = ``;

    } else {
        postImageMarkup = `
            <img src="${posts[i].image}" class="w-100 py-2" alt="">
        `;
    }
    
    let postMarkup = `
    <div class="text-bg-light d-flex flex-column align-items-center w-50 p-3 mb-5 rounded">
    
        <div class="d-flex align-items-center w-100 py-2">
    
            ${profilePicMarkup}
    
            <div class="px-4">
                <h5 class="p-0 m-0 mb-1">${posts[i].name + ' ' + posts[i].lastName}</h5>
                <p class="p-0 m-0">${posts[i].date.toLocaleDateString('it-IT',dateOptions)}</p>
            </div>
    
        </div>
        
        <div class="w-100 py-2">
            ${posts[i].text}
        </div>

        ${postImageMarkup}
        
        <div class="d-flex align-items-center justify-content-around w-100 py-2">
    
            <button id="btnLikes" class="btn btn-light fw-bold">
                <i class="fa-solid fa-thumbs-up"></i> Mi piace
            </button>
    
            <div>
                Piace a <span class="fw-bold">${posts[i].likes}</span> persone
            </div>
    
        </div>
    
    </div>
    `;
    
    postsContainer.innerHTML += postMarkup;

}