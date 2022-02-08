import React from 'react';
import Banner from '../banner/Banner';
import Nav from '../navBar/Nav';
import Row from '../row/Row';
import myRequests from '../api/request';

const Home = () => {
    return <div>
        <Nav></Nav>
        <Banner></Banner>

        <Row title='Netflix Originals' isLarge fetchURL={myRequests.fetchNetflixOriginals}></Row>
        <Row title='Trending Now' fetchURL={myRequests.fetchNetflixOriginals}></Row>
        <Row title='Top Rated' fetchURL={myRequests.fetchTopRated}></Row>
        <Row title='Action Movies' fetchURL={myRequests.fetchActionMovies}></Row>
        <Row title='Comedy Movies' fetchURL={myRequests.fetchComedyMovies}></Row>
        <Row title='Horror Movies' fetchURL={myRequests.fetchHorrorMovies}></Row>
        <Row title='Romantic Movies' fetchURL={myRequests.fetchRomanceMovies}></Row>
        <Row title='Documentaries' fetchURL={myRequests.fetchDocumentaries}></Row>
    </div>;
};

export default Home;
