import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Home from "./home"
import Brand from "./brand"
import Personage from "./personage"
import Shopping from "./shopping"
// import style from "./index.less"
import "./index.less"
class TabBar extends React.Component<RouteComponentProps, {}>{
    constructor(props: any) {
        super(props);
        this.state = { seconds: 0 };
    }
    private activateLasers = () => {
        console.log(this.props.history)
        console.log('The link was clicked.');
        this.props.history.push("/pan")
    }
    render() {
        return (
            <div >
                <Home />
                <Brand />
                <Personage />
                <Shopping />
                <div onClick={() => this.activateLasers()} className="title">1111111</div>
            </div>
        )
    }
}
export default withRouter(TabBar as any);