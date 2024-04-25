import React from 'react'

interface ArticleSectionProps {
    title: string;
    headingTag: keyof JSX.IntrinsicElements;
    description: string;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ title, headingTag: HeadingTag, description }) => {
    return (
        <div className="article-section">
            <HeadingTag className="article-section__title">{title}</HeadingTag>
            <p className="article-section__description">{description}</p>
        </div>
    );
}

export default ArticleSection
