import React, { useState } from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import { getSession, useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import TextInput from '../components/Inputs/textInput';

const Profile = () => {
  const { data: session } = useSession();

  const [name, setName] = useState('');

  if (!session) {
    return (
      <MainLayout>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <h1>My Profile</h1>
      <div>
        <TextInput
          id="profile-name"
          label="Name"
          value={name}
          onChange={setName}
        />
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: {} };
  }
  return { props: {} };
};

export default Profile;
