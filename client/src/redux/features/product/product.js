import { createAsyncThunk , createSlice  } from "@reduxjs/toolkit";

const baseUrl = process.env.REACT_APP_BASEURLAPI;

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async () => {
    const response = await fetch(baseUrl + "product");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

// export const postCourse = createAsyncThunk(
//   "courses/postCourse",
//   async (course, { dispatch }) => {
//     const response = await fetch(baseUrl + "courseEnrolled",{
//       method: "POST",
//       body: JSON.stringify(course),
//       headers: { "Content-Type": "application/json" }
//     });
    

//     if (!response.ok) {
//       return Promise.reject(response.status);
//     }
//     const data = await response.json();
//     addcourse(data);
//   }
// );

// const initialState = {
//   coursesArray: [],
//   isLoading: true,
//   errMsg: "",
// };


const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
    removeProductItem: (state, action) => {
      state.value = state.value.filter((product) => product.id !== action.payload.id);
    }
  },
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getProduct.rejected]: (state, action) => {
      state.status = 'failed'
    }
  },
});


export const { removeProductItem } = productSlice.actions;

export const selectProduct = ({ product }) => product
export default productSlice.reducer

