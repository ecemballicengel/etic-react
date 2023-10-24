import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/GlobalContext";
import Coursel from "./Coursel";

function UrunlerList() {
  const {
    urunler,
    searchResults,
    searchQuery,
    SepeteEkle,
    favorilereEkle,
    favoriKontrol,
    favorilerdenCikar,
  } = useContext(AppContext);
  const [items, setItems] = useState([]);
  //
  useEffect(() => {
    setItems(urunler);
  });
  const displayItems = searchQuery ? searchResults : items;
  return (
    <div>
      <Coursel />
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
                      {favoriKontrol(urun.id) ? (
                        <button
                          className="btn btn-success"
                          onClick={() => favorilerdenCikar(urun.id)}
                          title="Favorilerden Cikar"
                        >
                          <i
                            className="fa-solid fa-heart"
                            style={{ color: "white" }}
                          />
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          onClick={() => favorilereEkle(urun)}
                          title="Favorilere Ekle"
                        >
                          <i
                            className="fa-solid fa-heart"
                            style={{ color: "white" }}
                          />
                        </button>
                      )}
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

export default UrunlerList;
