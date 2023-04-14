import React from 'react'
import "../styles/layout/Main.scss"

/**
 * @returns {JSX.Element} JSX element for principal container "Main" on which all children section depend
 */

function Main({children}) {
    
  return <div className='main'>{children}</div>
}

export default Main