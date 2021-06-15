import React from 'react';

export default function AboutTheGame () {
   
        return (
            <div style={{overflow:'auto'}}>
                    <h1 style={{marginLeft:15,textAlign:'left'}}> About the hex game :</h1>
                <div >
                    <img  style={{marginTop:60, marginRight:200}} src={process.env.PUBLIC_URL + '/Hex.PNG'} />
                </div>
                <div  style={{margin:15}}>
                    <ul>
                        <li style={{textAlign:'left'}}> <h4 >The game history : </h4></li>
                    </ul>
                    <blockquote style={{marginLeft:15,textAlign:'left'}} cite="https://en.wikipedia.org/wiki/Hex_(board_game)">
                    <b>Hex</b> is a two player abstract strategy board game in which players attempt to connect opposite sides of a hexagonal board. Hex was invented by mathematician and poet <b>Piet Hein </b>in 1942 and independently by <b>John Nash</b> in 1948.
                    </blockquote>
                    <blockquote style={{marginLeft:15,textAlign:'left'}} cite="https://en.wikipedia.org/wiki/Hex_(board_game)">
                    It is traditionally played on an <i>11×11 </i>rhombus board, although<i> 13×13 </i>and <i>19×19 </i>boards are also popular. Each player is assigned a pair of opposite sides of the board which they must try to connect by taking turns placing a stone of their color onto any empty space. Once placed, the stones are unable to be moved or removed. A player wins when they successfully connect their sides together through a chain of adjacent stones. Draws are impossible in Hex due to the topology of the game board.
                    </blockquote>
                    <blockquote style={{marginLeft:15,textAlign:'left'}} cite="https://en.wikipedia.org/wiki/Hex_(board_game)">
                    The game has deep strategy, sharp tactics and a profound mathematical underpinning related to the Brouwer fixed-point theorem. The game was first marketed as a board game in Denmark under the name Con-tac-tix, and Parker Brothers marketed a version of it in 1952 called Hex; they are no longer in production. Hex can also be played with paper and pencil on hexagonally ruled graph paper
                    </blockquote>
                    <b>To read more about this game <a href='https://en.wikipedia.org/wiki/Hex_(board_game)' target="_blank">clic here</a></b>
                </div>

                <div  style={{margin:15}}>
                    <ul>
                        <li style={{marginLeft:15,textAlign:'left'}}> <h4 >The game rules : </h4></li>
                    </ul>
                    <ol style={{marginLeft:'5em',textAlign:'left'}}>
                        <li >the first player is determined by the lot.</li>
                        <li>the first player plays with the red stones.</li>
                        <li >The movements follow one another in turn between the two players. They only consist of adding new pieces to the board, one per player per turn.</li>
                        <li>Pieces already placed on the board cannot be moved.</li>
                        <li>The players will keep adding pieces to the board until one of them wins.</li>
                    </ol>
                </div>
                <div style={{margin:120}}></div>
                
            </div>
        )
    
}
