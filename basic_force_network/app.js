// var width = 300, height = 300
// var nodes = [{}, {}, {}, {}, {}]
// var nodes = [
//     {id: 'd1', value: 10, region: 'USA'},
//     {id: 'd2', value: 11, region: 'India'},
//     {id: 'd3', value: 12, region: 'China'},
//     {id: 'd4', value: 6, region: 'Germany'}
// ];

// var width = 600, height = 400;

// var colorScale = ['orange', 'lightblue', '#B19CD9'];
// var xCenter = [100, 300, 500];

// var numNodes = 100;
// var nodes = d3.range(numNodes).map(function(d, i) {
// 	return {
// 		radius: Math.random() * 25,
// 		category: i % 3
// 	}
// });

// var simulation = d3.forceSimulation(nodes)
//   .force('charge', d3.forceManyBody()) // Elements repel each other
//   .force('center', d3.forceCenter(width / 2, height / 2)) // Elements are attracted to a center point
//   .on('tick', ticked); // Each time the simulation iterates, the ticked() function will be called


// // Joins the nodes array to circle elements and updates their positions
// function ticked(){
//     var u = d3.select("svg")
//     .selectAll("circle")
//     .data(nodes)
//     .join("circle")
//     .attr("r", 5)
//     .attr("cx", function(d) {
//         return d.x
//     })
//     .attr("cy", function(d) {
//         return d.y
//     });
// }

// var simulation = d3.forceSimulation(nodes)
// 	.force('charge', d3.forceManyBody().strength(5))
// 	.force('x', d3.forceX().x(function(d) {
// 		return xCenter[d.category];
// 	}))
// 	.force('collision', d3.forceCollide().radius(function(d) {
// 		return d.radius;
// 	}))
// 	.on('tick', ticked);

// function ticked() {
// 	var u = d3.select('svg g')
// 		.selectAll('circle')
// 		.data(nodes)
// 		.join('circle')
// 		.attr('r', function(d) {
// 			return d.radius;
// 		})
// 		.style('fill', function(d) {
// 			return colorScale[d.category];
// 		})
// 		.attr('cx', function(d) {
// 			return d.x;
// 		})
// 		.attr('cy', function(d) {
// 			return d.y;
// 		});
// }


var width = 600, height = 400;

var colorScale = ['orange', 'lightblue', '#B19CD9'];
var xCenter = [100, 300, 500];

var numNodes = 100;
var nodes = d3.range(numNodes).map(function(d, i) {
	return {
		radius: Math.random() * 25,
		category: i % 3
	}
});

var simulation = d3.forceSimulation(nodes)
	.force('charge', d3.forceManyBody().strength(5))
	.force('x', d3.forceX().x(function(d) {
		return xCenter[d.category];
	}))
	.force('collision', d3.forceCollide().radius(function(d) {
		return d.radius;
	}))
	.on('tick', ticked);

function ticked() {
	var u = d3.select('svg g')
		.selectAll('circle')
		.data(nodes)
		.join('circle')
		.attr('r', function(d) {
			return d.radius;
		})
		.style('fill', function(d) {
			return colorScale[d.category];
		})
		.attr('cx', function(d) {
			return d.x;
		})
		.attr('cy', function(d) {
			return d.y;
		});
}
