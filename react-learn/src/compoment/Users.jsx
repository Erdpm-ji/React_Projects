function Users() {
    let users = [{
        id: 1,
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        id: 2,
        name: "Jane",
        age: 25,
        city: "London"
    },
    {
        id: 3,
        name: "Bob",
        age: 35,
        city: "Paris"
    }, {
        id: 4,
        name: "Alice",
        age: 28,
        city: "Tokyo"
    }, {
        id: 5,
        name: "Tom",
        age: 32,
        city: "Sydney"
    }
    ];

    return (
        <>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );

};

export default Users;