import React from 'react';
import { connect } from 'react-redux';
import {actionCreators} from "../store";

function Todo({ text, onClickBtn }) {
    return (
      <li>
          {text}<button onClick={onClickBtn}>DEL</button>
      </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClickBtn: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo);
