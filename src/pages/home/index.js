import React from 'react';
import {UnderHeader} from "../../components/underHeader.js";
import {Jumbotron} from "../../components/jumbotron.js";
import {Banner} from "../../components/banner.js";
import {JumbotronContainer} from "../../components/jumbotronContainer.js";
import {UnderGridContainer} from "../../components/underGridContainer.js";

export const HomePage = () => {
  return (
    <div>
      <UnderHeader />
      <Jumbotron />
      <Banner />
      <JumbotronContainer />
      <UnderGridContainer />
    </div>
  )
}