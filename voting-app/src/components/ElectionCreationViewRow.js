


export const ElectionCreationViewRow = ({ election }) => {
    return (
        <>
        {election.questions.map((q, i) => {
            return (<tr key={q.questionText}>
                <th>{i === 0 ? election.name: "" }</th>
                <th>{q.questionText}</th>
                <th>{q.optionAText}</th>
                <th>{q.optionBText}</th>
                <th>{q.votesForA}</th>
                <th>{q.votesForB}</th>
            </tr>)
        })}
        </>
    )
}