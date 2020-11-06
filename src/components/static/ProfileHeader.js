/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Logout, GetData } from "../../redux/actions/user/userAction";

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutButtonHandler: () => dispatch(Logout()),
    getUserData: (userId, id) => dispatch(GetData(userId, id)),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.auth,
    userData: state.getUser,
  };
};

const ProfileHeader = (props) => {
  const [isToggle, setIsToggle] = useState(false);
  useEffect(() => {
    props.getUserData(props.data.data[0].id);
  }, []);
  return (
    <>
      <div
        className="profile-header-container mt-3"
        onClick={() => setIsToggle(!isToggle)}
      >
        <div className="profile-header-image"></div>
        <div className="profile-header-name">
          <p>{props.userData.data[0].data[0].username}</p>
        </div>
      </div>
      <div
        className={`profile-header-dropdown ${isToggle ? "show" : "hidden"}`}
        id="profile-header-dropdown"
      >
        <div>
          <a className="dropdown-item">Profil</a>
        </div>
        <div>
          <a onClick={props.LogoutButtonHandler} className="dropdown-item">
            Logout
          </a>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
