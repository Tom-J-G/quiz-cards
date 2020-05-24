import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import axios from 'axios';

interface IState {
    categories: [],
    quizCards: [], 
}

export default class Home extends React.Component<{}, IState> {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}