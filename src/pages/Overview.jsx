import React from 'react';
import { IconBuilding, IconMapPin } from '@tabler/icons-react';

const Overview = () => {
  return (
    <div className="bg-slate-600 flex px-20">
      <div className="w-1/2 border flex flex-col justify-center items-center ">
        <div className="rounded-full w-[200px] h-[200px] bg-white ">
          <img src="" alt="" />
        </div>
        <h1>Thiago César dos Reis Oliveira</h1>
        <p>
          Information system student at the state university of Montes Claros.
        </p>
        <p className="flex">
          <IconBuilding /> Universidade Estadual de Montes Claros
        </p>
        <p className="flex">
          <IconMapPin /> Montes Claros
        </p>
        <p></p>
      </div>
      <div className="w-1/2 border">
        Overview
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Overview;
