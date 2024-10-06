function FunctionMap(){

    let employee = [{
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Jane",
        age: 25,
        city: "London"
    },
    {
        name: "Bob",
        age: 35,
        city: "Paris"
    },{
        name: "Alice",
        age: 28,
        city: "Tokyo"
    },{
        name: "Tom",
        age: 32,
        city: "Sydney"
    }
    ];

    return(
        <>
        <table>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </thead>
            <tbody>
                {employee.map((emp, index) => (
                    <tr key={index}>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                        <td>{emp.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default FunctionMap;