export default function Status(props){
    return(
        <>
      { props.isGameOver ? (
        props.isGameWon?(
        <div className="win status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
        </div>) :
        (
            <div className="lose status">
            <h2>Game over!</h2>
            <p>You lose! Better start learning Assembly 😭</p>
            </div>)
        
    ) : (
        <div className="status">
                    {/* This div will be black as per the default .status class */}
                </div>
    )}
        </>
    )
}