import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Head from 'next/head';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>Образы жениха и невесты</title>
            </Head>
      
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
};

export default HomePage;
