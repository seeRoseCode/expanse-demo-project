Expanse, a tech company in Atlanta, Ga, sponsored one of Technologists Coding While Black event in which the attendees were offered the opportunity to tackle a coding challenge.

The attendees were given one hour to take the data provided in a csv file and create a site to display that data using any data visualization tool of their choice. There were also no restrictions on which technologies participants decided to use. Due to the time constraints, the organizers provided a thorough template using React and ChartJs completed with hard-coded data, that participants could use.

I opted to take this route and attempted to replace the hard-coded with data from the csv file. I created a new React app (this one) and pulled 5 components as well as the code from the info.js file to serve as my skeleton. I imported the csv file and parsed it using PapaParse. I then sorted that data and assigned it to a state object held in app.js and passed it down as props to the chart components. Demo videos of every step in my process can be found at the youtube links below.

PART 1 - https://youtu.be/TOi4yf7QX1c

PART 2 - https://youtu.be/aZjWTvYsBf8

PART 3 - https://www.youtube.com/watch?v=pPKGdZrHHPc

PART 4 - https://youtu.be/z7mfPZhB33Q


To start, run the following commands from the command Line

'npm install'
'npm start'


Packages Used:

chart.js - required for template use
  a JavaScript library that allows you to draw different types of charts by using the HTML5 canvas element.


react-chartjs-2 - required for template use
  wrapper for chart.js

react-addons-css-transition-group - required for template use
  an easy way to perform CSS transitions and animations when a React component enters or leaves the DOM

create-react-class - required for template use
  A drop-in replacement for React.createClass

papaparse - required to parse csv file
  an in-browser CSV parser
