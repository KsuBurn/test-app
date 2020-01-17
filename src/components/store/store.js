import { createStore } from 'redux';

const initialState = {
  name:  '',
  lastName: '',
  patronymic: '',
  description: ''
};

const reducer = (state = initialState, action) => {
  if (action.type === 'USER'){
    return {
      name: action.name,
      lastName: action.lastName,
      patronymic: action.patronymic,
      description: action.description
    }
  }
  return state;
}

const store = createStore(reducer);

export default store;
