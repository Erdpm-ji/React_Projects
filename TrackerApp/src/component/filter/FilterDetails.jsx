function FilterDetails() {
    return (
        <>
            <h2>Filter Details</h2>
            <div>
                <p>Priority</p>
                <select>
                    <option value="0">All</option>
                    <option value="1">Low</option>
                    <option value="2">Median</option>
                    <option value="3">High</option>
                </select>
            </div>
            <div>
                <p>Catagory</p>
                <select>
                    <option value="0">All</option>
                    <option value="1">Low</option>
                    <option value="2">Median</option>
                    <option value="3">High</option>
                </select>
            </div>
        </>
    );
}

export default FilterDetails;