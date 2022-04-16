import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const index = () => {
  return (
    <div className='xbagend'>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark- bg-dark">
                <div>
                    <Link to="/">xbagenda</Link>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default index