import React from 'react';
import "../css/admin.css"
import {withRouter} from "react-router-dom";
import {getBookStatistics} from "../services/adminService";

class AdminView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {bookStatistic:null};
    }

    componentDidMount() {
        const callback = (data)=>{
            this.setState({bookStatistic:data})
        }
        getBookStatistics(callback);
    }

    render() {
        return (
            <div className={'admin-view'}>
                <p>Naive Admin Statistic Page</p>
                {this.state.bookStatistic?
                    <div>
                        <p>book type number:{this.state.bookStatistic.bookNumber}</p>
                        <p>books in inventory:{this.state.bookStatistic.bookInventorySum}</p>
                    </div>
                    :null
                }
            </div>
        )
    }
}

export default withRouter(AdminView);