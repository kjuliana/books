import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {searchActions} from "../store/searchSlice";

export const useSearchActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(searchActions, dispatch);
}