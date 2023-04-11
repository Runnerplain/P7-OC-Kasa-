import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export function useAppartment() {

const [flat, setFlat] = useState(null)
const location = useLocation();

useEffect(() => {
    const abortController = new AbortController();
    fetch("db.json")
        .then((res) => res.json())
        .then((flats) => {
            const flat = flats.find(flat => flat.id === location.state.AppartmentId);
            setFlat(flat)
        })
        .catch(console.error)
  return () => {
    abortController.abort()
  }
}, [])
    return flat;
}

