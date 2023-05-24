import React from 'react';
import type { GetServerSideProps } from 'next';
import Post, { PostProps } from '../components/Post';
import prisma from '../lib/prisma';
import MainLayout from '../components/Layouts/MainLayout';
import Header from '../components/header';

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return {
    props: { feed },
  };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <MainLayout HeaderSlot={<Header title="Public Feed" />}>
      <div className="page">
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <h1>{post.author.name}</h1>
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </MainLayout>
  );
};

export default Blog;
