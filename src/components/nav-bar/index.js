/* eslint-disable no-restricted-globals */
import React from 'react';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-marvel.png';
import { Container, Content, Profiler, Div } from './styles';

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
                            <button type="button">Character</button>
                        </Link>
                        <Link to="/comics">
                            <button type="button">Comics</button>
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
                            <button type="button">
                                {' '}
                                <FaSignOutAlt /> Logout
                            </button>
                        </div>
                    </aside>
                </div>
            </Content>
        </Container>
    );
}

export default navbar;
