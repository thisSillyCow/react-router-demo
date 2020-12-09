import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export class Pan extends React.Component<RouteComponentProps, {}> {
    constructor(props: any) {
        super(props);
        this.state = { seconds: 0 };
    }
    private activateLasers() {
        console.log('The link was clicked. pan');
    }
    private activateGoback() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <h3> pan </h3>
                <div onClick={() => this.activateLasers()}>pan</div>
                <div onClick={() => this.activateGoback()}>回退</div>
            </div>
        )
    }
}

export default withRouter(Pan as any);