import './App.css'; 
import React, { Component } from 'react'; 
import words from './DummyData' 
import Word from './Word2' 

class App extends Component { 
    state ={
        words: words
    }
    // 삭제하는 이벤트핸들러 함수
    handleRemove = (id, e) => { 

        const word = e.target.previousSibling.innerText 
        console.log(word) 
        console.log(id) 
        alert(`You want to delete word - ${word}?`) 

        const words = this.state.words.filter( (w, index) => index !== id ) 
        // 제거하려는 단어의 id와 일치하는 요소만 걸러냄
        this.setState({words})
    } 
    
    render(){ 
        const { words } = this.state
     
        return ( 
        <div> 
            <h1 style={{textAlign:'center'}}>Word List</h1> 
            {words.map( (w, id) => { 
                return ( 
                    <Word key={id} w={w} handleRemove={(e) => this.handleRemove(id, e)}></Word> 
                 ) 
             })} 
            </div> 
            ) 
        } 
    } 
    
    export default App;

