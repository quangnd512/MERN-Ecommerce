import React from 'react';
import Layout from '../../components/Layout';
import {ModalHeader} from 'react-bootstrap';

const Home = () => {
    return (
        <Layout>
            <ModalHeader className='text-center' style={{display:'block'}}>
                <h1>Welcome to Admin Dashboard</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </ModalHeader>
        </Layout>
    );
}

export default Home;
