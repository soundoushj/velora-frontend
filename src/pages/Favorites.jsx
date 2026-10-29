import { useShop } from '../context/ShopContext';
import { getProduct } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import EmptyState from '../components/EmptyState';

export default function Favorites() {
  const { favorites } = useShop();
  const items = favorites.map(getProduct).filter(Boolean);
  return (
    <div className="container page-pad">
      <header className="section-head center">
        <p className="label">Favorites</p>
        <h1>Your Scent Edit</h1>
        <p className="lead">The fragrances you want to keep close.</p>
      </header>
      {items.length === 0
        ? <EmptyState title="Nothing saved just yet." text="Your next signature scent might be waiting in the collection." cta="Explore the Collection" />
        : <ProductGrid items={items} />}
    </div>
  );
}
