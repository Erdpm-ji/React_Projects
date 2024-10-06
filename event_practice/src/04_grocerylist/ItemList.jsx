import Item from "./Item";
import Style from "./Item.module.css"

const ItemList = ({items}) => {
    return (
        <>
            <thead>
                <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <Item className={Style.Items} Items={items}/>
            </tbody>
        </>
    )
}

export default ItemList;