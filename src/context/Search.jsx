import { useState, useContext ,createContext } from "react";


const SearchContenxt = createContext();



const SearchProvider= ({ children }) => {
    const [auth, setAuth] = useState({
       keyword:"",
       results:[],
    });

   
 
    return (
        <SearchContenxt.Provider value={[auth, setAuth]}>
            {children}
        </SearchContenxt.Provider>
    )
}


const useSearch = () => useContext(SearchContenxt);

export { useSearch, SearchProvider };
