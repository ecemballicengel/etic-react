import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";

import { useNavigate } from "react-router-dom";

function Favoriler() {
  const { favoriler, favorilerdenCikar, favorilereEkle } =
    useContext(AppContext);
  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id === x);
    return secim;
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="container favorilersayfa">
        {favoriler.length > 0 ? (
          <div className="row">
            {favoriler.map((urun) => (
              <div className="col-lg-3 col-md-4 col-sm-12 my-3">
                <div className="card m-auto rounded shadow">
                  <img
                    className="card-img-top"
                    src={urun.thumbnail}
                    style={{ cursor: "pointer" }}
                    height={300}
                    alt="Card image cap"
                    onClick={() => navigate(`/urundetay/${urun.id}`)}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{urun.title}</h5>
                    <p className="card-text">Fiyat: {urun.price}</p>
                    <p className="card-text">Ürün Miktarı: {urun.quantity}</p>
                    {favoriKontrol(urun.id) ? (
                      <button
                        className="btn btn-warning"
                        onClick={() => favorilerdenCikar(urun.id)}
                      >
                        FAVORİLERDEN ÇIKAR
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning"
                        onClick={() => favorilereEkle(urun.id)}
                      >
                        FAVORILERE EKLE
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            Favorilerde Ürün Bulunmamaktadır!
          </div>
        )}
      </div>
    </div>
  );
}

export default Favoriler;
