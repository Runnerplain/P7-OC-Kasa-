import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



/**
 * @function
 * @returns {Object|null} An object representing the details of the apartment or null if no corresponding apartment
 */

export function useAppartment() {

  const [flat, setFlat] = useState(null)
  const location = useLocation();

  /*This useEffect with AbortController allow the DOM to 
  clean all fetch demand when changing*/

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
  }, [location.state.AppartmentId])
  return flat;
}

