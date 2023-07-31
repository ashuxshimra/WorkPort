import React from 'react';
import NFTCollection from '../public/assets/projects/NFT Collection.png'
import Whitelist from '../public/assets/projects/Whitelist.png'
import ICO from '../public/assets/projects/ICO.png'
import DAO from '../public/assets/projects/DAO-NFT.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Tesla 2.0'
            backgroundImg={Whitelist}
            projectUrl='/whitelist'
            tech='React JS, HTML, CSS, JavaScript, Material UI ' 
          />
          <ProjectItem
            title='Full Stack Restaurant Web App'
            backgroundImg={NFTCollection}
            projectUrl='/nftcollection'
            tech='React JS / HTML / CSS / JavaScript / C# / MVC /.NET Framework, Material UI'
          />
          <ProjectItem
            title='Clubhouse 2.0'
            backgroundImg={ICO}
            projectUrl='/ico'
            tech='React JS, HTML, CSS, JavaScript, Material UI'
          />
          <ProjectItem
            title='Disney 2.0'
            backgroundImg={DAO}
            projectUrl='/nft-dao'
            tech='React JS, HTML, CSS, JavaScript, Material UI'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;