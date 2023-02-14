const DUMMY_DATA = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 11, region: 'India'},
    {id: 'd3', value: 12, region: 'China'},
    {id: 'd4', value: 6, region: 'Germany'}
];

const xScale = d3.scaleBand().domain(DUMMY_DATA.map((dataPoint) => dataPoint.region)).rangeRound([0, 250]).padding(0.1); // Create a function to automatically calculate the X coordinates
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]); // Create a function to automatically calculate the Y coordinates

const container = d3.select('svg')
    .classed('container', true);

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA) // Bind the svg containers with class bar to the DUMMY DATA
    .enter() // Gives me all the missing elements that weren't rendered yet
    .append('rect') // Add them to the DOM! (create rectangle bars)
    .classed('bar', true) // Add the class 'bar' to them
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 200 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));

// Why use selectAll('.bar') even if we haven't created a container yet?
setTimeout(() => {
    bars.data(DUMMY_DATA.slice(0, 2)) // Set a new value for our bars data to be only the first 2 points of the original DUMMY DATA
    .exit() // Gives me the elements for which the data is not there anymore
    .remove() // Remove them from the DOM
}, 2000)