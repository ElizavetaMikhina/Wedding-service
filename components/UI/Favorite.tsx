import React from 'react'

interface FavoriteProps {
    iconSrc: string;
    text: string;
    count: number;
}

const Favorite: React.FC<FavoriteProps> = ({ iconSrc, text, count }) => {
    return (
        <div className="favorite">
            <div className="favorite__icon-wrapper">
                <img src={iconSrc} alt="Favorite" className="favorite__icon" />
                <div className="favorite__count">{count}</div>
            </div>
            <span className="favorite__text">{text}</span>
        </div>
    );
}

export default Favorite;