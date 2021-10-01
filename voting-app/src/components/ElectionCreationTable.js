import { ElectionCreationViewRow } from "./ElectionCreationViewRow"



export const ElectionCreationTable = ({buttonText, elections, onSaveElection: saveElection}) => {
    return(
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Question(s)</th>
              <th>Option A</th>
              <th>Option B</th>
              <th>Votes for A</th>
              <th>Votes for B</th>
          </tr>
        </thead>
        <tbody>
            {elections.map((election) => 
              <ElectionCreationViewRow key={election.id} election={election} />
            )}
        </tbody>
      </table>
    );
}