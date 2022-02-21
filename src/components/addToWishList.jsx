export function AddToWishList({ 
  productID,
  onAddToWishList,
  onRequestClose
}){
  return (
    <>
      <span>Deseja mesmo adicionar o produto á lista de favoritos?</span>
      <button onClick={() => onAddToWishList(productID)}>Sim</button>
      <button  onClick={() => onRequestClose(false)}>Não</button>
    </>
  )
}