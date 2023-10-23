import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();
export function AppContextProvider({ children }) {
  const [urunler, setUrunler] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sepet, setSepet] = useState([]);
  const [favoriler, setFavoriler] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setUrunler(res.data.products);
        let category = [];
        // console.log(urunler);
        res.data.products.forEach((urun) => {
          if (!category.includes(urun.category)) {
            category.push(urun.category);
          }
        });
        setCategories(category);
      })
      .catch((err) => console.log(err));
  }, []);
  // ----------------------Search----------------------------
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchQuery(inputValue);
    if (inputValue) {
      const results = urunler.filter(
        (item) =>
          item.title.toLowerCase().includes(inputValue) ||
          item.description.toLowerCase().includes(inputValue)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };
  //-----------------SepeteEkle/Cikar--------------------
  function SepeteEkle(urun) {
    const yeniSepet = [...sepet];
    const sepettekiUrun = yeniSepet.find(
      (sepetUrun) => sepetUrun.id === urun.id
    );
    if (sepettekiUrun) {
      sepettekiUrun.quantity++;
    } else {
      yeniSepet.push({ ...urun, quantity: 1 });
    }
    setSepet(yeniSepet);
  }
  function SepettenCikar(id) {
    const eskiSepet = [...sepet];
    const yeniSepet = eskiSepet.map((urun) => {
      if (urun.id === id) {
        // Eğer ürünün miktarı 1'den büyükse, bir azalt
        if (urun.quantity > 1) {
          return { ...urun, quantity: urun.quantity - 1 };
        }
        // Eğer ürünün miktarı 1 ise, ürünü sepetten tamamen çıkar
        else {
          return null;
        }
      }
      return urun;
    });
    // Ürünü tamamen çıkaranları filtrele
    const yeniSepetFiltrelenmis = yeniSepet.filter((urun) => urun !== null);

    setSepet(yeniSepetFiltrelenmis);
  }

  const toplam = sepet.reduce(
    (toplam, urun) => toplam + urun.price * urun.quantity,
    0
  );
  const sepettekiUrunlerToplami = sepet.reduce(
    (toplam, urun) => toplam + urun.quantity,
    0
  );

  //----------------FavorilereEkle/Cikar----------------------
  const favorilereEkle = (urun) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.concat(urun);

    setFavoriler(yeniFavoriler);
  };
  const favorilerdenCikar = (id) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.filter((urun) => urun.id !== id);

    setFavoriler(yeniFavoriler);
  };
  //----------------------

  return (
    <AppContext.Provider
      value={{
        urunler,
        setUrunler,
        categories,
        handleSearchChange,
        searchResults,
        searchQuery,
        sepet,
        SepeteEkle,
        SepettenCikar,
        toplam,
        sepettekiUrunlerToplami,
        favoriler,
        favorilereEkle,
        favorilerdenCikar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
