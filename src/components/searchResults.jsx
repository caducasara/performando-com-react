import { List } from 'react-virtualized'
import {ProductItem} from './productItem'

export function SearchResults({results, onAddToWishList, totalPrice}) {

  function rowRenderer({index, key, style}) {
    return (
      <div key={key} style={style}>
        <ProductItem 
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

    </div>
  )
}


/*
  use memo deve ser usado em duas situações
  1. Somente em cálculos pesados
  2. Comparaçôes referenciais (quando a gente respassa aquela informação para componentes filhos)

  use callback
  utilizado apenas quando se deseja armazenar uma função
*/