import React, { memo } from 'react'

const Header = () => {

    return (
        <header className="header">
            <nav className="header__nav">
                <a className="header__logo" href="/index.html">
                    <h3>Header</h3>
                </a>
                <ul className="header__ul">
                    <a href="/index.html">Home</a>
                    <li className="add__user">Create User</li>
                </ul>
            </nav>
        </header>
    )
}

export default memo(Header)