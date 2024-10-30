import { getImages } from "./service/axios";
import createSearchBar from "./components/searchbar/searchBar";
import '../public/style.css';

const searchBar = document.getElementById('searchBar')
const gallery = document.getElementById('gallery');
let page = 1

const { searchBar: search, inputSeachBar, buttonSeachBar } = createSearchBar()
searchBar.appendChild(search)

gallery.addEventListener('scroll', ()=>{
    console.log(gallery.scrollTop, gallery.clientHeight, gallery.scrollHeight)
    if (gallery.scrollTop + gallery.clientHeight >= (gallery.scrollHeight - 10)) {
        page+=1
        setImages(inputSeachBar.value || 'Amazon animals', page)
    }
});


buttonSeachBar.addEventListener('click', () => {
    if (!inputSeachBar.value) {
        alert('Insert the field of the search')
        return
    }
    gallery.innerHTML = ''
    page=1
    setImages(inputSeachBar.value)

})

const addImage = (image) => {
    const img = document.createElement('img');
    img.src = image.src.portrait;
    img.classList.add('image-item');
    gallery.appendChild(img)
}

const setImages = (search = 'Amazon Animals', page = 1) => {
    getImages(search, page)
        .then((img) => {
            console.log('Images', img)
            const images = img['data']['photos']
            console.log(images)

            images.forEach((image) => {
                console.log('image ', image)
                addImage(image)
            })

        })
        .catch((err) => {
            console.log('Erro on get images ', err)
        })
}

setImages()


