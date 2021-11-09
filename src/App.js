// import react from 'react'
import './App.css';
import { Component } from 'react'
import Nav from './Nav'

class App extends Component {
    state ={
        menus: [
            {
                siteTitle:'구글',
                siteUrl: 'https://google.com'
            },
            {
                siteTitle:'네이버',
                siteUrl: 'https://naver.com'
            },
            {
                siteTitle:'사전검색',
                siteUrl: 'https://seopseo.github.io/dictionary-front/'
            }
        ]
    }
    render(){
        return (
            <div className="App">
                <Nav menus={this.state.menus}></Nav>
            </div>
        )
    }
}

export default App;