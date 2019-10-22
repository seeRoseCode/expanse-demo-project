import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import Papa from 'papaparse'
import LineExample from './line-graphs/line';
import LineExample2 from './line-graphs/line2';
import BarExample from './line-graphs/bar';
import HorizontalBarExample from './line-graphs/horizontalbar';
import MixExample from './line-graphs/mix';

//original class name was "ChartJsLinesBars" switched to "App for simplicity"
export default class App extends React.Component {

    componentDidMount(){
      //import and parse csv file. On completion invoke updateData function
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
          data: []
          }
        ]
      }
    };

    //takes response from parsed CSV file and inserts desired data into state
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

      //takes in data from csv file
      sortData = (data) => {
        let sortedAndFormatted = []
        //sort data based on the number of Individuals_Affected
        data.sort(function(a, b) {
          return a.Individuals_Affected - b.Individuals_Affected;
        });
        //simplify objects in data to include only Name_of_Covered_Entity and Individuals_Affected
        data.map((n) => sortedAndFormatted.push({ Name_of_Covered_Entity: n.Name_of_Covered_Entity, Individuals_Affected: n.Individuals_Affected}))
        //return the top 10 companies with highest number of Individuals_Affected
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
