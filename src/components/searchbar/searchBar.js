import './searchBar.css';

const createSearchBar = () => {
    
    const searchBar = document.createElement('div');

    const inputSearchBar = document.createElement('input');
    inputSearchBar.type = 'text';
    inputSearchBar.placeholder = 'Search by photos';
    inputSearchBar.classList.add('search-bar__input');

    const buttonSearchBar = document.createElement('button');
    buttonSearchBar.textContent = 'Search';
    buttonSearchBar.classList.add('search-bar__button'); 

    searchBar.appendChild(inputSearchBar);
    searchBar.appendChild(buttonSearchBar);

    return {
        searchBar,
        inputSearchBar,
        buttonSearchBar
    };
};

export default createSearchBar;
