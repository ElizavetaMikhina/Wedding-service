import React, { useState } from 'react';

interface MenuItemProps {
    iconSrc?: string;
    selectedIconSrc?: string;
    menuText: string;
    isActive: boolean;
    onClick: () => void;
    isSeparator?: boolean;
}

const MenuItem: React.FC<MenuItemProps & { isActive: boolean, onClick: () => void }> = ({ iconSrc, selectedIconSrc, menuText, isActive, onClick, isSeparator }) => {
    const className = `sidebar__menu-item ${isActive ? 'active' : ''} ${isSeparator ? 'separated' : ''}`;

    return (
        <li 
            className={className} 
            onClick={onClick}
        >
            <a href="#" className="sidebar__menu-link">
                <div className="sidebar__menu-icon-wrapper">
                    {(iconSrc || selectedIconSrc) && 
                        <img 
                            src={isActive ? selectedIconSrc : iconSrc} 
                            alt={menuText} 
                            className="sidebar__menu-icon" 
                        />
                    }
                </div>
                <span className="sidebar__menu-text">{menuText}</span>
            </a>
        </li>
    );
}

export default MenuItem;