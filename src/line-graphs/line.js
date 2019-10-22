import React from 'react';
import {Line} from 'react-chartjs-2';

class LineExample extends React.Component {

    render() {
        return (
            <div>
              <Line data={this.props.data} />
            </div>
        )
    }
}

export default LineExample;
