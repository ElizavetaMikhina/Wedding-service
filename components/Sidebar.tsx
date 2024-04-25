import React, { useState } from 'react';
import MenuItem from './UI/MenuItem';
import menuItems from '../data/menuItemsData';

const Sidebar: React.FC = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setActiveItem(index === activeItem ? null : index);
    };

    return (
        <aside className="sidebar">
            <nav className="sidebar__nav">
                <ul className="sidebar__menu">
                    {menuItems.map((item, index) => (
                        <MenuItem 
                            key={index} 
                            iconSrc={item.iconSrc}
                            selectedIconSrc={item.selectedIconSrc}
                            menuText={item.menuText} 
                            isActive={index === activeItem}
                            onClick={() => handleItemClick(index)}
                            isSeparator={item.isSeparator}
                        />
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;