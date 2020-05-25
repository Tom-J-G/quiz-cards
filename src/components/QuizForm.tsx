import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
interface IState {
    categoryId: number,
    amount: number,
    difficulty: string
}
type category = {
    id:number,
    name: string
}
interface IProps {
    categories: category[]
}

interface functions {
    getQuizCards(catId: number, amount: number, difficulty?: string): void
}
export default class QuizForm extends React.Component<IProps & functions, IState> {
    constructor(props: IProps & functions) {
        super(props)

        this.state = {
            categoryId: 1,
            amount: 10,
            difficulty: "undefined"
        }

        this.handleAmount = this.handleAmount.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.handleDifficulty =this.handleDifficulty.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleAmount(e: any) {
        const target: number = +e.target.value;
        this.setState(state => ({
            ...state,
            amount: target
        }))
    }

    handleDifficulty(e: any) {
        const target: string = String(e.target.value);
        this.setState(state => ({
            ...state,
            difficulty: target
        }))
    }

    handleCategory(e:any) {
        const target: number = +e.target.value;
        this.setState( state => ({
            ...state,
            categoryId: target
        }), () => console.log(this.state.categoryId))
    }

    submitForm() {
        this.props.getQuizCards(this.state.categoryId, this.state.amount, 
            (this.state.difficulty === "undefined") ? '': this.state.difficulty);
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Form >
                            <FormGroup>
                                <Label>Category</Label>
                                <Input type="select" name="category" id="catOptions" onChange={this.handleCategory}>
                                    {this.props.categories.map((x) =>
                                        <option value={x.id}>{x.name}</option>
                                    )}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input id="amountChoice" type="number" value={this.state.amount} onChange={this.handleAmount} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="difficulty" id="difficultyOptions" onChange={this.handleDifficulty}>
                                    <option value="undefined" >All</option>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                    
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={this.submitForm}>Get Quiz Cards</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}