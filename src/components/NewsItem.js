import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/98aec6479bad523f5c89763f4acf0cf9.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
    );
  }
}
