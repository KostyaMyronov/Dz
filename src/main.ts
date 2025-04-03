function swap<T>(a: T, b: T): [T, T] {
  return [a, b]
}

const a: number = 13
const b: number = 67

console.log(swap(a, b))



// 2
interface Product {
  id: number
  name: string
  price: number
}

const products: Product[] = [{id: 1,name: 'яблуко', price: 2}, {id: 2,name: 'груша', price: 13}, {id: 3,name: 'виноград', price: 5}]

function highest(products: Product[]): string {
  const highest = products.sort((a,b) => b.price - a.price)
  return `Продукт з найвищою цінною - ${highest[0].name}`
}

console.log(highest(products))