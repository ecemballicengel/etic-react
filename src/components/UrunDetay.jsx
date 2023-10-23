import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UrunDetay() {
  const { id } = useParams();
  const [urunler, setUrunler] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setUrunler(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row my-4" style={{ paddingTop: "100px" }}>
          <div className="col-md-4"></div>
          <div className="col-md-4 ">
            <img
              className="rounded"
              src={urunler.thumbnail}
              alt={urunler.title}
            />
            <h3 className="display-2">{urunler.title}</h3>
            <p>{urunler.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UrunDetay;
