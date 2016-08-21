// // Create custom compoent of point
// class Point extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             highlighted: false
//         };
//     }
//     render() {
//         return <circle cx={this.props.birth * 10} cy={300 - this.props.death * 10} onClick={ () => { this.setState({ highlighted: !this.state.highlighted }); } } r={5}
//         style={{
//             fill: this.state.highlighted? 'red': '#222',
//             opacity: 0.2,
//             transition: 'fill .5s'
//         }}/>;
//     }
// }


//
// // Create svg canvas (Using React.createElement)
// const svg = <svg height={300} width={300}>
//     {birthdeathrates.map((d, i) => <Point birth={d.birth} death={d.death}/>)}
// </svg>;
