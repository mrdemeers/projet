import React from 'react'
import './header_film.css';
import Logo from  "../components/Logo";
const Header = () => {
    return (
        <div className="banner container-fluid">
            <div>
                <h1>Panaroma</h1>
                <h2>2020 | independent | horror | 4K</h2>
                <p>
                    A group of archaeologists uncover a strange structure in Northern
                    Canada, dating over ten thousand years before the present. The team
                    finds themselves isolated when their communication systems fail and
                    it’s not long before they begin to feel the effects of the solitude.
                </p>
                <a class="button" href="#popup"> Watch Trailer </a>
            </div>
            <div></div>
        </div>
    )
}

export default Header
