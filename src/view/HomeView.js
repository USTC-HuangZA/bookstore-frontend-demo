import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import '../css/home.css'
import {withRouter} from "react-router-dom";
import {BookCarousel} from "../components/BookCarousel";
import {SearchBar} from "../components/SearchBar";
import {BookList} from "../components/BookList";
import {getUserInfo} from "../services/userService";

const { Header, Content, Footer } = Layout;

class HomeView extends React.Component{

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        let user = getUserInfo();
        this.setState({user:user});
    }

    render(){
        return(
            <div className="home-content">
                <SearchBar />

                <BookCarousel />
                <BookList />
                <div className={"foot-wrapper"}>
                </div>
            </div>
        );
    }
}

export default withRouter(HomeView);