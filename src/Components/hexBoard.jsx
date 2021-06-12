import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Hexagone from './hexagoneComponent';
import '../cssFiles/hexagoneStyleSheet.css';
import produce from 'immer';


export default function HexBoard({ rowsNumber, restart, player1, player2, first }) {

    const DFS = (nodes, n, path) => {

        nodes[n].flag = 1;
        path[path.length] = nodes[n];
        for (let p = 0; p < nodes[n].edges.length; p++) {
            if (nodes[nodes[n].edges[p]].flag === -1) {
                DFS(nodes, nodes[n].edges[p], path);
            }
        }

    }

    const [showMsg, setShowMsg] = useState(true);
    useEffect(() => {
        const rows = [];
        for (let i = 0; i < parseInt(rowsNumber); i++) {

            rows.push(Array.from(Array(parseInt(rowsNumber)), () => 0))
        }
        setGrid(rows);
        setWhosTurn(1);
        setShowMsg(true);
        setWinner(0);
    }, [restart, rowsNumber])
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i = 0; i < rowsNumber; i++) {
            rows.push(Array.from(Array(parseInt(rowsNumber)), () => 0))
        }

        return rows;
    });
    const [whosTurn, setWhosTurn] = useState(1);

    const fillingCell = (i1, i2, value) => {
        setGrid(produce(grid, newgrid => { newgrid[i1][i2] = value; }));
        setWhosTurn(t => t % 2 + 1);
    }
    const [winner, setWinner] = useState(0);
    useEffect(() => {
        // getting filled cells as noeds array
        let nodes = [];
        let components = [];
        let path = [];
        grid.map((rows, i) => rows.map((cell, j) => {
            if (cell === (whosTurn % 2 + 1)) {
                nodes[nodes.length] = {
                    i: i,
                    j: j,
                    flag: -1,
                    index: nodes.length,
                    edges: []
                }
            }
            return '';
        }))
        // getting the edges
        nodes.map((N, indexx) => {
            let edgs = [];
            nodes.map((E) => {
                if (((N.i - 1 === E.i) && (N.j === E.j)) || ((N.i - 1 === E.i) && (N.j + 1 === E.j)) ||
                    ((N.i === E.i) && (N.j - 1 === E.j)) || ((N.i === E.i) && (N.j + 1 === E.j)) ||
                    ((N.i + 1 === E.i) && (N.j - 1 === E.j)) || ((N.i + 1 === E.i) && (N.j === E.j))) {
                    edgs[edgs.length] = E.index;
                }

                return "";
            })
            nodes[indexx] = { ...nodes[indexx], edges: edgs };
            return "";
        })
        /// getting connected components

        for (let n = 0; n < nodes.length; n++) {
            if (nodes[n].flag === -1) {
                DFS(nodes, n, path);
                components[components.length] = [];
                Array.prototype.push.apply(components[components.length - 1], path);
                path = [];
            }
        }

        components.map((c) => {
            let start = false;
            let end = false;
            c.map((n) => {
                if (whosTurn === 2) {
                    if (n.i === 0) start = true;
                    if (n.i === rowsNumber - 1) end = true;
                }
                else {
                    if (n.j === 0) start = true;
                    if (n.j === rowsNumber - 1) end = true;
                }return '';
            });
            if (start && end) setWinner(whosTurn % 2 + 1);
            return'';
        })

    }, [whosTurn, grid])
    const gridGraph = grid.map((rows, index) =>
        <div key={index} style={{
            display: 'flex',
            marginLeft: (index <= 8) ? 26 * index : 25 * index,
            position: 'relative',
            top: -20 * index
        }}>
            {rows.map((cell, index2) => <Hexagone key={index2}
                winner={winner}
                cercled={cell}
                index={index}
                index2={index2}
                value={whosTurn}
                rowsNumber={parseInt(rowsNumber)}
                fillingCell={fillingCell} />)}</div>)
    return (
        <>{ (showMsg) ?<div class="alert">
        <span class="closebtn" onClick={()=>setShowMsg(false)}>&times;</span>
        the first player is : {
                (first === 1) ? player1 : player2
            }
    </div>:""}
            <div className="navbar-game">
                <span className="active-game" style={{
                    color: 'black',
                    minWidth: 200,
                    float: 'left',
                    backgroundColor: ((first === 1 && whosTurn === 1) || (first === 2 && whosTurn === 2)) ? 'yellow' : 'white',
                    border: (first === 1) ? '4px solid red' : '4px solid blue',
                    borderColor: (first === 1) ? 'red' : 'blue'
                }}>{player1}</span>
                <span></span>
                <span className="active-game" style={{
                    color: 'black',
                    minWidth: 200, float: 'right',
                    backgroundColor: (((first === 1 && whosTurn === 2) || (first === 2 && whosTurn === 1))) ? 'yellow' : 'white',
                    border: (first === 1) ? '4px solid blue' : '4px solid red',
                    borderColor: (first === 1) ? 'blue' : 'red'
                }}>{player2}</span>
            </div>
           
            <div style={{
                margin: '20px',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>

                <div style={{
                    marginLeft: 40,

                }}>

                    {gridGraph}
                </div>

            </div>
            <Modal>

            </Modal>

        </>
    )
}
