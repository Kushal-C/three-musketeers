import { useState } from 'react';
import { useSelector } from 'react-redux';

import { VoterList } from './VoterList';
import { VoterForm } from './VoterForm';

export const VoterCreation = ({ voters: initialVoters }) => {

  const [ voters, setVoters ] = useState([ ...initialVoters ]);

  const [ editVoterId, setEditVoterId ] = useState(-1);

  const addVoter = (newVoter) => {
    setVoters([
      ...voters,
      {
        ...newVoter,
        id: Math.max(...voters.map(voter => voter.id), 0) + 1,
      },
    ]);
    setEditVoterId(-1);
  };

  const saveVoter = (voter) => {
    const newVoters = [ ...voters ];
    const voterIndex = newVoters.findIndex(v => v.id === voter.id);
    newVoters[voterIndex] = voter;
    setVoters(newVoters);
    setEditVoterId(-1);
  };


  const deleteVoter = (voterId) => {
    setVoters(voters.filter(voter => voter.id !== voterId));
    setEditVoterId(-1);
  }  

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
          onEditVoter={editVoter} onDeleteVoter={deleteVoter} 
          onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
      </>
    );
  };
