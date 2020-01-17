import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InputData.module.css';
import { connect } from 'react-redux';

class InputData extends React.Component {
  state = {
    inputName: '',
    inputLastName: '',
    inputPatronymic: '',
    inputDescription: ''
  };

  onButtonClickSave = (inputValue) => {
    const action = {
      type: 'USER',
      name: inputValue.inputName,
      lastName: inputValue.inputLastName,
      patronymic: inputValue.inputPatronymic,
      description: inputValue.inputDescription
    };
    this.props.dispatch(action);
    this.setState({
      inputName: '',
      inputLastName: '',
      inputPatronymic: '',
      inputDescription: ''
    });
  };

  render() {

    return(
      <div className={styles.wrap}>
        <input
          type='text'
          placeholder='Фамилия'
          className={styles.last_name_entry}
          value={this.state.inputLastName}
          onChange={event => this.setState({inputLastName: event.target.value})}
        />
        <input
          type='text'
          placeholder='Имя'
          className={styles.name_entry}
          value={this.state.inputName}
          onChange={event => this.setState({inputName: event.target.value})}
        />
        <input
          type='text'
          placeholder='Отчество'
          className={styles.patronymic_entry}
          value={this.state.inputPatronymic}
          onChange={event => this.setState({inputPatronymic: event.target.value})}
        />
        <input
          type='text'
          placeholder='Описание'
          className={styles.description_entry}
          value={this.state.inputDescription}
          onChange={event => this.setState({inputDescription: event.target.value})}
        />
        <button
          className={styles.clear}
          onClick={() => this.setState({
            inputName: '',
            inputLastName: '',
            inputPatronymic: '',
            inputDescription: ''
          })}
        >
          Очистить
        </button>
        <Link to='/details'>
          <button
            className={styles.save}
            onClick={() => this.onButtonClickSave(this.state)}
          >
            Сохранить
          </button>
        </Link>
      </div>
    )
  }
};

const putStateToProps = (state) => {
  return {
    name:  state.name,
    lastName: state.lastName,
    patronymic: state.patronymic,
    description: state.description
  }
};

const WrappedInputData = connect(putStateToProps)(InputData);

export { WrappedInputData };