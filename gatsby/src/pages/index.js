import * as React from "react";
import Layout from '../components/Layout/Layout';
import Banner from "../components/Banner/Banner"
import Serie from "../components/Serie/Serie"


const IndexPage = () => {
  
  return (
    <Layout myPage='Séries'>
      <Banner title="Né du changement,"/>
      <Serie title='Coco2pointzéro' css='serie-container yellow' />
    </Layout>
  )
}

export default IndexPage
