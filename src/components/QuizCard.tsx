import React, { createRef} from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

import { DecodeHtml } from './Helpers';


interface IState {
    height: number|string,
    flip: boolean
}
interface IProps {
    question: string,
    answer: string,
    possibleAnswers: string[]
}

export default class QuizCard extends React.Component<IProps, IState> {
    private frontElement: React.RefObject<HTMLDivElement>;
    private backElement: React.RefObject<HTMLDivElement>;
    constructor(props: IProps) {
        super(props)
        
        this.state = {
            height: 'initial',
            flip: false
        }

        this.frontElement = createRef();
        this.backElement = createRef();
        this.flip = this.flip.bind(this);
    }

    componentDidMount() {
        console.log('calling');
        this.setMaxHeight();
    }

    componentDidUpdate(prevProps: IProps) {
        const arrayEqual = (array1:string[], array2:string[]) =>
            array1.length === array2.length 
        &&  array1.every((x, i) => x === array2[i]);
        
        if(!arrayEqual(this.props.possibleAnswers, prevProps.possibleAnswers)) {
            this.setState(state => ({
                ...state,
                height: 'initial'
            }), () => this.setMaxHeight());
        
        }
    }

    setMaxHeight() {
        const frontHeight = this?.frontElement?.current?.getBoundingClientRect().height;
        const backHeight = this?.backElement?.current?.getBoundingClientRect().height;
        console.log(frontHeight);
        if(frontHeight !== undefined && backHeight !== undefined) {
            this.setState(state => ({
                ...state,
                height: Math.max(frontHeight,backHeight,100)
             }))
        }
    }

    flip() {
        console.log('flipping');
        this.setState(state => ({
            ...state,
            flip: !this.state.flip
        }), () => console.log(this.state.flip))
    }

    render() { 

        return (
            <div id="quizCard" className={(this.state.flip) ? 'flip' : ''} style={{height: this.state.height}} onClick={this.flip}>
                <Card body innerRef={this.frontElement} className="front">
                        <CardTitle id="question">{this.props.question}</CardTitle>
                        <CardText id="choices">
                            {this.props.possibleAnswers.map((x) =>
                                <div>{DecodeHtml(x)}</div>
                            )}
                        </CardText>
                </Card>
                <Card body innerRef={this.backElement} className="back">
                        <CardText id="answer">
                            Answer:<br/>
                            {this.props.answer}
                        </CardText>
                </Card>
            </div>
           
        );
    }
}