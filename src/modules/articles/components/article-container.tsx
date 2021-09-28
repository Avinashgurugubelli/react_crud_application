import { Component } from "react";
import { Link } from "react-router-dom";
import ArticlesListComponent from "./article-list-view";

class ArticleContainer extends Component {

    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="p-3 container-fluid bg-light rounded-3">
                    <h3>Articles management system</h3>
                    <Link to="/add/article">
                        <button className="btn btn-dark">+ Add article</button>

                    </Link>
                </div>
                <div className="p-3 container-fluid ">
                <ArticlesListComponent />

                </div>
            </>
        );
    }
}

export default ArticleContainer;