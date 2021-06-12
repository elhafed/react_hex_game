import React, { Component } from 'react'
import '../cssFiles/hexagoneStyleSheet.css'

export default class HalfHexagon extends Component {
    render() {
        return (
            <>
            {(this.props.tri===1)?<div>
                {/* <div className='triangle-up-right-90-angle'></div> */}
                <div style={{ width:25, height:30,backgroundColor:'blue' }} >

                </div>
                <div className='triangle-down-right-90-angle'></div>
            </div>:
            <div style={this.props.styleSheet}>
            <div className='triangle-up-left-90-angle'></div>
            <div style={{ width:25, height:10,backgroundColor:'blue' }} >

            </div>
            <div className='triangle-down-right-90-angle'></div>
        </div>
            
            }
            </>
        )
    }
}
