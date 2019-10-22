import React from 'react';
import {Line} from 'react-chartjs-2';
import Papa from 'papaparse'





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
