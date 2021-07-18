import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import '../css/home.css'
import {withRouter} from "react-router-dom";
import {BookCarousel} from "../components/BookCarousel";
import {SearchBar} from "../components/SearchBar";
import {BookList} from "../components/BookList";

const { Header, Content, Footer } = Layout;

class HomeView extends React.Component{

    componentDidMount(){
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