import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

function FiltreliUrunList() {
  const { urunler, searchQuery, searchResults, urun, SepeteEkle } =
    useContext(AppContext);
  const { name } = useParams();
  const displayItems = searchQuery
    ? searchResults
    : urunler.filter((x) => x.category === name);
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {displayItems.map((urun) => (
            <div className="col-lg-3 col-md-4 col-sm-12 my-3" key={urun.id}>
              <div className="card m-auto rounded shadow">
                <img
                  className="card-img-top"
                  src={urun.thumbnail}
                  height={300}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{urun.title}</h5>
                  <p className="card-text">Fiyat: {urun.price} ₺</p>
                  <input
                    type="number"
                    min="1"
                    // value={quantities[item.id] || 1}
                    // onChange={(e) =>
                    //   handleQuantityChange(item.id, e.target.value)
                    // }
                    className="p-2 border rounded"
                    placeholder="Miktar"
                    style={{ fontSize: "12px" }}
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        className="btn btn-success"
                        onClick={() => SepeteEkle(urun)}
                      >
                        <i
                          className="fa-solid fa-cart-plus"
                          style={{ color: "white" }}
                        />
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button
                        className="btn btn-success"
                        onClick={() => SepeteEkle(urun)}
                      >
                        <i
                          className="fa-solid fa-heart"
                          style={{ color: "white" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FiltreliUrunList;
