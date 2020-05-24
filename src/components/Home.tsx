import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import axios from 'axios';

import { GetCategories} from '../api/quizApi'

interface IState {
    categories: [],
    quizCards: [], 
}

interface IProps {

}

export default class Home extends React.Component<{} & IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            categories: [],
            quizCards: []
        }
    }

    componentDidMount() {
        GetCategories((res: { data: { trivia_categories: any; }; }) => {
            this.setState(
                state => ({
                    ...state,
                    categories: res.data.trivia_categories
                }
                ), () => console.log(this.state.categories)
            );
        })
    }
    
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