import React from 'react';
import Select from '../index';

import { Container, Content } from './styles';

function header() {
    return (
        <Container>
            <Content>
                <Select />
            </Content>
        </Container>
    );
}

export default header;
