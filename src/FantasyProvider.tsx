import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface FantasyPropsChildren{
  children: ReactNode;
}

interface Fantasies{
  id: number;
  name: string;
  measures: string;
  price: number;
  days:number;
}

export const FantasyContext = createContext<Fantasies[]>([]);

export function FantasyProvider({children}:FantasyPropsChildren){
  const [fantasies, setFantasies] = useState<Fantasies[]>([])

  useEffect(()=>{
    api.get('fantasy').then(response => setFantasies(response.data.fantasies));
  }, [])

  return(
    <FantasyContext.Provider value={fantasies}>
      {children}
    </FantasyContext.Provider>
  )
}