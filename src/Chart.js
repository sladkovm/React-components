import React from 'react';
import Bar from './Bar';
import Switch from './Switch';
import './index.css';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            metric: 'birth'
        };
    }

    render() {
        const metric=this.state.metric;
        const data=this.props.data.sort((a, b) => b[metric] - a[metric]).map((d, i) => ({
            ...d,
            rank: i
        })).sort((a, b) => b.country > a.country);
        // console.log('data', data, 'metric', metric)
        return <div className='chart'>
                  {[ <span className='label' key='br'> Birth rate </span>,
                     <Switch metric={metric}
                       updateMetric={(d) => this.setState({metric: d})}/ >,
                     <span className='label' key='dr'> Death rate </span>,
                    <div>
                       {data.map((d, i) =>
                         (<Bar country={d.country} value={d[metric]} rank={d.rank} key={i}/>))
                      }
                    </div>
                ]}
                </div>
    }
}

export default Chart;

// using pure functional components for the rest
// function Switch({metric, updateMetric}) {
//   return <div className='switch__track'
//            key='switch'
//            onClick={() => updateMetric(metric === 'birth' ? 'death' : 'birth')}>
//            <div className={'switch__thumb ' + metric} />
//          </div>
// };




// function Bar({country, value, rank}) {
//   return <div
//     className='bar'
//     style={{position: 'absolute',
//     top: 30 + 20 * rank,
//     transition: 'top .5s'}} >
//     <div className='bar__label'>{country}</div>
//     <div className='bar__mark'
//       style={{width: 4 * value}}/>
//     </div>;
// }
