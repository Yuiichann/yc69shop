import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';

const Search = () => {
  const [searchParams] = useSearchParams();

  let keyword = searchParams.get('k');

  return (
    <Layout>
      <h1>Search: {keyword && keyword}</h1>
    </Layout>
  );
};

export default Search;
