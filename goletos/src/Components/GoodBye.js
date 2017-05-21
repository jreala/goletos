/**
 * Created by Jason on 5/20/2017.
 */
import React, { Component } from 'react';

class GoodBye extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="good-bye">
                Farewell, {this.props.name}
            </div>
        );
    }
}

export default GoodBye;