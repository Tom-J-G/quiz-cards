import React from 'react';
import { Row, Col, Container } from 'reactstrap';

import { GetCategories, GetQuizCards} from '../api/quizApi';
import QuizForm from './QuizForm';
import QuizCards from './QuizCards';

type category = {
    id:number,
    name: string
}
interface IState {
    categories: category[],
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

        this.getQuizCards = this.getQuizCards.bind(this);
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
    
    getQuizCards(catId:number, amount: number, difficulty?: string) {
        GetQuizCards(amount, catId, 
            (res: { data: { results: any; }; }) => {
                this.setState(state => ({
                    ...state,
                    quizCards: res.data.results
                }), () => console.log(this.state.quizCards))
            }
            , difficulty)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Quiz</h1>
                    </Col>
                </Row>
                <QuizForm categories={this.state.categories} getQuizCards={this.getQuizCards} />
                <Row>
                    <Col>
                        <QuizCards quizCards={this.state.quizCards} />
                    </Col>
                </Row>
            </Container>
        )
    }
}