import React from 'react';
import { connect } from "react-redux";
import {getUsersSuccess} from "../../redux/actions/userActions";
import './users.scss';

class Users extends React.Component {

  componentDidMount() {
    const {getUsers} = this.props;
    getUsers();
  }

  renderUsers = () => {
    return this.props.users.map(user => (
      <ul>
        {user.name}
      </ul>
    ));
  };


  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.fetchUsers.users
  }
};

const mapDispatchToProps = () => ({
  getUsers: () => getUsersSuccess()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Users);
