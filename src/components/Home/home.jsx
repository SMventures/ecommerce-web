import React from 'react';
import { Box, styled } from '@mui/material';
import { Fragment } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection'; 
const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`;

const Home = () => {
    return (
        <Fragment>
            <NavBar />
            <Component>
                <Banner />
                
               
                <MidSlide title="Deal of the Day" timer={true}/>
                <Slide title="New Arrivals" timer={false}/>
                <Slide title="Season's Top Pickup" timer={false}/>
                <MidSection/>
                {/* <Slide title="Trending Offers"timer={false}/> */}
                <Slide title="Best of Electronics"timer={false}/>
                <Slide title="Recommendations"timer={false}/>
                <Slide title="Best Selling Books"timer={false}/>
                <Slide title="Trendy Fashion Collection"timer={false}/>
                {/* <Slide title="Top Deals on Accessories"timer={false}/> */}



                </Component>
             
                </ Fragment>
                
                
                   
        
    )
}

export default Home;
