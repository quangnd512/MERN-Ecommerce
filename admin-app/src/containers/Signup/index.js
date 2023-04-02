import React from 'react';
import Layout from '../../components/Layout';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import Input from '../../components/UI/Input';

const Signup = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    {/* Use <Input />
                                        Truyền vào các props để tạo ra các element input được viết trong 
                                        src/components/UI/Input
                                    */}
                                    <Input 
                                        label= "First Name"
                                        placeholder="First Name"
                                        value=""
                                        type="text"
                                        onChange={()=>{}}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input 
                                        label= "Last Name"
                                        placeholder="Last Name"
                                        value=""
                                        type="text"
                                        onChange={()=>{}}
                                    />
                                </Col>
                            </Row>

                            <Input 
                                label= "Email"
                                placeholder="Email"
                                value=""
                                type="email"
                                onChange={()=>{}}
                            />

                            <Input 
                                label= "Password"
                                placeholder="Password"
                                value=""
                                type="password"
                                onChange={()=>{}}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Signup;
