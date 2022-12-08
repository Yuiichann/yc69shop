import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const Collections = () => {
  const { category } = useParams();

  return (
    <Layout>
      <>
        <h1>Collection</h1>
      </>
    </Layout>
  );
};

export default Collections;
