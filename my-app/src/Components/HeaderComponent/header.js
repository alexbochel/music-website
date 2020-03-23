import React from 'react';

function Header() {
  return (
    <header>
        <div>
           <nav>
                <ul>
                    
                    <div className="logo">
                        <a href='#'>Alex Bochel Music</a>
                    </div>
                    
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Music</a>
                    </li>
                    <li>
                        <a href='#'>Media</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="banner">
            <img className="banner-image" src="/../../../headerBanner.JPG">
            </img>
        </div>

    </header>
  );
}

export default Header;
