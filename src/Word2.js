import Button from './Button'

function Word2({ handleRemove, w }){
    const wordStyle = {
        display: 'flex',
        alignltems: 'center',
        justifyContent: 'center'
    }

    const onRemove = (e) => {
        handleRemove(e)
    }

    return (
        <div style={wordStyle}>
            <h2>{w.word}</h2>
            <Button size="small" type="button" handleClick={(e) => onRemove(e)}>DELETE</Button>
        </div>
    )
}

export default Word2