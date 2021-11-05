import React, { Component } from 'react'

class Todo extends Component{
    // 초기 데이터 선언
    //   state = {
    //   name: "cleaning",
    //   done: false,
    //   description: "cleaning my room"
    // }
    
    constructor(props){
        super(props)
        this.state = {
            name: "cleaning",
            done: false,
            description: "cleaning my room"
        }
        // 아래 화살표 함수를 안쓰면 추가
        // this.changeTodoName = this.changeTodoName.bind(this)
    }
    // 이벤트 핸들러 함수
    changeTodoName = () => {
        console.log(this)
        this.setState({ name: "learning react"})
    }
    render(){
        const { name, done, description } = this.state
        // const todo = {
        //     name: "cleaning",
        //     done: false,
        //     description: "cleaning my room"
        return (
            <>
                <h3>name: {name}</h3>
                <h4>done: {done? "finished": "not done!"}</h4>
                <p>description: {description}</p>
                <button type="button" onClick={this.changeTodoName}> 할일 이름 바꾸기</button>
            </>
        )
    }
}
export default Todo;