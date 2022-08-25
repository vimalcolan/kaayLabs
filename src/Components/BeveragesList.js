import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination.js/Pagination";
import { useSelector } from "react-redux";

const BeveragesList = () => {
  const currentItems = useSelector((state) => state.pageSizeReducer);
  const currentPage = useSelector((state) => state.pageNumReducer);
  const [beveragesList, setBeveragesList] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      await axios.get(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${currentItems}`).then((res) => setBeveragesList(res.data));
    };
    fetchAPI();
  }, [currentItems, currentPage]);

  //------------------------------------ Filter -----------------------------------------
  const searchChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="table-page">
          <div className="header">
            <h1>List of Beverages</h1>
          </div>
          <div className="filter-section">
            <h5>Search By name</h5>
            <div className="custom-input">
              <input placeholder="Enter name" onChange={searchChange} type="text"/>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Sl.no</th>
                  <th>Name</th>
                  {/* <th >Tag line</th> */}
                  <th>Origin</th>
                  {/* <th >Description</th> */}
                  <th>Alcohol by Volume</th>
                  <th>International Bitterness Unit</th>
                  <th>European Brewing Convention</th>
                  <th>Standard Reference Method</th>
                  <th>pH Level</th>
                  <th>Attenuation Level</th>
                  <th>Volume</th>
                  <th>Boil Volume</th>
                  {/* <th >Mash Temperature</th> */}
                  <th>Fermentation Temperature</th>
                  {/* <th >Ingredients</th> */}
                  {/* <th >Hops</th> */}

                  {/* <th >Food Pairing</th> */}
                  {/* <th >Brewer Tips</th> */}
                </tr>
              </thead>
              <tbody>
                {beveragesList.length ? (
                  beveragesList
                    .filter((data) => {
                      if (searchName === "") {
                        return data;
                      } else if (
                        data.name
                          .toLowerCase()
                          .includes(searchName.toLowerCase())
                      ) {
                        return data;
                      }
                    })
                    .map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{data.id}</td>
                          <td className="name">{data.name}</td>
                          {/* <td>{data.tagline}</td> */}
                          <td>{data.first_brewed}</td>
                          {/* <td>{data.description}</td> */}
                          <td>{(data.abv===""||data.abv===null)?"-":(data.abv)}</td>
                          <td>{(data.ibu===""||data.ibu===null)?"-":(data.ibu)}</td>
                          <td>{(data.ebc===""||data.ebc===null)?"-":(data.ebc)}</td>
                          <td>{(data.srm===""||data.srm===null)?"-":(data.srm)}</td>
                          <td>{(data.ph===""||data.ph===null)?"-":(data.ph)}</td>
                          <td>{data.attenuation_level}</td>
                          <td>
                            {data.volume.value} {data.volume.unit}
                          </td>
                          <td>
                            {data.boil_volume.value} {data.boil_volume.unit}
                          </td>
                          {/* <td>{data.method.mash_temp.map((e)=>e.temp.value)}</td> */}
                          <td>
                            {data.method.fermentation.temp.value}{" "}
                            {data.method.fermentation.temp.unit}
                          </td>
                          {/* <td>{data.ingredients.malt.map(e=>e.name)}</td> */}
                          {/* <td>{data.ingredients.hops.map(e=>e.name)}</td> */}

                          {/* <td>{data.food_pairing.map(e=>e)}</td> */}
                          {/* <td>{data.brewers_tips}</td> */}
                        </tr>
                      );
                    })
                ) : (
                  <tr>
                    <td colSpan="12">
                      <div className="loading-gif">
                        <span className="loader">
                          <span className="loader-inner"></span>
                        </span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default BeveragesList;
