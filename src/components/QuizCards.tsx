import React from 'react';
import { Row, Col, Container } from 'reactstrap';

import QuizCard from './QuizCard';

type results = {
    catgory: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: Array<string>,
}
interface IProps {
    quizCards: results[]
}

export default class QuizCards extends React.Component<IProps> {

    render() {
        return(
        <Container id="quiz">
            <Row>
                <Col>
                {this.props.quizCards.map( (item) => {
                    const answer:string = item.correct_answer;
                    const possibleAnswers: string[] = [...item.incorrect_answers, answer];
                    possibleAnswers.sort(() => Math.random() - .5); 
                        
                    return (
                        <QuizCard  key="card" question={unescape(item.question)} answer={unescape(answer)} possibleAnswers={possibleAnswers} />
                    );
                    }
                )
                }
                </Col>
            </Row>

        </Container>);
    }
}