import {createContext, useContext, useState} from 'react'
import './App.css'
import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {Genre} from "./hooks/useGenres";
import {Platform} from "./hooks/useData";
import PlatformSelector from "./components/PlatformSelector";
import OrderSelector from "./components/OrderSelector";
import GameHeader from "./components/GameHeader";
export interface GameQuery{
    genre:Genre|null;
    platform:Platform|null;
    order:string|null;
    searchQuery:string;
}
export const UserContext =createContext<((query:string) => void) | null>(null);


function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const setSearchQuery = (query:string) => {
      setGameQuery({...gameQuery,searchQuery:query})
  }
  return (
       <Grid templateAreas={{
           base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
       }}
       templateColumns={{
           base:'1fr',
           lg:'200px 1fr'
       }}
       >
           <GridItem area="nav"><UserContext.Provider value={setSearchQuery}><NavBar/></UserContext.Provider></GridItem>
           <Show above="lg" >
           <GridItem area="aside" paddingX={5}><GenreList onSelectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/></GridItem>
           </Show>
           <GridItem area="main">
                <GameHeader gameQuery={gameQuery}/>
               <HStack spacing={5} paddingLeft='40px' marginBottom={1}>
               <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
               <OrderSelector selectedOrder={gameQuery.order} onSelectedOrder={(order)=>setGameQuery({...gameQuery,order})} />
               </HStack>
               <GameGrid gameQuery={gameQuery}/></GridItem>
       </Grid>
  )
}

export default App
