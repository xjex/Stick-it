import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice(
  {
    name: "counter",
    initialState: {
      value: 0,
      id: "",
      title: "",
      description: "",
      image: "",
      likes: "",
    },
    reducers: {
      getPostData: (state, action) => {
        state.value += 1;
        state.id = action.payload.id;
        state.title = action.payload.title;
        state.description = action.payload.description;
        state.image = action.payload.image;
        state.likes = action.payload.likes;

        if (action.payload.image === null) {
        } else {
          document.getElementById("showModal").showModal();
        }

        //console.log(action.payload);
      },
      decrement: (state) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload;
      },
    },
  },
  {
    name: "count2",
    initialState: {
      value: 0,
    },
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
    },
  }
);

// Action creators are generated for each case reducer function
export const selectCount = (state) => state.counter.value;
export const { getPostData, decrement, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
