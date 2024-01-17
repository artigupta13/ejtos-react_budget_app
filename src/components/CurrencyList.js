import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyList = () => {
    const { dispatch} = useContext(AppContext);

    const changeCurrency = (e)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    }

    return (

       <div>
         <select className='form-select' onChange={(event) => changeCurrency(event)} style={{"background": "greenyellow", "color":"white", "padding-top": "10px"}}>
                <option selected value="£" name="Pound">£ Pound</option>
                <option value="$" name="Doller">$ Dollar</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
        </select>
</div> 
    );
};
export default CurrencyList;