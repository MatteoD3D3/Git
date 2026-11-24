export default function HelloWorld ({name}: {name:string} ) {
    return(
        <div>
            <p> Hello World! </p>
            <p> My name is {name} </p>
            <Recipe />
        </div>
    )
}

function Recipe () {
    return (
        <div> 
            <h3> Baked Apples: </h3>
            <ul>
                <li> Core apples </li>
                <li> Pour maple syrup in the core </li>
                <li> Cook in microwave for 5 minutes </li>
            </ul>
        </div>
    )
}