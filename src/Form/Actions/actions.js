

export const ACTION_SET_LOGO = 'SET_LOGO'
export const ACTION_SET_NAME = 'SET_NAME'
export const ACTION_SET_DESCRIPTION = 'SET_DESCRIPTION'
export const ACTION_SET_CATEGORY = 'SET_CATEGORY'
export const ACTION_SET_PRODUCT_LINE = 'SET_PRODUCT_LINE'
export const ACTION_SET_QUANTITY = 'SET_QUANTITY'
export const ACTION_SET_COMPANY = 'SET_COMPANY'
export const ACTION_SET_TARGET_GROUP = 'SET_TARGET_GROUP'
export const ACTION_SET_GOODS_TYPE = 'SET_GOODS_TYPE'
export const ACTION_SET_EXPIRATION_RULE = 'SET_EXPIRATION_RULE'
export const ACTION_SET_EXPIRATION = 'SET_EXPIRATION'
export const ACTION_SET_AMOUNT = 'SET_AMOUNT'
export const ACTION_SET_BASE = 'SET_BASE'
export const ACTION_SET_LIMITATION_OF_QUANTITY = 'SET_LIMITATION_OF_QUANTITY'
export const ACTION_SET_LIMITATION_OF_PROVINCE = 'SET_LIMITATION_OF_PROVINCE'
export const ACTION_SET_LIMITATION_OF_CITY = 'SET_LIMITATION_OF_CITY'
export const ACTION_SET_TYPE_OF_PRODUCTS = 'SET_TYPE_OF_PRODUCTS'
export const ACTION_SET_WEIGHT = 'SET_WEIGHT'
export const ACTION_SET_EXPIRY_DATE = 'SET_EXPIRY_DATE'

export function setName(Name) {
    return {
        type: ACTION_SET_NAME,
        payload: Name
    }
}

export function setLogo(Logo) {
    return {
        type: ACTION_SET_LOGO,
        payload: Logo
    }
}
export function setDescription(Description) {
    return {
        type: ACTION_SET_DESCRIPTION,
        payload: Description
    }
}
export function setCategory(Category) {
    return {
        type: ACTION_SET_CATEGORY,
        payload: Category
    }
}
export function setProductLine(ProductLine) {
    return {
        type: ACTION_SET_PRODUCT_LINE,
        payload: ProductLine
    }
}
export function setQuantity(Quantity) {
    return {
        type: ACTION_SET_QUANTITY,
        payload: Quantity
    }
}
export function setCompany(Company) {
    return {
        type: ACTION_SET_COMPANY,
        payload: Company
    }
}
export function setTargetGroup(TargetGroup) {
    return {
        type: ACTION_SET_TARGET_GROUP,
        payload: TargetGroup
    }
}

export function addTargetGroup(newgroup) {
    return (
        (dispatch, getState) => {
            const { TargetGroup } = getState();

            dispatch(
                setTargetGroup([
                    ...TargetGroup,
                    newgroup
                ]
            ))
        }
    )
}

export function removeTargetGroup(removegroup) {
    return (
        (dispatch, getState) => {
            const { TargetGroup } = getState();

            const newTargetGroup = TargetGroup.filter(group => {
                return group !== removegroup
            })

            dispatch(setTargetGroup(newTargetGroup));
        }
    )
}

export function setGoodsType(GoodsType) {
    return {
        type: ACTION_SET_GOODS_TYPE,
        payload: GoodsType
    }
}

export function addGoodsType(newgoodstype) {
    return (
        (dispatch, getState) => {
            const {GoodsType} = getState();

            dispatch(
                setGoodsType([...GoodsType, newgoodstype])
            )
        }
    )
}

export function removeGoodsType(removeGoodsType) {
    return (
        (dispatch, getState) => {
            const{GoodsType} = getState();
            const newgoodstype = GoodsType.filter(e => e !== removeGoodsType);
            dispatch(
                setGoodsType(newgoodstype)
            );
        }
    )
}
export function setExpirationRule(ExpirationRule) {
    return {
        type: ACTION_SET_EXPIRATION_RULE,
        payload: ExpirationRule
    }
}
export function setExpiration(Expiration) {
    return {
        type: ACTION_SET_EXPIRATION,
        payload: Expiration
    }
}
export function setAmount(Amount) {
    return {
        type: ACTION_SET_AMOUNT,
        payload: Amount
    }
}
export function setBase(Base) {
    return {
        type: ACTION_SET_BASE,
        payload: Base
    }
}
export function setLimitationOfQuantity(LimitationOfQuantity) {
    return {
        type: ACTION_SET_LIMITATION_OF_QUANTITY,
        payload: LimitationOfQuantity
    }
}
export function setLimitationOfProvince(LimitationOfProvince) {
    return {
        type: ACTION_SET_LIMITATION_OF_PROVINCE,
        payload: LimitationOfProvince
    }
}
export function setLimitationOfCity(LimitationOfCity) {
    return {
        type: ACTION_SET_LIMITATION_OF_CITY,
        payload: LimitationOfCity
    }
}
export function setTypeOfProducts(TypeOfProducts) {
    return {
        type: ACTION_SET_TYPE_OF_PRODUCTS,
        payload: TypeOfProducts
    }
}
export function setWeight(Weight) {
    return {
        type: ACTION_SET_WEIGHT,
        payload: Weight
    }
}
export function setExpiryDate(Date) {
    return {
        type: ACTION_SET_EXPIRY_DATE,
        payload: Date
    }
}