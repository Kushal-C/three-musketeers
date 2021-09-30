

import { ElectionCreationTable } from '../components/ElectionCreationTable';

export const ElectionCreationTableContainer = () => {

    let createdElections = [
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

    return(
        <div>   
            <h2>Table</h2>
            <ElectionCreationTable buttonText="Submit All Elections" createdElections={createdElections}/>; 
        </div>
    )
}