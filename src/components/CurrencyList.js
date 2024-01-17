import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyList = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);

    const changeCurrency = (e)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    }

    return (

        
         <select className="form-select" onChange={(event) => changeCurrency(event)} style={{background: "green", color: "white"}}>
                <option selected value="£" name="Pound">£ Pound</option>
                <option value="$" name="Doller">$ Dollar</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
        </select>

   

    );
};
export default CurrencyList;