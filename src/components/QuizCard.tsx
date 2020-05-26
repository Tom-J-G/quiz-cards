import React from 'react';
import { Card, CardDeck, CardBody } from 'reactstrap';

interface IProps {
    question: string,
    answer: string,
    possibleAnswers: string[]
}
export default class QuizCard extends React.Component<IProps> {
    render() {
        return (
            <CardDeck>
                
            </CardDeck>
        );
    }
}