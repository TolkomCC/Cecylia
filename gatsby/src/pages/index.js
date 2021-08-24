import * as React from "react";
import Layout from '../components/Layout/Layout';
import Serie from "../components/Serie/Serie"

const IndexPage = () => {
  
  return (
    <Layout myPage='Séries'>
      <Serie title='Coco2pointzéro' css='serie-container yellow'/>
      <Serie title='Emblèmes' css='serie-container rigth sky-blue'/>
      <Serie title='Marseille béguin' css='serie-container yellow'/>
      <Serie title='Le Sud' css='serie-container rigth sky-blue'/>
      <Serie title='Tarot marseillais' css='serie-container yellow'/>
      <Serie title='Cest Marseille, B' css='serie-container rigth dark-blue'/>
    </Layout>
  )
}

export default IndexPage
