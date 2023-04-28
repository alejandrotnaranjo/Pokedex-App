import React, { createContext } from "react";

export const sortTypes = {
    ID: "ID",
    NAME: "NAME",
};

export const initialState = {
    page: 0,
    pokemons: [],
    total: 0,
    loading: false,
    notFound: false,
    searching: false,
    currentSort: sortTypes.ID
};

export const actions = {
    LOAD_POKEMONS: "LOAD_POKEMONS",
    POKEMONS_LOADED: "POKEMONS_LOADED",
    SET_PAGE: "SET_PAGE",
    SET_SORT: "SET_SORT",
    SET_SEARCHING: "SET_SEARCHING",
    SHOW_SEARCH_RESULTS: "SHOW_SEARCH_RESULTS"
};

export const PokemonContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_POKEMONS":
            return {
                ...state,
                loading: true
        };
        case actions.POKEMONS_LOADED:
            return {
                ...state,
                pokemons: action.pokemons,
                total: action.total,
                notFound: false,
                loading: false
        };
        case actions.SET_PAGE:
            return {
                ...state,
                page: action.page
            };
        case actions.SET_SEARCHING:
            return {
                ...state,
                loading: true,
                notFound: false,
                searching: true,
            };
        case actions.SHOW_SEARCH_RESULTS:
            if (!action.result) {
                return {
                    ...state,
                    notFound: true,
                    loading: false,
                    searching: false
                }
            } else {
                return {
                    pokemons: [action.result],
                    page: 0,
                    total: 1,
                    loading: false,
                    searching: false
                }
            }
        case actions.SET_SORT:
            let newPokemons = state.pokemons
            switch (action.sortType) {
                case sortTypes.ID:
                    newPokemons = [...newPokemons].sort((a, b) => a.id - b.id)
                    break
                case sortTypes.NAME:
                    newPokemons = [...newPokemons].sort((a, b) => a.name > b.name ? 1 : -1)
                    break
                default: break
            }
    console.log({
        ...state,
        pokemons: newPokemons,
        currentSort: action.sortType
    });

return {
    ...state,
    pokemons: newPokemons,
    currentSort: action.sortType
}
    default:
    return state;
    }
}

export const PokemonProvider = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState);
    return (
      <PokemonContext.Provider value={[store, dispatch]}>
        {children}
      </PokemonContext.Provider>
    )
}