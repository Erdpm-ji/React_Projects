import Table from 'react-bootstrap/Table';
import Style from './GroceryContainer.module.css';
import AppName from './AppName';
import ItemList from './ItemList';
import AddItem from './AddItem';
import Items from './Items';
import { useState } from 'react';

const GroceryContainer = () => {

    const [items, setItems] = useState(Items); 

    const onUpdate = (Items) => {
        setItems(Items)
    }

    return (
        <>
            <div className={[Style.container]}>
                <AppName style={Style.appname}/>
                <AddItem items={items} onUpdate={onUpdate}></AddItem>
                <Table striped bordered hover>
                    <ItemList items={items} onUpdate={onUpdate}/>
                </Table>
            </div>
        </>
    )
}

export default GroceryContainer;