import Image from 'next/image';
import React from 'react'
import ProfileLink from './UI/ProfileLink';

const Header = () => { 
    return (
        <header className="header">
            <div className="header__logo">
                <button className="header__burger">
                    <Image src="img/burger-menu.svg" alt="Меню" width={24} height={24} />
                </button>
                <div className="header__logo-image">
                    <Image src="img/logo.svg" alt="Логотип" width={77} height={43} />
                </div>
            </div>
            <nav className="header__nav">
                <ProfileLink profileName="Александра М." profilePhoto="/img/user-photo.png" />
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <a href="#" className="header__nav-link">
                            <Image src="img/settings.svg" alt="Настройки" width={24} height={24} />
                        </a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#" className="header__nav-link">
                            <Image src="img/notifications.svg" alt="Уведомления" width={24} height={24} />
                        </a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#" className="header__nav-link">
                            <Image src="img/logout.svg" alt="Выход" width={24} height={24} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header
