import { useState } from 'react'
import './App.css'
import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {Genre} from "./hooks/useGenres";
import {Platform} from "./hooks/useData";
import PlatformSelector from "./components/PlatformSelector";
import OrderSelector from "./components/OrderSelector";
export interface GameQuery{
    genre:Genre|null;
    platform:Platform|null;
    order:string|null;
}
function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
           <GridItem area="nav"><NavBar/></GridItem>
           <Show above="lg" >
           <GridItem area="aside" paddingX={5}><GenreList onSelectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/></GridItem>
           </Show>
           <GridItem area="main">
               <HStack spacing={5} paddingLeft='40px' marginBottom={2}>
               <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
               <OrderSelector selectedOrder={gameQuery.order} onSelectedOrder={(order)=>setGameQuery({...gameQuery,order})} />
               </HStack>
               <GameGrid gameQuery={gameQuery}/></GridItem>
       </Grid>
  )
}

export default App
