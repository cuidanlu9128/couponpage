import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import reducers from '../Reducers/reducer.js';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers(reducers),
    {
        Name: null,
        Logo: null,
        Description: null,
        Category: null,
        ProductLine: null,
        Quantity: null,
        Company: null,
        TargetGroup: [],
        GoodsType: [],
        ExpirationRule: null,
        Expiration: null,
        ExpiryDate: "",
        Amount: 0,
        Base: 0,
        LimitationOfQuantity: 10000,
        LimitationOfProvince: null,
        LimitationOfCity: null,
        TypeOfProducts: null,
        Weight: null
    },
    applyMiddleware(thunk)
);