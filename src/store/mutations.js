import { ADDCART} from "@/store/mutation-types";
export default {
    [ADDCART](state,value) {
        state.cartList= value
    },
    changeDelete(state) {
        state.isDelete = !state.isDelete
    },
    delete(state,value) {
        state.cartList = value
    },
    edit(state,value) {
        if (value) {
            state.edit = true
        }else {
            state.edit = !state.edit
        }
    },
    pay(state,value) {
        state.orderList = value
    },
    orderListEnd(state,value) {
        state.orderListEnd = state.orderListEnd.concat(state.orderList)
    },
    addAddress(state, value) {
        state.userAddress.map((item) => {
            if (value.isDefault) {
                item.isDefault = false
            }
        })
        state.userAddress.push(value)
    },
    editAddress(state, value) {
        state.userAddress = state.userAddress.map((item) => {
            if (value.isDefault) {
                item.isDefault = false
            }
            return item.id === value.id ? value : item
        })
    },
    deleteAddress(state, value) {
        state.userAddress = state.userAddress.filter((item) => {
            return !(item.id === value.id)
        })
        if (value.isDefault) {
            state.userAddress[0].isDefault = true
        }
    },
}