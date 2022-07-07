import { createSlice } from "@reduxjs/toolkit";


const  cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity+=1
            state.products.push(action.payload)
            state.total += action.payload.price* action.payload.quantity  
        },
        removeProduct:(state,action)=>{
            const id = action.payload.id
            state.quantity-=1
            state.total -= action.payload.price* action.payload.quantity  

            // state.products = state.products.filter((product) => product.id !== id)
            
        }
    }
})

export const {addProduct,removeProduct} = cartSlice.actions
export default cartSlice.reducer