

export const ElectionCreationForm = () => {

    // const change = e => {
    //     null
    // };
 
    return(
        <form>
            <div>
                <h2>Form</h2>
                <label htmlFor="Question-A">Question-A</label>
                <input
                    type="text"
                    id="election-name"
                    value={null}
                    //onChange={change}
                    name="name"
                />
                <label htmlFor="Option-1">Option 1</label>
                <input></input>
                <label htmlFor="Option-2">Option 2</label>
                <input></input>
            </div>
        </form>
    )
}