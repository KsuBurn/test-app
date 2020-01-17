import React from 'react';
import store from '../store/store';
import styles from'./User.module.css'

const User = () => {
  const currentState = store.getState();
  return(
    <div className={styles.wrap}>
      <p>Фамилия:</p>
      <p>{currentState.lastName}</p>
      <p>Имя:</p>
      <p>{currentState.name}</p>
      <p>Отчество:</p>
      <p>{currentState.patronymic}</p>
      <p>Описание:</p>
      <p>{currentState.description}</p>
    </div>
  )
};

export default User;