import { useContext } from "react";
import { ItemList } from "../store/ItemList";

const ListOfBugdet = () => {

    const {item, deleteBugdet} = useContext(ItemList);
        const items = item;
    if (!Array.isArray(items)) {
        return <p>No items available</p>; // Fallback if Items is not an array
      }
  return (
    <>
      <table className="table">
        <tbody>
          {items.map((item) =>(
                <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.type}</td>
                <td>
                    <button type="button" onClick={()=>deleteBugdet(item.name)}>Delete</button>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListOfBugdet;
