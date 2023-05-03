import { createSlice, configureStore } from '@reduxjs/toolkit'

const speciesSlice = createSlice({
    name: 'species',
    initialState: null,
    reducers: {
        setSpecies(state, action) {
            return action.payload;
        }
    }
})

const store = configureStore({
    reducer: {
        species: speciesSlice.reducer
    }
})

export default store
export const { setSpecies } = speciesSlice.actions
