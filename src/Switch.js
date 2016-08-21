import React from 'react';
import './switch.css';

class Switch extends React.Component{
  render(){
    const metric = this.props.metric;
    return <div className='switch__track'
             onClick={() => this.props.updateMetric(metric === 'birth' ? 'death' : 'birth')}>
             <div className={'switch__thumb ' + metric} />
           </div>
  }
}
Switch.defaultProps = {key: 'switch'}

export default Switch;
