import { store } from '../Redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActionCreators from '../Redux/reducers';

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
