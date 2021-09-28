import { faCoffee, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { ArticleAPiModel } from "../models/articles";
import { ArticlesRepository } from '../articles-repository'
import { Button, Modal } from "react-bootstrap";
import articleForm, { ArticleForm } from "./article-form";


class ArticlesListComponent extends Component<any, {
    articles: ArticleAPiModel[],
    showModel: boolean
}> {

    private articleToEdit: ArticleAPiModel | null = null;

    constructor(props: any) {
        super(props);

        this.state = {
            articles: [],
            showModel: false
        }

    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles() {
        ArticlesRepository.getAllArticles().then((data: ArticleAPiModel[]) => {
            this.setState({
                articles: [...data]
            });
        });
    }

    deleteArticle(id: number) {
        ArticlesRepository.deleteArticle(id).then(() => {
            alert('deleted successfully!');
            this.getArticles();
        })
    }

    setModelShow(flag: boolean) {
        this.setState({
            showModel: flag
        });
    }

    handleClose = () => this.setModelShow(false);
    handleShow(articleToEdit: ArticleAPiModel) {
        this.articleToEdit = articleToEdit;
        this.setModelShow(true)
    };


    render() {
        if (this.state.articles.length > 0) {
            return (
                <>
                    <Modal show={this.state.showModel} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Article</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ArticleForm editMode={true} data= {this.articleToEdit} />
                        </Modal.Body>
                    </Modal>
                    <div className="container-fluid">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">createdAt</th>
                                    <th scope="col">avatar</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    this.state.articles.map((article: ArticleAPiModel) => (
                                        <tr key={article.id}>
                                            <td scope="col">{article.id}</td>
                                            <td scope="col">{article.name}</td>
                                            <td scope="col">{article.createdAt}</td>
                                            <td scope="col">{article.avatar}</td>
                                            <td scope="col" style={{ cursor: 'pointer' }}>
                                                <FontAwesomeIcon icon={faTrash} onClick={() => this.deleteArticle(Number(article.id))} />
                                            </td>
                                            <td scope="col" style={{ cursor: 'pointer' }}>
                                                <FontAwesomeIcon icon={faEdit} onClick={() => this.handleShow(article)} />
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </>
            );
        }
        else {
            return (
                <>
                    <h4>No Data to display!</h4>
                </>
            );
        }


    }
}

export default ArticlesListComponent;