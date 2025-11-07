import Header from './components/organisms/Header.jsx';
import Footer from './components/organisms/Footer.jsx';
import FeaturedProductSection from './components/organisms/FeaturedProductsSection.jsx';
import PromoBanner from './components/organisms/PromoBanner.jsx';
import Button from './components/atoms/Button.jsx';

const App = () => {
const products = [
  {
    name: 'Noise Wireless Headphones',
    price: 1999,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&w=600'
  },
  {
    name: 'Smart Watch Pro',
    price: 3499,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&w=600'
  },
  {
    name: 'Bluetooth Speaker',
    price: 999,
    inStock: false,
    image: 'https://images.unsplash.com/photo-1585386959984-9a71bcccb0f1?auto=format&w=600'
  },
  {
    name: 'Wireless Earbuds',
    price: 1499,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1606229152647-9d19d8ebdddc?auto=format&w=600'
  },
  {
    name: 'Gaming Mouse RGB',
    price: 1199,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&w=600'
  },
  {
    name: 'Mechanical Keyboard',
    price: 2899,
    inStock: false,
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&w=600'
  },
  {
    name: 'Full HD Webcam',
    price: 1799,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1617282214817-5e3ebc6984a2?auto=format&w=600'
  },
  {
    name: 'Portable Power Bank 10000mAh',
    price: 999,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1617692855026-e46e4dba2f74?auto=format&w=600'
  },
  {
    name: 'USB-C Fast Charger',
    price: 499,
    inStock: false,
    image: 'https://images.unsplash.com/photo-1592899898819-68fdb2c334d8?auto=format&w=600'
  },
  {
    name: 'Laptop Cooling Pad',
    price: 899,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1561154464-3a7bf1b4f3f4?auto=format&w=600'
  },
  {
    name: 'Wireless Keyboard & Mouse Combo',
    price: 1599,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&w=600'
  },
  {
    name: 'Smart LED Bulb',
    price: 599,
    inStock: false,
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&w=600'
  },
  {
    name: 'Phone Tripod Stand',
    price: 299,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1598550874178-c12d7b0d9cd0?auto=format&w=600'
  }
];


  return (
    <>
      <Header title="ShopSmart" />
      <PromoBanner />
      <FeaturedProductSection products={products} />
      <Footer year={new Date().getFullYear()} />
    </>
  );
};

export default App;