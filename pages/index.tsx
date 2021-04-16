import React, { useContext } from 'react';
import Head from 'next/head';
import Modal from '../components/modal/Modal';
import PageStructure from '../components/page-structure/PageStructure';
import FinalPage from '../components/final-page/FinalPage';
import SectionOne from '../components/section-structure/section-one/SectionOne';
import SectionTwo from '../components/section-structure/section-two/SectionTwo';
import SectionThree from '../components/section-structure/section-three/SectionThree';
import SectionFour from '../components/section-structure/section-four/SectionFour';
import { PrincipalContext } from '../context/PrincipalContext';
import { ModalContext } from '../context/ModalContext';

const renderSection: any = {
  'section-one': <SectionOne />,
  'section-two': <SectionTwo />,
  'section-three': <SectionThree />,
  'section-four': <SectionFour />
}


const Home = () => {
  const { section } = useContext(PrincipalContext);
  const { showModal } = useContext(ModalContext);

  return (
    <div className='p-10 flex justify-around'>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" crossOrigin="anonymous" />
      </Head>
      <PageStructure />
      {renderSection[section]}
      <FinalPage />
      {showModal && (<Modal />)}
    </div>
  )
}

export default Home;
