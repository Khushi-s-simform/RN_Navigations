import React from 'react';
import ProfileUI from './ProfileUi';
import { useApp } from '../../Context/AppContext';

export default function ProfileContainer() {
  const { user, updateName , theme} = useApp();

  return (
    <ProfileUI
      name={user.name}
      onChangeName={updateName}
      theme={theme}
    />
  );
}