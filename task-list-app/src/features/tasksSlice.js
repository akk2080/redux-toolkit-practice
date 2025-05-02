import {createSlice} from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasksList: [],
        lastIndex: 0
    },
    reducers:{
        add: (state, action) => {
            state.tasksList.push(action.payload);
            state.lastIndex++;
        },
        remove: (state, action) => {
            state.tasksList = state.tasksList.filter((t) => t.id != action.payload.id)
        },
        toggle: (state, action) => {
            state.tasksList = state.tasksList.map((t) => {
                return t.id == action.payload.id ? {...t, status:!t.status} : t;
            });
        }
    }

});


export const{add, remove, toggle} = tasksSlice.actions;

export default tasksSlice.reducer;