import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL_API = 'https://6715e9c033bc2bfe40bb872e.mockapi.io/task';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks',async ()=>{
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
}) 

export const addTask = createAsyncThunk('tasks/addTask', async (newTask)=>{
  const response = await fetch(URL_API,{
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(newTask)
  });
  const data = await response.json();
  return data;
})

const taskSlice = createSlice({
  name:'tasks',
  initialState:[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload; 
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
  }
})

// export const {addTask,editTask,delTask} = taskSlice.actions;
export default taskSlice.reducer;