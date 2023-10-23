import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

function Sepet() {
  const { sepet, SepettenCikar, toplam } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <h1>Toplam Fİyat: {toplam} ₺ </h1>
          {sepet.length > 0 ? (
            sepet.map((urun) => (
              <div className="col-lg-3 col-md-4 col-sm-12 my-3">
                <div className="card m-auto rounded shadow">
                  <img
                    className="card-img-top"
                    src={urun.thumbnail}
                    height={300}
                    style={{ cursor: "pointer" }}
                    alt="Card image cap"
                    onClick={() => navigate(`/urundetay/${urun.id}`)}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{urun.title}</h5>
                    <p className="card-text">Fiyat: {urun.price}</p>
                    <p className="card-text">Ürün Miktarı: {urun.quantity}</p>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => SepettenCikar(urun.id)}
                    >
                      Sepetten Çıkar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-danger" role="alert">
              SEPETTE ÜRÜN BULUNMAMAKTADIR!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sepet;
