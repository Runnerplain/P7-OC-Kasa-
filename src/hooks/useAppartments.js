import { useEffect, useState } from 'react'


 export const useAppartments = () => {
    const [appartments, setAppartments] = useState([])
    
    
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

