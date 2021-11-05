import React, { Component } from 'react'

// class Person extends Component {
function Person({country, name, age}) {
    //render(){
        // 초기 데이터
        // const name = "seopseo"
        // const age = 32
        // const {country, name, age} = props // 부모로부터 전달되는 값, 함수 사용시 this. 제거
        // props을 지정 후 넣어줘도 되며, Person에 넣어줘도됨

        // HTML 템플릿
        return (
            //<fragment>
            <>
                <h1> {country} </h1>
                <h3> {name} </h3>
                <h4> {age} </h4>
            </>
                //</fragment>
        )
    }
export default Person;