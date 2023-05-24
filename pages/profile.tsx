import React from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import { getSession, useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

const Profile = () => {
  const { data: session } = useSession();

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
      <div>My Profile</div>
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
