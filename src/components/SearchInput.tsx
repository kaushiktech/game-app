import React, {useContext, useRef} from 'react';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {UserContext} from "../App";

const SearchInput = () => {

    const searchQuery = useContext(UserContext)
    const ref=useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(event)=> {
            event.preventDefault();
            if (searchQuery && ref.current) {
                searchQuery(ref.current.value);
            }
        }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch/>}/>
            <Input ref={ref} placeholder="Search games...." variant="filled" borderRadius={20}></Input>
        </InputGroup>
        </form>
    );
};

export default SearchInput;
