import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import '../css/bookDetail.css'
import {withRouter} from "react-router-dom";


import {getBook} from "../services/bookService";
import {BookDetail} from "../components/BookDetail";


class BookView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {books:null};
    }

    componentDidMount(){
        const query = this.props.location.search;
        const arr = query.split('&');
        const bookId = arr[0].substr(4);
        getBook(bookId, (data) => {this.setState({bookInfo: data})})
    }

    render(){
        return(
            <div className="home-content">
                {this.state.bookInfo?<BookDetail info={this.state.bookInfo} />:null}
                <div className={"foot-wrapper"}>
                </div>
            </div>
        );
    }
}

export default withRouter(BookView);