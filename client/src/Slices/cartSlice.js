import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cart:[],
}
const cartSlice = createSlice({
    name:"cartSlice",
    initialState:initialState,
    reducers:{
        addtocart:(state, action)=>{
            var myitem = state.cart.filter((key)=>key.id===action.payload.id);
            if(myitem.length>=1)
            {
                alert("This product is already in the cart")
            }
            else{
                state.cart.push(action.payload);
            }
        },
        qtyIncrease:(state,action)=>{
            for(var i=0;i<state.cart.length;i++)
            {
                if(state.cart[i].id===action.payload.id)
                {
                    state.cart[i].quantity++;
                }
            }
        },
        qtyDecrease:(state, action)=>{      
            for (var i=0; i<state.cart.length; i++)
             {
                  if (state.cart[i].id===action.payload.id)
                  {
                    if(state.cart[i].quantity>1)
                    {
                        state.cart[i].quantity--;
                    }
                    else{
                        alert("Quantity must be greater than 1");
                    }
                  }
             }
        },
        proqtyDelete:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id!==action.payload.id)
        },
    }
})

export const {addtocart ,qtyIncrease , qtyDecrease, proqtyDelete} = cartSlice.actions;
export default cartSlice.reducer;
