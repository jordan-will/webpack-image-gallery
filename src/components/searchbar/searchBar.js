import './searchBar.css';

const createSearchBar = () =>{
    
    const searchBar = document.createElement('div')
    searchBar.classList.add('search-bar')

    const inputSeachBar = document.createElement('input')
    inputSeachBar.type = 'text'
    inputSeachBar.placeholder = 'Search by photos'

    const buttonSeachBar = document.createElement('button')
    buttonSeachBar.textContent = 'Search'


    searchBar.appendChild(inputSeachBar)
    searchBar.appendChild(buttonSeachBar)

    return {
        searchBar,
        inputSeachBar,
        buttonSeachBar
    }
}

export default createSearchBar