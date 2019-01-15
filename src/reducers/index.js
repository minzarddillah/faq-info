import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import faqInfo from './faqInfo';

export default createStore(
  faqInfo, 
  applyMiddleware(thunk)
)