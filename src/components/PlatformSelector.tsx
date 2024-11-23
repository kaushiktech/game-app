
import {Button, Link, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import {Platform} from "../hooks/useData";
interface Props{
    onSelectedPlatform: (platform:Platform)=>void;
    selectedPlatform:Platform | null;
}
const PlatformSelector = ({onSelectedPlatform,selectedPlatform}:Props) => {
    const {data,error}=usePlatforms();
    if(error)return null;
    else {
        return (

            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                    {selectedPlatform!==null?selectedPlatform.name:"Platform"}
                </MenuButton>
                <MenuList>
                    {
                        data.map((platform) => (
                            <MenuItem onClick={()=>onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        );
    }
};

export default PlatformSelector;