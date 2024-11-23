
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
interface Props{
    onSelectedOrder: (order: string |null)=>void;
    selectedOrder:string | null;
}
interface OrderItems{
    displayName:string;
    name:string;
}
const OrderSelector = ({onSelectedOrder,selectedOrder}:Props) => {
    const orderItems:OrderItems[]=  [{
        displayName:'Relevance',
        name:''
    },
        {
            displayName:'Date added',
            name:'added'
        },
        {
            displayName:'Name',
            name:'name'
        },
        {
            displayName:'Release Date',
            name:'released'
        }
        ,
        {
            displayName:'Popularity',
            name:'metacritic'
        }
        ,
        {
            displayName:'Average Rating',
            name:'rating'
        }
        ,
    ];


        return (

            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                     {selectedOrder!=undefined?"Order by "+  orderItems.find(o=>o.name===selectedOrder)?.displayName:"Order by Relevance" }
                </MenuButton>
                <MenuList>
                    {
                        orderItems.map((item) => (
                            <MenuItem onClick={()=>onSelectedOrder(item.name)} key={item.displayName} >{item.displayName}</MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        );

};

export default OrderSelector;
