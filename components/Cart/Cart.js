import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import BoutiqueContext from '../../BoutiqueContext';


const Cart = (props) => {
  const boutiqueContext = useContext(BoutiqueContext)
  let total = 0
  return (
    <section className="Cart">
      <h2>{props.children}</h2>
      <div>
        {/* Affichage des elements de mon panier avec CartItem et à partir de props.panierLength */}
        {
            props.panier.map((value,index)=>{
              total += value.qtePanier*boutiqueContext.articlesApp[value.idPanier].price
              return(<CartItem key={index} id={value.idPanier} qte={value.qtePanier}/>)
            })
        }
      </div>
      <div>{total} $</div>
    </section>
  );
}



export default Cart;
