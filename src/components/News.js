import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps={
    country:"au",
    pageSize:6,
    category:"general"
  }
static propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string

}

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
      let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,
    totalResults:parsedData.totalResults,
  loading:false });
  }

  nextclickhanlder = async () => {
    
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, page:this.state.page+1, loading:false});
    
    
  };

  previousclickhandler = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page:this.state.page-1, loading:false });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center mx-3 my-5">NewsTurtle - Top Headlines | {(this.props.category.charAt(0).toUpperCase())+(this.props.category.slice(1))}</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  desc={element.description}
                  imageUrl={
                    !element.urlToImage
                      ? "https://static.ffx.io/images/$zoom_0.19567627494456763%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_0%2C$y_64/t_crop_custom/q_86%2Cf_auto/t_smh_no_label_no_age_social_wm/460bd26c729ad153e2144592f576d1073dc366ef"
                      : element.urlToImage
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previousclickhandler}
          >
            &laquo; Previous
          </button>

          <button
          disabled={!(this.state.page+1 <= Math.ceil(this.state.totalResults/this.props.pageSize))}
            type="button"
            className="btn btn-dark"
            onClick={this.nextclickhanlder}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}
