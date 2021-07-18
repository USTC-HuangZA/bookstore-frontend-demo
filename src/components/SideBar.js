import React from 'react'
import { Menu,Layout, Icon} from 'antd'
import {history} from "../utils/history";
import {getUserRoles, userRolesConvert} from "../services/userService"

const { SubMenu } = Menu;
const { Sider } = Layout;

export class SideBar extends React.Component {

    state = {
        collapsed: false,
        userRoles:[]
    };

    componentDidMount() {
        let userRoles = getUserRoles();
        console.log(userRoles)
        this.setState({'userRoles': userRolesConvert(userRoles)})
    }

    onCollapse = collapsed => {
        if(collapsed){
        }
        console.log(collapsed);
        this.setState({ collapsed });
    };

    bookOnClick = () => {
        history.push("/home");
    };

    adminOnClick = ()=>{
        history.push("/admin")
    }

    render() {
        return (
            <div style={{width:this.state.collapsed? "80px":"180px", maxWidth:this.state.collapsed? "80px":"180px", minWidth:this.state.collapsed? "80px":"180px" }}>
            <div className="mySider">
            <Sider collapsible collapsed={this.state.collapsed} width="180px" onCollapse={this.onCollapse} className="sider" style={{ background: '#fff'}}>
                <Menu defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" onClick={this.bookOnClick}>
                        <Icon type="read" style={{ fontSize: '18px'}}/>
                        <span style={{ fontSize: '16px'}}>Books</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="shopping-cart" style={{ fontSize: '18px'}} />
                        <span style={{ fontSize: '16px'}}>My Cart</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="solution"  style={{ fontSize: '18px'}}/>
                        <span style={{ fontSize: '16px'}}>My Orders</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="user" style={{ fontSize: '18px'}}/>
                        <span style={{ fontSize: '16px'}}>My Profile</span>
                    </Menu.Item>
                    {
                        this.state.userRoles.indexOf('Admin')>-1?
                        <Menu.Item key="5" onClick={this.adminOnClick}>
                            <Icon type="line-chart" style={{ fontSize: '18px'}}/>
                            <span style={{ fontSize: '16px'}}>Admin</span>
                        </Menu.Item>:null
                    }
                </Menu>
            </Sider>
            </div>
            </div>

        );
    }

}