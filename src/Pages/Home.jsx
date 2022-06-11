import React, { useState } from "react";
import Cart from "../Components/Cart";
import NavBar from "../Components/NavBar";
import ProductTable from "../Components/ProductTable";

function Home() {
  const [open, setOpen] = useState(false);
  const [cart, updateCart] = useState([]);
  const [total, updateTotal] = useState(0);

  return (
    <main>
      <NavBar {...{ setOpen, cart }} />
      <Cart {...{ open, setOpen, cart, updateCart, total, updateTotal }} />
      <ProductTable {...{ cart, updateCart, total, updateTotal }} />
    </main>
  );
}

export default Home;
