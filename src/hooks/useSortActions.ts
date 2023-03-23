import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {sortActions} from "../store/sortSlice";

export const useSortActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(sortActions, dispatch);
}