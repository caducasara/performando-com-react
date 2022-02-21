//Com React sem Next usar o lazy do próprio React
import { memo, useState } from 'react'


//Com Next usar o Dynamic do Next
import dynamic from 'next/dynamic'

// import { AddToWishList } from './addToWishList'

const AddToWishList = dynamic( () => {
  return import('./addToWishList').then(mod => mod.AddToWishList)
} )

function ProductItemComponent({product, onAddToWishList}) {

  const [verific, setVerific] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormated}</strong>
      <button
        onClick={() => setVerific(true)}
      >
        Add to WishList
      </button>
      {verific &&
        <AddToWishList 
          productID={product.id}
          onAddToWishList={onAddToWishList}
          onRequestClose={setVerific}
        />}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})