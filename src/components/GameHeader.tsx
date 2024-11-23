import React from 'react';
import {Text} from "@chakra-ui/react";
import {GameQuery} from "../App";
interface Props {
    gameQuery: GameQuery;
}
const GameHeader = ({gameQuery}:Props) => {
    return (
        <>
        <Text marginX={10} marginBottom={4} fontWeight={"bold"} fontSize="3xl">{gameQuery.platform?.name} {gameQuery.genre?.name} Games</Text>
        </>
    );
};

export default GameHeader;
