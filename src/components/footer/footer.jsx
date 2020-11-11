import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../../styles/footer.scss';
import logo from '../../images/footer-logo.png';
import appstore from '../../images/appstore.png';
import googleplay from '../../images/googleplay.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer() {


    return (
        <div className='footer-section'>
            <Container>
                <Row>
                    <Col className='left-footer'>

                        <img src={logo} alt="Logo" />

                        <h4>LET US HELP YOU</h4>


                        <p>  Help Center </p>
                        <p>  How to shop on eMedicstore </p>
                        <p>  Delivery options and timelines </p>
                        <p> How to return a product on emedicstore? </p>
                        <p> Corporate and bulk purchases </p>
                        <p> Report a Product </p>


                    </Col>


                    <Col className='middle-footer' xs={5}>
                        <div className='middle-upper'>
                            <h4>New to eMedicstore?</h4>
                            <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                            <form>
                                <input type='text' placeholder='Enter your Email here'></input>
                            </form>
                        </div>



                        <h4>ABOUT eMedicstore</h4>
                        <p>   About us </p>
                        <p> emedicstore careers</p>
                        <p>  Terms and Conditions</p>
                        <p>  Privacy policy</p>
                        <p> Stay Safe</p>
                        <p> Black Friday</p>

                    </Col>




                    <Col className='footer-right'>
                        <h4>DOWNLOAD eMedicstore APP</h4>
                        <p>Get access to exclusive offers!</p>

                        <img id='appstore' src={appstore} alt="appstore" />
                        <img id='googleplay' src={googleplay} alt="googleplay" />

                        <h3>JOIN US</h3>
                        <div className='social-footer'>
                            <FontAwesomeIcon  icon={['fab', 'facebook']} />
                            <FontAwesomeIcon  icon={['fab', 'instagram']} />
                            <FontAwesomeIcon  icon={['fab', 'twitter']} />
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;