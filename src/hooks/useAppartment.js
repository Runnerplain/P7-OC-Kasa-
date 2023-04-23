import { useEffect, useState } from "react";
import flats from '../db.json' 



/**
 * @function
 * @returns {Object|null} An object representing the details of the apartment or null if no corresponding apartment
 */

export function useAppartment(flatId) {


  const [flat, setFlat] = useState(null)
  

  /*This useEffect with AbortController allow the DOM to 
  clean all fetch demand when changing*/

  useEffect(() => {
    const abortController = new AbortController();
    
    const flat = flats.find(flat => flat.id === flatId);

    if (!flat) {
      setFlat(null)           /* Changement post soutenance */
      return
    }
    setFlat(flat)
    return () => {
      abortController.abort()
    }
  }, [flatId])
  return flat;
}

