function Card({word_picked}){
    const cardStyle ={
        background: 'tan',
        width: '30%',
        margin: 'auto',
        padding: '20px'
    }

    return (
        <div style={cardStyle}>
            <h2>{word_picked.word}</h2>
            <h3>{word_picked.meaning}</h3>
        </div>
    )

}
export default Card