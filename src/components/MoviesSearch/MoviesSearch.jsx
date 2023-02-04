import { useState } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const MoviesSearch = () => {
    const [searchName, setSearchName] = useState('');

    const handleChange = event => {
        setSearchName(event.target.value.toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchName('');
        if (searchName.trim() === '') {
            toast.error(' Entry movie name!');
            return;
        }
}

    return(
        <form onSubmit={handleSubmit}>
            <input>
                type="text"
                name="searchName"
                autoFocus
                autocomplete="off"
                value={searchName}
                onChange={handleChange}
                placeholder="Search movie..."
            </input>
            <button type="submit">Search</button>
        </form>
    )
}
