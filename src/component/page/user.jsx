import React from "react";
import { useParams } from 'react-router-dom';
import UserDetail from "../layout/user-detail";

const User = () => {
  const {userID} = useParams();
  console.log(userID)
  return (
    <>
      <div>
        <UserDetail userID={userID}/>
      </div>
    </>
  );
};
export default User;
