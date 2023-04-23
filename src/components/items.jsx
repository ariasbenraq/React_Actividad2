import React from 'react';
import { Link } from 'react-router-dom';
import data from '../PostList.json';
import BasicNavbar from './Navbar';

function ItemList() {
  return (
    <>
      <BasicNavbar />
      <div>
        {
          data
            .map((val) => {
              return (
                <div className="list-group list-group-flush" key={val.id} >
                  <ul>
                    <li>{val.autor}</li>
                  </ul>
                </div>
              )
            })
        }
      </div>
      <div className='text-center mt-3'><Link to="/Filter">Home</Link></div>
    </>
  );
}

export default ItemList;