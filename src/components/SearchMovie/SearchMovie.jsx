import { useState } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SearchMovies = ({onSubmit}) => {
    const [searchName, setSearchName] = useState('');

    const handleChange = event => {
        setSearchName(event.target.value.toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchName.trim() === '') {
            toast.error(' Entry movie name!');
            return;
    }
        setSearchName('');
}

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="searchName"
                autoFocus
                value={searchName}
                onChange={handleChange}
                placeholder="Search movie..."
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchMovies;