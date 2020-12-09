import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type StateType = {
    msg: string;
};

class Personage extends React.Component<RouteComponentProps, StateType>{
    constructor(props: any) {
        super(props);
        this.state = {
            msg: "personage",
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
export default withRouter(Personage as any);