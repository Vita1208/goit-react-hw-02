

function Feedback({ reviews, totalFeedback, totalPositive }) {
    const { bad, neutral, good } = reviews;
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: { neutral}</p>
            <p>Bad: {bad }</p>
            <p>Total :{totalFeedback}</p>
            <p>Positive: {totalPositive}%</p>
        </>
    )   
}

export default Feedback;