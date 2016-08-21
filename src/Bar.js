import React from 'react'
import './bar.css';

class Bar extends React.Component{
  render(){
    const rank = this.props.rank
    const country = this.props.country
    const value = this.props.value

    return <div
            className='bar'
            style={{position: 'absolute',
            top: 30 + 20 * rank,
            transition: 'top .5s'}} >
              <div className='bar__label'>{country}</div>
              <div className='bar__mark'
                style={{width: 4 * value}} />
          </div>
  }
}

export default Bar;
