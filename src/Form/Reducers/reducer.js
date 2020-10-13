import{
    ACTION_SET_LOGO,
    ACTION_SET_NAME,
    ACTION_SET_DESCRIPTION,
    ACTION_SET_CATEGORY,
    ACTION_SET_PRODUCT_LINE,
    ACTION_SET_QUANTITY,
    ACTION_SET_COMPANY,
    ACTION_SET_TARGET_GROUP,
    ACTION_SET_GOODS_TYPE,
    ACTION_SET_EXPIRATION_RULE,
    ACTION_SET_EXPIRATION,
    ACTION_SET_AMOUNT,
    ACTION_SET_BASE,
    ACTION_SET_LIMITATION_OF_QUANTITY,
    ACTION_SET_LIMITATION_OF_PROVINCE,
    ACTION_SET_LIMITATION_OF_CITY,
    ACTION_SET_TYPE_OF_PRODUCTS,
    ACTION_SET_WEIGHT,
    ACTION_SET_EXPIRY_DATE,
    setExpiryDate,
} from '../Actions/actions.js'

export default {
Name(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_NAME:
            return payload;
        default: 
    }
    return state;

},
Logo(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_LOGO:
            return payload;
        default:
    }
    return state;
},
Description(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_DESCRIPTION:
            return payload;
        default:
    }
    return state;
},
Category(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_CATEGORY:
            return payload;
        default:        
    }
    return state;
},
ProductLine(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_PRODUCT_LINE:
            return payload;
        default:            
    }
    return state;
},
Quantity(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_QUANTITY:
            return payload;
        default:        
    }
    return state;
},
Company(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_COMPANY:
            return payload;
        default:        
    }
    return state;
},
TargetGroup(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_TARGET_GROUP:
            return payload;
        default:        
    }
    return state;
},
GoodsType(state = null, action) {
    const{type, payload} = action;
    switch(type) {
        case ACTION_SET_GOODS_TYPE:
            return payload;
        default:
    }
    return state;
},
ExpirationRule(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_EXPIRATION_RULE:
            return payload;
        default:        
    }
    return state;
},
Expiration(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_EXPIRATION:
            return payload;
        default:        
    }
    return state;
},
Amount(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_AMOUNT:
            return payload;
        default:        
    }
    return state;
},
Base(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_BASE:
            return payload;
        default:            
    }
    return state;
},
LimitationOfQuantity(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_LIMITATION_OF_QUANTITY:
            return payload;
        default:        
    }
    return state;
},
LimitationOfProvince(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_LIMITATION_OF_PROVINCE:
            return payload;
        default:            
    }
    return state;
},
LimitationOfCity(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_LIMITATION_OF_CITY:
            return payload;
        default:        
    }
    return state;
},
TypeOfProducts(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_TYPE_OF_PRODUCTS:
            return payload;
        default:        
    }
    return state;
},
Weight(state = null, action) {
    const { type, payload } = action;
    switch(type) {
        case ACTION_SET_WEIGHT:
            return payload;
        default:        
    }
    return state;
},
ExpiryDate(state = null, action) {
    const {type, payload} = action;
    switch(type) {
        case ACTION_SET_EXPIRY_DATE:
            return payload;
        default:
    }
    return state;
}
}