/* eslint-disable no-console */
import React, { useEffect } from 'react';
import Page from '../../components/Page';
import axios from '../../utils/api';

export default function index() {
  const fetchData = () => {
    axios.get('/posts').then((response) => {
      console.log(response);
    }).catch((e) => {
      console.log(e);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page title="Home">
      Página Home
    </Page>
  );
}
