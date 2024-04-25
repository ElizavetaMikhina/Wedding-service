import React from 'react';
import ArticleSection from './UI/ArticleSection';
import { weddingData, brideListItems, groomListItems } from '../data/weddingData';
import Select from './UI/Select';
import ImageSlider from './UI/ImageSlider';
import ArticleListSection from './UI/ArticleListSection';
import Favorite from './UI/Favorite';
import { brideImages, groomImages } from '../data/weddingImages';
import selectOptions from '../data/selectOptions';

const MainContent: React.FC = () => {
    return (
        <div className="main-content">
            <div className="content-container">
                <ArticleSection 
                    title={weddingData[0].title}
                    headingTag="h1"
                    description={weddingData[0].description}
                />
                <Favorite iconSrc="/img/like.svg" text="Избранное" count={0} />
            </div>
            <Select 
                options={selectOptions} 
                onSelect={(selectedOption) => { console.log('Selected option:', selectedOption); }}
                title="Стиль свадьбы" 
            />
            <div className="slider-wrapper">
                <ImageSlider images={brideImages} title="Невеста" />
                <ImageSlider images={groomImages} title="Жених" />
            </div>
            <ArticleSection 
                title={weddingData[1].title}
                headingTag="h2"
                description={weddingData[1].description}
            />
            <div className="list-wrapper">
                <ArticleListSection items={brideListItems} title={'Невеста'} headingTag={'h2'} />
                <ArticleListSection items={groomListItems} title={'Жених'} headingTag={'h2'} />
            </div>
        </div>
    );
}

export default MainContent;