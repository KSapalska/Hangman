/* export default function Status(props){
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
                   <p>{props.farewellText}</p>
                </div>
    )}
        </>
    )
} */

    export default function Status(props) {
        return (
            <>
                {props.isGameOver ? (
                    <div className={`status ${props.isGameWon ? 'win' : 'lose'}`}>
                        <h2>{props.isGameWon ? 'You win!' : 'Game over!'}</h2>
                        <p>{props.isGameWon ? 'Well done! 🎉' : 'You lose! Better start learning Assembly 😭'}</p>
                    </div>
                ) : (
                    <div className="status">
                        <p>{props.farewellText}</p>
                    </div>
                )}
            </>
        );
    }