import { SET_ACTIVE_ELECTION } from '../actions/electionActions';

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
    return elections;
};

export const voteOnElectionReduecr = (election = {}, action) => {
    switch(action.type){
        case SET_ACTIVE_ELECTION:
            election = action.election;
        default:
            return election;
    }
}