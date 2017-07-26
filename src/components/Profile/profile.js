import React, {Component} from 'react';
import cx from 'classnames';
import styles from './profile.css'; 
import UserDetailsWidget from '../UserDetailsWidget';
import * as actions from '../../actions/profileActions.js';
import { connect } from 'react-redux';

class Profile extends Component {

  componentDidMount () {
    var username = this.props.match.params.username;
    if(username.substring(0, 1) === '@') {
      username = username.substring(1);
      this.props.fetchProfile({username});
    }
  }

  render () {

    const { profile } = this.props;
    const { userDetails } = profile;

    return <div>
      <UserDetailsWidget userDetails={userDetails} />
    </div> 
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

Profile = connect(
  mapStateToProps,
  actions
)(Profile);

export default Profile;
