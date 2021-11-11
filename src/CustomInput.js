import React, { Component } from 'react'

class CustomInput extends Component {
    constructor(props){
        super(props)
        this.textInput = React.createRef() // ref 생성하기
    }
    focusInput = () => {
        console.log(this.textInput.current)
        this.textInput.current.focus() // ref 사용하기
    }
    render(){
        return (
            <>
                <input type="text" ref={this.textInput}></input> {/* ref 설정하기 */}
                <button onClick={this.focusInput}>focus input</button>
            </>
        )
    }
}

export default CustomInput