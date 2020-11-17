/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Logout, GetData } from "../../redux/actions/user/userAction";

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutButtonHandler: () => dispatch(Logout()),
    getUserData: () => dispatch(GetData()),
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
    props.getUserData();
  }, []);
  console.log(`Fetched Success ? ${props.userData.isSuccess}`);
  return (
    <>
      <div
        className="profile-header-container mt-3"
        onClick={() => setIsToggle(!isToggle)}
      >
        {props.userData.isLoading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" color="dark" />
          </div>
        ) : (
          <>
            <div className="profile-header-image"></div>
            <div className="profile-header-name">
              <p>
                {props.userData.isSuccess === true
                  ? props.userData.data[0].data[0].username
                  : null}
              </p>
            </div>
          </>
        )}
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
