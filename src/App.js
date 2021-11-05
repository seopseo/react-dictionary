import './App.css';
import React, { Component } from 'react';
// import Movie from './Movie';
import Word from './Word';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true, 
            words: [] 
        } 
    } 
    
    componentDidMount(){ 
        fetch('https://dictionary-search-app.herokuapp.com/api/words') 
        .then( res => res.json()) 
        .then( result => { 
            const {words} = result 
            console.log(words) 
            this.setState({loading: false, words}) 
        }) 
    } 
    
    render(){ 
        const {loading, words} = this.state 
        const style = { 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '60%',
            margin: '100px auto', 
            textAlign: 'center' 
        } 
        const loadingStyle = { 
            position: 'absolute', 
            left: '50%', 
            top:'50%', 
            transform: 'translate(-50%, -50%)', 
            fontSize: '2rem' 
        } 
        if(loading){ 
            return ( 
            <div style={loadingStyle}> 
            <h1>Loading ...</h1> 
            </div> 
            ) 
        }else{ 
          return ( 
            <div style={style}> 
              {words.map(word => { 
                return ( 
                    <Word 
                    key={word._id}
                    r_seq={word.r_seq} 
                    r-word={word.r_word} 
                    r_link={word.r_link} 
                    r_chi={word.r_chi} 
                    r_des={word.r_des} 
                    r_pos={word.r_pos}
                    ></Word> 
                
                 ) 
              })} 
           </div> 
         ) 
      } 
    } 
} 
export default App;

