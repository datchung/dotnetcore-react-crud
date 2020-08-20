import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './components/common/Layout';
import HomePage from './components/home/HomePage';
import ContactPage from './components/contact/ContactPage';
import AboutPage from './components/about/AboutPage';
import NotesPage from './components/notes/NotesPage';
import CreateUpdateNotePage from './components/notes/CreateUpdateNotePage';

render(
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/notes" component={NotesPage} />
      <Route exact path="/notes/create" component={CreateUpdateNotePage} />
      <Route exact path="/notes/update/:noteId" component={CreateUpdateNotePage} />
    </Layout>
  </BrowserRouter>,
  document.getElementById('app')
);