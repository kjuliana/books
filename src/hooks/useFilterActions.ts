import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {filterActions} from "../store/filterSlice";


export const useFilterActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(filterActions, dispatch);
}