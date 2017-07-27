import React, {Component} from 'react';
import cx from 'classnames';
import styles from './profile.css'; 
import UserDetailsWidget from '../UserDetailsWidget';
import * as actions from '../../actions/profileActions.js';
import { connect } from 'react-redux';
import UploadWidget from '../UploadWidget';
import UserScoreWidget from '../UserScoreWidget';

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
    const { userDetails, score } = profile;

    return <div>
      <UserDetailsWidget userDetails={userDetails} />
      <UserScoreWidget score={score} />
      <UploadWidget />
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
