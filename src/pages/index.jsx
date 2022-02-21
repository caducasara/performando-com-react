import {useCallback, useState} from 'react'
import {SearchResults} from '../components/searchResults'

export default function Home() {

  const [search, setSearch] = useState('')
  const [result, setResult] = useState({
    data: [],
    total: 0
  })

  async function handleSubmit(event) {
    event.preventDefault();

    if(!search.trim()){
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const products = data.map(product => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormated: formatter.format(product.price)
      }
    })

    const total = formatter.format(data.reduce((acc, product) => {
      return acc + product.price
    }, 0))

    setResult({total, data: products})
  }

  const addToWishList = useCallback(async (id) => {
    console.log(id)
  },[])

  return (
    <>
      <h1>Search</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
        <button type="submit">Buscar</button>
      </form>

      <SearchResults 
        results={result.data}
        totalPrice={result.total}
        onAddToWishList={addToWishList}
      />
    </>
  )
}
