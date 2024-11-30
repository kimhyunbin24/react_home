import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header id="headerType" className={`header__wrap ${props.element}`}>
            <div className="header__inner">
                <div className="header__logo">
                    {/*<Link to="/">web <em>site</em></Link>*/}
                </div>
                <nav className="header__menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Publication">Publication</Link></li>
                        <li><Link to="/Srax">DII-SRAX</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>

                    </ul>
                </nav>
                <div className="header__member">
                    {/*<a href="/">로그인</a>*/}
                </div>
            </div>
        </header>
    );
};

export default Header;
