import React, {Component} from 'react';
import cx from 'classnames';
import styles from './profile.css'; 
import UserDetailsWidget from '../UserDetailsWidget';
import * as actions from '../../actions/profileActions.js';
import { connect } from 'react-redux';
import UploadWidget from '../UploadWidget';
import UserScoreWidget from '../UserScoreWidget';
import UserFeedWidget from '../UserFeedWidget';

class Profile extends Component {

  componentDidMount () {
    var username = this.props.match.params.username;
    if(username.substring(0, 1) === '@') {
      username = username.substring(1);
      this.props.fetchProfile({username});
    }
  }

  render () {

    const { profile, userState, match } = this.props;
    const { userDetails, score } = profile || {};
    const username = match.params.username.substring(1);

    if(!profile.userDetails) {
      return null;
    }

    return <div>
      <UserDetailsWidget userDetails={userDetails} />
      {userDetails && userDetails.isLoggedIn ? 
        <UserScoreWidget score={score} />
      : null}
      {userDetails && userDetails.isLoggedIn && userState.isUploadPending ? 
        <UploadWidget 
          userState={userState} 
          profile={profile} 
          username={username}
        />
      : null}
      <UserFeedWidget username={username}/>
    </div> 
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    userState: state.userState,
  };
};

Profile = connect(
  mapStateToProps,
  actions
)(Profile);

export default Profile;
