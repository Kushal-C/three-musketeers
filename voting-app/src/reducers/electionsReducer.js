import { SET_ACTIVE_ELECTION , VOTE_ON_ELECTION} from '../actions/electionActions';

let dummyElections = [
    { 
        id: 1, 
        name: "Cats vs Dogs 2021",
        listOfVoterIds: [], 
        questions: [
            {
                votesForA: 0,
                votesForB: 0,
                questionText: "Cats vs Dogs?",
                optionAText: "Cats",
                optionBText: "Dogs",
            },
        ]
    },
    { 
        id: 2, 
        name: "Food Battle 2021",
        listOfVoterIds: [1,3,4], 
        questions: [
            {
                votesForA: 0,
                votesForB: 0,
                questionText: "Pizza vs Ice Cream",
                optionAText: "Pizza",
                optionBText: "Ice Cream",
            },
            {
                votesForA: 0,
                votesForB: 0,
                questionText: "Is a hotdog a sandwich?",
                optionAText: "Yes",
                optionBText: "No",
            },
        ]
    },
];

export const electionsReducer = ( elections = dummyElections, action) => {
    switch(action.type){
        case VOTE_ON_ELECTION:
            let {electionId, voterId, votes } = action.vote;
            let electionsCopy = [...elections];
            let index = electionsCopy.findIndex((e) => e.id === electionId);
            electionsCopy[index].listOfVoterIds.push(voterId);
            electionsCopy[index].questions.forEach(
                (q, i) => votes[i] === "a" ? q.votesForA++ : q.votesForB++
            );
            return electionsCopy;
        default:
            return elections;
    }
};

export const setActiveElectionReducer = (activeElection = {}, action) => {
    switch(action.type){
        case SET_ACTIVE_ELECTION:
            activeElection = action.election;
        case VOTE_ON_ELECTION:
            return {};
        default:
            return activeElection;
    }
}