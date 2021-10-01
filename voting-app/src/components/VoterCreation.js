import { VoterList } from './VoterList';
import { VoterForm } from './VoterForm';

export const VoterCreation = ({ 
  votersSort, voters: initialVoters, voterId: editVoterId,
  onSortVoters: sortVoters, onAddVoter : addVoter,
  onSaveVoter: saveVoter, onDeleteVoter: deleteVoter, 
  onCancelVoter: cancelVoter, onEditVoter: editVoter,

}) => {  
    return (
      <>
        <h1>Voter registration system</h1>
        <VoterForm onSubmitVoter={addVoter}/>
        <VoterList voters={initialVoters} editVoterId={editVoterId}
          onEditVoter={editVoter} onDeleteVoter={deleteVoter} 
          onSaveVoter={saveVoter} onCancelVoter={cancelVoter}
          votersSort={votersSort} onSortVoters={sortVoters}/>
      </>
    );
  };
