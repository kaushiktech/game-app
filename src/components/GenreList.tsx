import React, {useState} from 'react';
import useGenres, {Genre} from "../hooks/useGenres";
import useData from "../hooks/useData";
import {Heading, HStack, Image, Link, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
interface Props{
    onSelectGenre: (genre: Genre) => void;
    onSelectedGenre:Genre | null;
}
const GenreList = ({onSelectGenre,onSelectedGenre}:Props) => {
    const {data}=useGenres();

    return (
        <>
        <Heading fontSize="2xl" marginBottom={4}>Genres</Heading>
        <List>
            {data.map(genre => (
                <Link backgroundColor="blue" key={genre.id} onClick={()=>onSelectGenre(genre)} >
                <ListItem paddingY="5px" ><HStack>

                    <Image objectFit="cover" boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
                    <Text fontWeight={genre.id===onSelectedGenre?.id?'bold':'default'} fontSize="lg">{genre.name} </Text>

                </HStack>
                </ListItem>
                </Link>
            ))}
        </List>
        </>
    );

};

export default GenreList;
