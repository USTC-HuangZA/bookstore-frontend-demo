import React from 'react';
import { Card } from 'antd';

import {Link} from 'react-router-dom'
import {getBookImage, getBooks} from "../services/bookService";

const { Meta } = Card;

export class Book extends React.Component{
    constructor(props) {
        super(props);
        this.state = {bookImage:""};
    }

    componentDidMount(){
        const callback =  (data) => {
           this.setState({bookImage:data.imageFile});
        };
        getBookImage(this.props.info.bookId, callback);
    }

    render() {

        const {info} = this.props;

        return (
            <Link to={{
                pathname: '/bookDetails',
                search: '?id=' + info.bookId}}
            >
            <Card
                hoverable
                style={{width: 181}}
                cover={<img alt="image" src={this.state.bookImage} className={"bookImg"}/>}
            >
                <Meta title={info.name} description={'¥' + info.price}/>
            </Card>
            </Link>
        );
    }

}

