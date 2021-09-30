


export const ElectionCreationTable = ({buttonText, createdElections}) => {
    return(
    <table>
      <thead>
        <tr>
            <th>Name</th>
            <th>Question</th>
            <th>Option A</th>
            <th>Option B</th>
            <th>Votes for A</th>
            <th>Votes for B</th>
        </tr>
      </thead>
      <tbody>
          {createdElections.map((election) => 
          <tr>
            <td>{election.name}</td>
            <td>{election.questions[0].questionText}</td>
            <td>{election.questions[0].optionAText}</td>
            <td>{election.questions[0].optionBText}</td>
            <td>{election.questions[0].votesForA}</td>
            <td>{election.questions[0].votesForB}</td>
          </tr>
          )}
      </tbody>
      <button type="button" onClick={() => null /*submitElections*/}>
            {buttonText}
        </button>
    </table>
    )
}