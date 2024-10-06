function Conditional1(){

    let employees = [{
        id:1,
        name:"Rahul",
        age:25,
        experiance: 5
    },
    {
        id:2,
        name:"Raj",
        age:35,
        experiance: 3
    },
    {
        id:3,
        name:"Rajesh",
        age:45,
        experiance: 2.5
    },
    {
        id:4,
        name:"Ramesh",
        age:55,
        experiance: 7
    },
    {
        id:5,
        name:"Rakesh",
        age:65,
        experiance: 1
    },
    {
        id:6,
        name:"Rajat",
        age:75,
        experiance: 4
    }
    ];
    return(
        <>
        <table>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Experiance</th>
            </thead>
            <tbody>
                {employees.map((emp)=>{
                    return(
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.experiance > 2.5 ? <h6>Eligible</h6>: <h6>Not Eligible</h6>}</td>
                        </tr>
                    );

                })
                };
            </tbody>
        </table>
        </>
    );
}

export default Conditional1;