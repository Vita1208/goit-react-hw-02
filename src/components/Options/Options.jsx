
function Options({ updateFeedback, totalFeedback }) {
    return (
        <>
        <button onClick={() => updateFeedback("good")}>Good</button>
        <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button onClick={() => updateFeedback("bad")}>Bad</button>
          {totalFeedback ? (
        <button onClick={() => updateFeedback("reset")}>Reset</button>) : null}
     </>       
    )
}
export default Options;