import React from "react";
import ReactDOM from 'react-dom';

export default class News extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            visible: 2,
            error: false
        };

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 2};
        });
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts").then(
            res => res.json()
        ).then(res => {
            this.setState({
                items: res
            });
        }).catch(error => {
            console.error(error);
            this.setState({
                error: true
            });
        });
    }

    render() {
        return (
            <section className="news">
                <h1>NEWS</h1>
                <div className="tiles">
                    {this.state.items.slice(0, this.state.visible).map((item, index) => {
                        return (
                            <div className="tile fade-in" key={item.id}>
                                <h2>{item.title}</h2>
                                <p>{item.body}</p>
                            </div>
                        );
                    })}
                </div>
                {this.state.visible < this.state.items.length &&
                <button onClick={this.loadMore} type="button" className="news--loadBtn">LOAD MORE</button>
                }
            </section>
        );
    }
}

ReactDOM.render(<News />, document.getElementById('root'));