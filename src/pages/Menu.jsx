import React from 'react';

const data = [
  {
    name: 'Overview',
  },
  {
    name: 'Formation',
  },
  {
    name: 'Experience',
  },
  {
    name: 'Projects',
  },
  {
    name: 'Contacts',
  },
  ,
];

const Menu = ({ page, setPage }) => {
  React.useEffect(() => {
    console.log('---', page);
  }, [page]);

  return (
    <div className="w-full h-[100px] bg-[#515151] text-white flex items-end justify-between">
      <ul className=" w-1/2 flex px-20 justify-between mb-5">
        {data.map((item) => (
          <li key={item.name}>
            <p onClick={(e) => setPage(e.target.innerText)}>{item.name}</p>
            {page == item.name && <div className="margin border"></div>}
          </li>
        ))}
      </ul>
      <form action="" className="w-1/3">
        <input
          className="h-11 border rounded-md bg-transparent px-6 mb-2 text-white w-[500px]"
          placeholder="/"
        />
      </form>
    </div>
  );
};

export default Menu;
