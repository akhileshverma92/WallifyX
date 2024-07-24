import React  from 'react'
import './Nav.css'

function Nav() {

    

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <>
          <div className='nav'>
            <p>WALLI<span>FY</span></p>
            <button onClick={logout}
            >LOG OUT</button>
        </div>

        </>
      

      
    )
}

export default Nav