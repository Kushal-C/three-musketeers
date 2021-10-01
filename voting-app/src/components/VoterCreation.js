import { useState } from 'react';

import { VoterList } from './VoterList';
import { VoterForm } from './VoterForm';

export const VoterCreation = ({ 
  voters: initialVoters, voterId: editVoterId, onAddVoter : addVoter,
  OnSaveVoter: saveVoter, onDeleteVoter: deleteVoter, 
  onCancelVoter: cancelVoter, onEditVoter: editVoter,
}) => {

  console.log(editVoterId);
  
    return (
      <>
        <h1>Voter registration system</h1>
        <button>Register Voter</button>
        <button>Display Registered Voters</button>

        <VoterForm onSubmitVoter={addVoter}/>
        <VoterList voters={initialVoters} editVoterId={editVoterId}
          onEditVoter={editVoter} onDeleteVoter={deleteVoter} 
          onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
      </>
    );
  };
