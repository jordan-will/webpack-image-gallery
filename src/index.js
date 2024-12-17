import { getImages } from "./service/axios";
import createSearchBar from "./components/searchbar/searchBar";
import '../public/style.css';

const searchBar = document.querySelector('.search-bar');
const gallery = document.querySelector('.gallery');
let page = 1;
const { searchBar: search, inputSearchBar, buttonSearchBar } = createSearchBar();

searchBar.appendChild(search);

gallery.addEventListener('scroll', () => {
    if (gallery.scrollTop + gallery.clientHeight >= (gallery.scrollHeight - 10)) {
        page += 1;
        setImages(inputSearchBar.value || 'Amazon animals', page);
    }
});


buttonSearchBar.addEventListener('click', () => {
    if (!inputSearchBar.value) {
        alert('Insert the field of the search');
        return;
    }
    gallery.innerHTML = '';
    page = 1;
    setImages(inputSearchBar.value);
});

const addImage = (image) => {
    const img = document.createElement('img');
    img.src = image.src.portrait;
    img.classList.add('gallery__item');
    gallery.appendChild(img);
};

const setImages = (search = 'Amazon Animals', page = 1) => {
    getImages(search, page)
        .then((img) => {
            const images = img['data']['photos'];
            images.forEach((image) => {
                addImage(image);
            });

        })
        .catch((err) => {
            console.log('Error on getting images ', err);
        });
};

setImages();
