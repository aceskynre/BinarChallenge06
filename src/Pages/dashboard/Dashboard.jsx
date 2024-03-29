import React from 'react'
import logoKotak from '../../Assets/Img/Rectangle 63.png'
import logoHome from '../../Assets/Img/fi_home.png'
import logoTruck from '../../Assets/Img/fi_truck.png'
import logoDashboard from '../../Assets/Img/Rectangle 62.png'
import menu from '../../Assets/Img/fi_menu.png'
import chevron from '../../Assets/Img/fi_chevron-down.png'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

import './Dashboard.css'

export const Dashboard = () => {
    return (
        <div className='main-container'>
            <div className='container-dashboard'>
                <img alt='' src={logoKotak} className='logo-kotak' />

                <div>
                    <a href='dashboard' className='tag'> <i>
                        <img alt='' src={logoHome} className='logo-home' />
                    </i>
                        Dashboard
                    </a>
                </div>

                <div>
                    <a href='cars' className='tag'> <i>
                        <img alt='' src={logoTruck} className='logo-truck' />
                    </i>
                        Cars
                    </a>
                </div>
            </div>

            <div className='navbar-content'>
                <div className='container-navbar'>
                    <Navbar expand="lg" className='navbar-custom'>
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id='navbarScroll'>
                                <Nav
                                    className='me-auto my-2 my-lg-0'
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll>
                                    <img alt='' src={logoDashboard} />
                                    <img alt='' src={menu} className='menu-hamburger' />
                                </Nav>
                                <Form className='d-flex'>
                                    <FormControl
                                        type="search"
                                        placeholder="search"
                                        className='me-2'
                                        aria-label='search'
                                    />
                                    <Button variant="primary" className='btn-search'>Search</Button>
                                </Form>
                                <div className='akun-name'>
                                    Ihtisyamul Fatimah
                                </div>
                                <img alt='' src={chevron} />
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div className='container-content'>
                    <div className='menu'>
                        <div className='dashboard-up'>
                            DASHBOARD
                        </div>

                        <div className='dashboard-low'>
                            <div className='dashboard-low-title'>
                                Dashboard
                            </div>
                        </div>
                    </div>

                    <div className='container-table'>
                        <h1 className='wlcm-admin'>Welcome Admin</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
