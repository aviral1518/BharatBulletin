import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }
  
  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      currentPage: 1,
      totalPages: 0,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=98c666f78c644f75a04e88189caa8aff&page=1&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData?.articles,
      totalPages: parsedData?.totalResults,
      loading: false,
    });
  }

  handlePagination(value) {
    this.setState(
      {
        currentPage:
          value === "decrease"
            ? this.state.currentPage - 1
            : this.state.currentPage + 1,
        loading: true,
      },
      async () => {
        console.log("current PAge-->", this.state.currentPage);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=98c666f78c644f75a04e88189caa8aff&page=${this.state.currentPage}&pageSize=${this.props.pageSize}`;
        const data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          articles: parsedData?.articles,
          loading: false,
        });
      }
    );
  }

  render() {
    return (
      <div className="container my-3">
        {this.state.loading ? (
          <Spinner />
        ) : (
          <>
            <h1 className="text-center" style={{margin: '35px 0px'}}>Bharat Bulletin</h1>
            <div className="row">
              {this.state.articles &&
                this.state.articles?.map((item) => {
                  return (
                    <div className="col-md-4" key={item?.url}>
                      <NewsItem
                        title={item?.title?.slice(0, 45)}
                        description={item?.description?.slice(0, 88)}
                        imageUrl={item?.urlToImage}
                        newsUrl={item?.url}
                        author={item?.author}
                        date={item?.publishedAt}
                        source={item?.source}
                      />
                    </div>
                  );
                })}
            </div>

            <div className="container d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-dark"
                disabled={this.state.currentPage <= 1}
                onClick={() => this.handlePagination("decrease")}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="btn btn-dark"
                disabled={
                  this.state.currentPage >=
                  Math.ceil(this.state.totalPages / this.props.pageSize)
                }
                onClick={() => this.handlePagination("increase")}
              >
                Next &rarr;
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
