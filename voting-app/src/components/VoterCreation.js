import { useState } from 'react';

import { VoterList } from './VoterList';
import { VoterForm } from './VoterForm';
import { useSortedList } from '../hooks/useSortedList';

export const VoterCreation = ({ voters: initialVoters }) => {

  const [ voters, sortInfo, appendVoter, replaceVoter, , removeVoter, sortOnColumn ] = useSortedList([ ...initialVoters ]);

  const [ editVoterId, setEditVoterId ] = useState(-1);

  const addVoter = (newVoter) => {
    appendVoter(newVoter);
    setEditVoterId(-1);
  };

  const putVoter = (voter) => {
    replaceVoter(voter);
    setEditVoterId(-1);
  };

  const deleteVoter = (voterId) => {
    removeVoter(voterId);
    setEditVoterId(-1);
  };

  const cancelVoter = () => {
    setEditVoterId(-1);
  };

  const editVoter = setEditVoterId;
  
    return (
      <>
        <h1>Voter registration system</h1>
        <button>Register Voter</button>
        <button>Display Registered Voters</button>

        <VoterForm onSubmitVoter={addVoter}/>
        <VoterList voters={voters} editVoterId={editVoterId}
          votersSort={sortInfo} onSortVoters={sortOnColumn}
          onEditVoter={editVoter} onDeleteVoter={deleteVoter} 
          onSaveVoter={putVoter} onCancelVoter={cancelVoter} />
      </>
    );
  };