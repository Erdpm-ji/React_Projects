const Item = ({ Items }) => {
    return (
        <>
            {Items.map((item, index) => (
                <tr key={index}>
                    <td>{item.item}</td>
                    <td><center>{item.quentity}</center></td>
                </tr>

            ))}

        </>
    )
}

export default Item;