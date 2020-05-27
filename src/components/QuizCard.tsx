import React from 'react';
import { Card, CardDeck, CardBody } from 'reactstrap';

import { DecodeHtml } from './Helpers';

interface IProps {
    question: string,
    answer: string,
    possibleAnswers: string[]
}
export default class QuizCard extends React.Component<IProps> {
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <div id="question">{this.props.question}</div>
                        <div id="choices">
                            {this.props.possibleAnswers.map((x) =>
                                <div>{DecodeHtml(x)}</div>
                            )}
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <div id="answer">
                            {this.props.answer}
                        </div>
                    </CardBody>
                </Card>
            </div>
           
        );
    }
}