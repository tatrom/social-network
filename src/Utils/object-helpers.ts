import {UserType} from "../redux/users-reducer";

export const updateObjectInArray = (items: Array<any>, itemId: number, objPropName: string, newObjProps: Object) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}