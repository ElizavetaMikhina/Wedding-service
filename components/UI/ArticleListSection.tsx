import React from 'react';

interface ArticleListSectionProps {
    title: string;
    items: string[];
    headingTag: keyof JSX.IntrinsicElements;
}

const ArticleListSection: React.FC<ArticleListSectionProps> = ({ title, items, headingTag: HeadingTag }) => {
    return (
        <div className="article-list-section">
            <HeadingTag className="article-list-section__title">{title}</HeadingTag>
            <ul className="article-list-section__list">
                {items.map((item, index) => (
                    <li key={index} className="article-list-section__item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleListSection;
