import React from "react";
import { Form, Button } from "react-bootstrap";
import { ArticlesRepository } from "../articles-repository";
import { ArticleAPiModel } from "../models/articles";
import { createBrowserHistory } from 'history'

import { withRouter } from 'react-router-dom';

export class ArticleForm extends React.Component<any, ArticleAPiModel> {

    private history = createBrowserHistory();

    constructor(props: any) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            createdAt: '',
            avatar: ''
        };

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event: any) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onsubmit = (event: any) => {
        // console.log("submitted form values: " + JSON.stringify(this.state));
        // alert(JSON.stringify(this.state))
        event.preventDefault();
        if (!this.props.editMode) {
            ArticlesRepository.addArticle(this.state).then(() => {
                alert('data submitted');
                this.props.history.push('/articles');
            });
        }
        else {
            ArticlesRepository.updateArticle(this.state.id, this.state).then(() => {
                alert('Data updated')
            })
        }
    }


    componentDidMount() {
        if (this.props.editMode && this.props.data != null) {
            this.setState({
                ...this.props.data
            });
        };
    }

    render() {
        const { name, createdAt, avatar } = this.state;

        return (
            <React.Fragment>
                <div className="p-3 mb-4 bg-light rounded-3 container-fluid">
                    {!this.props.editMode ? <h1>Add article</h1> : ''}
                    <form onSubmit={this.onsubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createdAt">
                            <Form.Label>created At</Form.Label>
                            <Form.Control type="text" value={createdAt} onChange={this.changeHandler} name="createdAt" placeholder="Enter Date" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="avatar">
                            <Form.Label>Avatar</Form.Label>
                            <Form.Control type="text" value={avatar} onChange={this.changeHandler} name="avatar" placeholder="avatar" />
                        </Form.Group>
                        <Button variant="success" size="lg" type="submit">{this.props.editMode ? 'Edit' : 'Save'}</Button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default withRouter(ArticleForm);