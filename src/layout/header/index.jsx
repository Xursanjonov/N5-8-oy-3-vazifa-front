import React, { Fragment, memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    return (
        <Fragment>
            <header className="header">
                <nav className="header__nav">
                    <a className="header__logo" href="/index.html">
                        <h3>Header</h3>
                    </a>
                    <ul className="header__ul">
                        <Link to={'/'}>Home</Link>
                        <li onClick={() => navigate('/create-user')} className="add__user">Create User</li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default memo(Header)