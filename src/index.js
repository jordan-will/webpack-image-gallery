import { getImages } from "./service/axios";

console.log('Project running...')

const gallery = document.getElementById('gallery');
console.log('gallery ', gallery)

const addImage = (image) => {
        const img = document.createElement('img');
        img.src = image.src.portrait;
        img.className = 'image-item';
        img.addEventListener('click', () => {
            //window.location.href = `pages/image.html?src=${image.url}`;
            alert('Clicou na imagem')
        });
        gallery.appendChild(img)
    }

    getImages()
        .then((img) => {
            console.log('Images')
            const images = img['data']['photos']
            console.log(images)
            images.forEach((image)=>{
                console.log('image ', image)
                addImage(image)
            })

        })
        .catch((err) => {
            console.log('Erro on get images ', err)
        })


