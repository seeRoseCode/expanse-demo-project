import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LineExample from './line-graphs/line';
import LineExample2 from './line-graphs/line2';
import BarExample from './line-graphs/bar';
import HorizontalBarExample from './line-graphs/horizontalbar';
import MixExample from './line-graphs/mix';

import Papa from 'papaparse'

import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

//original class name was "ChartJsLinesBars" switched to "App for simplicity"
export default class App extends React.Component {
    // state = {
    //   data: []
    //   //Name_of_Covered_Entity: "", Individuals_Affected: int
    // }


    componentDidMount(){
      let csvFilePath = require("./data/Cyber Security Breaches.csv")
      Papa.parse(csvFilePath, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: this.updateData
      })
    }

    state = {
      data: {
        labels: [],
        datasets:[
          {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#ed0f51',
          borderColor: '#ed0f51',
          borderCapStyle: 'round',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#ed0f51',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: '#ed0f51',
          pointHoverBorderColor: '#ed0f51',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
          }
        ]
      }
    };

      updateData = (result) => {
        let lbl = []
        let dt = []
        // console.log("this is the data", this.sortData(result.data)) getting expected data
        let data = this.sortData(result.data)
        data.forEach((obj) => {
          lbl.push(obj.Name_of_Covered_Entity)
          dt.push(obj.Individuals_Affected);
        })
        // console.log(lbl, dt) getting expected data
        this.setState({data: {labels: lbl, datasets: [{...this.state.data.datasets, data: dt}]}})
      }

      sortData = (data) => {
        let sortedAndFormatted = []
        data.sort(function(a, b) {
          return a.Individuals_Affected - b.Individuals_Affected;
        });
        data.map((n) => sortedAndFormatted.push({ Name_of_Covered_Entity: n.Name_of_Covered_Entity, Individuals_Affected: n.Individuals_Affected}))
        return sortedAndFormatted.reverse().slice(0, 10)
      }


   render() {
       return (
           <Fragment>
               <ReactCSSTransitionGroup
                   component="div"
                   transitionName="TabsAnimation"
                   transitionAppear={true}
                   transitionAppearTimeout={0}
                   transitionEnter={false}
                   transitionLeave={false}>
                   <Row>
                       <Col lg="6">
                           <Card className="main-card mb-3">
                               <CardBody>
                                   <CardTitle>Line Chart</CardTitle>
                                   <LineExample data={this.state.data}/>
                               </CardBody>
                           </Card>
                       </Col>
                       <Col lg="6">
                           <Card className="main-card mb-3">
                               <CardBody>
                                   <CardTitle>Animated Line Chart</CardTitle>
                                   <MixExample data={this.state.data}/>
                               </CardBody>
                           </Card>
                       </Col>
                       <Col lg="6">
                           <Card className="main-card mb-3">
                               <CardBody>
                                   <CardTitle>Area Chart</CardTitle>
                                   <LineExample2 data={this.state.data}/>
                               </CardBody>
                           </Card>
                       </Col>
                       <Col lg="6">
                           <Card className="main-card mb-3">
                               <CardBody>
                                   <CardTitle>Bar Chart</CardTitle>
                                   <BarExample data={this.state.data}/>
                               </CardBody>
                           </Card>
                       </Col>
                       <Col lg="6">
                           <Card className="main-card mb-3">
                               <CardBody>
                                   <CardTitle>Horizontal Bar Chart</CardTitle>
                                   <HorizontalBarExample data={this.state.data}/>
                               </CardBody>
                           </Card>
                       </Col>
                   </Row>
               </ReactCSSTransitionGroup>
           </Fragment>
       );
   }
}
