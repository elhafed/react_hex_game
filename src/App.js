import React, { useState } from 'react';
import Modal from 'react-modal';
import Home from './Home';
import AboutTheGame from './Components/AboutTheGame'
import './App.css';

// import Hexagone from './Components/hexagoneComponent'
import HexBoard from './Components/hexBoard'

function App() {
  const[restart,setRestart]=useState(0);
  const[isModalOpen,setisModalOpen]=useState(false);
  const[pageNumber,setpageNumber]=useState(0);
  const [gameInfos,setGameInfos]=useState({player1:'',player2:'', first:1,rowsNumber:7})
  const handleRestart=()=>{
    setRestart(R=>R+1);
  }
  return (
    <div className="App">
      {/* The navigation bar */}
      <div className="navbar">
        <span className={(pageNumber===0)?"active":""} onClick={()=>{setpageNumber(0)}}> Home </span> 
        <span className={(pageNumber===1)?"active":""} onClick={()=>{setpageNumber(0);setisModalOpen(true);}}> New game </span>
        <span className={(pageNumber===2)?"active":""} onClick={()=>{setpageNumber(2)}}> About the game </span>
        <span className={(pageNumber===3)?"active":""} onClick={()=>{setpageNumber(3)}}> Contact </span>
       {/* {(pageNumber!==1&&gameInfos.player1!==''&&gameInfos.player2!=='')? <span  
              onClick={()=>{setpageNumber(1)}}
              style={{float:'right',backgroundColor:'maroon'}}> Continue </span>:''} */}
      </div>

     {
        (pageNumber===0) ? <Home/> : 
        (pageNumber===1) ? <div> <HexBoard  rowsNumber={ parseInt(gameInfos.rowsNumber)} 
                                            restart={restart}
                                            player1={gameInfos.player1}
                                            player2={gameInfos.player2}
                                            first={gameInfos.first} />
                            </div>:
        (pageNumber===2) ? <AboutTheGame/>:
        (pageNumber===3) ?" Contact me":""}

      <Modal ariaHideApp={false} isOpen={isModalOpen} style={{content : {top :'50%',left:'50%',right: 'auto',bottom: 'auto',
    marginRight : '-50%',transform: 'translate(-50%, -50%)'}}}>
        <form onSubmit={(e)=>{e.preventDefault()
        setGameInfos({...gameInfos,first:(Math.random() * 10).toFixed()%2 +1})
        handleRestart(); setpageNumber(1);setisModalOpen(false);
        
      }}style={{
          width:600,
          height : 400,
          marginTop:10
        }}>
          <label>First player Name : <span style={{color:'red'}}>*</span></label>
           <input type='text' value={gameInfos.player1} 
           onChange={(v)=>setGameInfos({...gameInfos,player1:v.target.value})}
           required/><br/>
          <label>Second player Name : <span style={{color:'red'}}>*</span></label>
           <input type='text' value={gameInfos.player2} 
           onChange={(v)=>setGameInfos({...gameInfos,player2:v.target.value})}
            required/>
             <label>Number of rows : <span style={{color:'red'}}>*</span></label>
            <select value={gameInfos.rowsNumber} onChange={(v)=>setGameInfos({...gameInfos,rowsNumber:v.target.value})}>
              <option value={7}>7</option>
              <option value={9}>9</option>
              <option value={11}>11</option>
              <option value={13}>13</option> 
              <option value={15}>15</option>
            </select>
          <button type='submit' className="modalbutton">Start the game</button>
          <button type='button' className="modalbutton" 
          onClick={()=>setisModalOpen(false)}
          style={{backgroundColor:'rosybrown'}}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
