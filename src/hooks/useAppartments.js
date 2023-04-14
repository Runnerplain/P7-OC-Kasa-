import { useEffect, useState } from 'react'


/**
 * @function 
 * @returns {Array} function with Fetch method to db.json & method to abort (clean) the DOM when is active
 */
export const useAppartments = () => {
    const [appartments, setAppartments] = useState([])

    /*This useEffect with AbortController allow the DOM to 
    clean all fetch demand when changing*/

    useEffect(() => {
        const abortController = new AbortController();
        fetch('./db.json', { signal: abortController.signal })
            .then((res) => (res.json())
                .then((res) => setAppartments(res)))
            .catch(console.error);

        return () => {
            abortController.abort();
        }
    }, []);
    return appartments
};

