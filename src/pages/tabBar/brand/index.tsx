import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type StateType = {
    msg: string;
};

class Brand extends React.Component<RouteComponentProps, StateType>{
    constructor(props: any) {
        super(props);
        this.state = {
            msg: "Home",
        };
    }
    render() {
        let { msg } = this.state;
        return (
            <div>
                <h3>{msg}</h3>
            </div>
        )
    }
}
export default withRouter(Brand as any);