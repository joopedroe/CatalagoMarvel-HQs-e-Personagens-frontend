/* eslint-disable no-restricted-globals */
import React from 'react';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-marvel.png';
import { Container, Content, Profiler, Div } from './styles';
import { logout } from '../../services/logged';

function navbar() {
    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/main">
                        <img src={logo} alt="marvel" />
                    </Link>
                    <Div>
                        <Link to="/main">
                            <button type="button">CHARACTERS</button>
                        </Link>
                        <Link to="/comics">
                            <button type="button">COMICS</button>
                        </Link>
                    </Div>
                </nav>
                <div>
                    <Profiler>
                        <div>
                            <Link to="/profile">
                                <button type="button">
                                    {' '}
                                    <FaUserAlt /> My profile
                                </button>
                            </Link>
                        </div>
                    </Profiler>
                    <aside>
                        <div>
                            <Link to="/">
                                <button type="button" onClick={() => logout()}>
                                    {' '}
                                    <FaSignOutAlt /> LOGOUT
                                </button>
                            </Link>
                        </div>
                    </aside>
                </div>
            </Content>
        </Container>
    );
}

export default navbar;
