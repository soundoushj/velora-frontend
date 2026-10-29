import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { products, getProduct } from '../data/products';

export const FREE_DELIVERY_THRESHOLD = 20000;
export const DELIVERY_FEE = 600;

const ShopContext = createContext(null);

const read = (key) => {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
};
const write = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
};

export function ShopProvider({ children }) {
  const [favorites, setFavorites] = useState(() => read('velora:favorites').filter((id) => getProduct(id)));
  const [bag, setBag] = useState(() =>
    read('velora:bag').filter((i) => i && getProduct(i.id) && Number.isInteger(i.qty) && i.qty > 0));
  const [toast, setToast] = useState(null);

  useEffect(() => write('velora:favorites', favorites), [favorites]);
  useEffect(() => write('velora:bag', bag), [bag]);

  const notify = useCallback((message) => setToast({ message, key: Date.now() }), []);
  const dismissToast = useCallback(() => setToast(null), []);

  const isFavorite = useCallback((id) => favorites.includes(id), [favorites]);
  const addFavorite = (id) => setFavorites((f) => (f.includes(id) ? f : [...f, id]));
  const removeFavorite = (id) => setFavorites((f) => f.filter((x) => x !== id));
  const toggleFavorite = (id) => {
    const p = getProduct(id);
    if (favorites.includes(id)) { removeFavorite(id); notify(`${p.name} removed from favorites`); }
    else { addFavorite(id); notify(`${p.name} saved to favorites`); }
  };

  const addToBag = (id, qty = 1) => {
    const p = getProduct(id);
    setBag((b) => b.some((i) => i.id === id)
      ? b.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i))
      : [...b, { id, qty }]);
    notify(`${p.name} added to your bag`);
  };
  const removeFromBag = (id) => setBag((b) => b.filter((i) => i.id !== id));
  const increaseQty = (id) => setBag((b) => b.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const decreaseQty = (id) => setBag((b) => b.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i)));
  const clearBag = () => setBag([]);

  const bagItems = useMemo(
    () => bag.map((i) => ({ ...i, product: getProduct(i.id) })).filter((i) => i.product), [bag]);
  const bagCount = bagItems.reduce((s, i) => s + i.qty, 0);
  const subtotal = bagItems.reduce((s, i) => s + i.qty * i.product.price, 0);
  const deliveryCost = bagItems.length === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + deliveryCost;

  const value = {
    products, favorites, isFavorite, addFavorite, removeFavorite, toggleFavorite,
    bagItems, bagCount, addToBag, removeFromBag, increaseQty, decreaseQty, clearBag,
    subtotal, deliveryCost, total, toast, notify, dismissToast,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export const useShop = () => {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within ShopProvider');
  return ctx;
};
