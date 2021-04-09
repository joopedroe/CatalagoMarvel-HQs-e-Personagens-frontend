import React from 'react';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-marvel.png';

import { Container, Content, Profiler } from './styles';

function navbar() {
    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/main">
                        <img src={logo} alt="marvel" />
                    </Link>
                    <Profiler>
                        <div>
                            <button type="button">
                                {' '}
                                <FaUserAlt /> Meu perfil
                            </button>
                        </div>
                    </Profiler>
                </nav>
                <aside>
                    <div>
                        <button type="button">
                            {' '}
                            <FaSignOutAlt /> Logout
                        </button>
                    </div>
                </aside>
            </Content>
        </Container>
    );
}

export default navbar;
