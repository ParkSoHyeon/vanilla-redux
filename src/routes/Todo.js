import React from 'react';
import { connect } from 'react-redux';
import { remove } from "../store";
import { Link } from "react-router-dom";

function Todo({ text, onClickBtn, id }) {
    return (
      <li>
          <Link to={`/${id}`}>
              {text}
          </Link>
          <button onClick={onClickBtn}>DEL</button>
      </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClickBtn: () => dispatch(remove(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo);
