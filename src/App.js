import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './assets/css/reset.css';
import './assets/css/style.css';

import Header from './components/Header';
import Main from './components/Main';
import Slider from './components/Slider';
import Image from './components/Image';
import ImgText from './components/ImgText';
import Card from './components/Card';
import Text from './components/Text';
import Publication from './pub';
import Srax from './Srax';
import Contact from './Contact';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => {
    return (
        <Router>
            <Header element="nexon" />
            <Routes>
                <Route path="/" element={
                    <Main>
                        <Slider element="nexon" />
                        <Image element="section nexon" title="Our research scope" />
                        <ImgText element="section nexon gray" title="이미지 텍스트 유형" />
                        <Text element="section nexon" title="" />
                        <Card element="section nexon" title="Partnership" />
                    </Main>
                } />
                <Route path="/Publication" element={<Publication />} />
                <Route path="/Srax" element={<Srax />} /> {/* Add the route for Srax.js */}
                <Route path="/Contact" element={<Contact />} /> {/* Add the route for Srax.js */}
                <Route path="/page1" element={<Page1 />} /> {/* Page1로 연결 */}
            </Routes>
        </Router>
    );
};

export default App;
