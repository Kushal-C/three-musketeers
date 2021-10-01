import { VoterList } from './VoterList';
import { VoterForm } from './VoterForm';

export const VoterCreation = ({ 
  votersSort, voters: initialVoters, voterId: editVoterId,
  onSortVoters: sortVoters, onAddVoter : addVoter,
  onSaveVoter: saveVoter, onDeleteVoter: deleteVoter, 
  onCancelVoter: cancelVoter, onEditVoter: editVoter,

}) => {  
    return (
      <div className="voterForm">
        <VoterForm onSubmitVoter={addVoter}/>
        <VoterList voters={initialVoters} editVoterId={editVoterId}
          onEditVoter={editVoter} onDeleteVoter={deleteVoter} 
          onSaveVoter={saveVoter} onCancelVoter={cancelVoter}
          votersSort={votersSort} onSortVoters={sortVoters}/>
      </div>
    );
  };
