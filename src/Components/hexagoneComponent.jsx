import React, { Component } from 'react';
import '../cssFiles/hexagoneStyleSheet.css';
import HalfHexagon from './halfHexagon'
export class Hexagone extends Component {

    render() {
        return (
            <>

                {(this.props.index2 === 0) ? <><span style={{
                    position: 'relative',
                    top: (this.props.index !== 0) ? 22 : 6,
                    right: 5
                }}>{this.props.index + 1}</span><HalfHexagon styleSheet={{
                    position: 'relative',
                    top: (this.props.index !== 0) ? -1 : 41,
                    right: 0
                }}
                    /></> : ""}

                <div className="hex">
                    {
                        (this.props.index === 0) ? <>
                            <span style={{
                                position: 'relative',
                                right: 25,
                                top: 20
                            }}>{this.props.index2 + 1}</span>
                            <div className="triangle-down"
                                style={{
                                    borderTop: '20px solid red',
                                    position: 'relative',
                                    right: 26,
                                    top: 20
                                }}>
                            </div> </> : ""
                    }

                    <div className="triangle-up" >

                    </div>
                    <div className="rectangle" onClick={() => {
                        if (this.props.cercled === 0 && this.props.winner === 0) this.props.fillingCell(this.props.index, this.props.index2, this.props.value);
                    }} >
                        <div className="cercle" style={{
                            backgroundColor: (this.props.cercled === 1) ? 'red' : (this.props.cercled === 2) ? 'blue' : 'grey'
                        }}></div>
                    </div>
                    <div className="triangle-down" >
                    </div>
                    {(this.props.index === this.props.rowsNumber - 1) ?
                        <>

                            <div className="triangle-up"
                                style={{
                                    borderBottom: '20px solid red',
                                    position: 'relative',
                                    left: 26,
                                    bottom: 20
                                }}>
                            </div>
                            <span style={{
                                position: 'relative',
                                left: 25,
                                bottom: 20
                            }}>{this.props.index2 + 1}</span></> : ""}
                </div>
                {(this.props.index2 === this.props.rowsNumber - 1) ? <>
                    <HalfHexagon styleSheet={{
                        position: 'relative',
                        top: (this.props.index !== 0) ? 21 : 62,
                        left: -2
                    }}
                    /><span style={{
                        position: 'relative',
                        top: (this.props.index !== 0) ? 22 : 66,
                        left: 5
                    }}>{this.props.index + 1}</span></> : ""}
            </>
        )
    }
}
export default Hexagone
