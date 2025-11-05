import Header from './components/organisms/Header.jsx';
import Footer from './components/organisms/Footer.jsx';
import FeaturedProductSection from './components/organisms/FeaturedProductsSection.jsx';
import PromoBanner from './components/molecules/ProductCard.jsx';

const App = () => {
  const products = [
    {
      name: 'Noise Wireless Headphones',
      price: 1999,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Headphones'
    },
    {
      name: 'Smart Watch Pro',
      price: 3499,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Smart+Watch'
    },
    {
      name: 'Bluetooth Speaker',
      price: 999,
      inStock: false,
      image: 'https://via.placeholder.com/300x200?text=Speaker'
    },
    {
      name: 'Wireless Earbuds',
      price: 1499,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Earbuds'
    },
    {
      name: 'Gaming Mouse RGB',
      price: 1199,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Gaming+Mouse'
    },
    {
      name: 'Mechanical Keyboard',
      price: 2899,
      inStock: false,
      image: 'https://via.placeholder.com/300x200?text=Keyboard'
    },
    {
      name: 'Full HD Webcam',
      price: 1799,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Webcam'
    },
    {
      name: 'Portable Power Bank 10000mAh',
      price: 999,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Power+Bank'
    },
    {
      name: 'USB-C Fast Charger',
      price: 499,
      inStock: false,
      image: 'https://via.placeholder.com/300x200?text=Charger'
    },
    {
      name: 'Laptop Cooling Pad',
      price: 899,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Cooling+Pad'
    },
    {
      name: 'Wireless Keyboard & Mouse Combo',
      price: 1599,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Keyboard+Mouse+Combo'
    },
    {
      name: 'Smart LED Bulb',
      price: 599,
      inStock: false,
      image: 'https://via.placeholder.com/300x200?text=Smart+Bulb'
    },
    {
      name: 'Phone Tripod Stand',
      price: 299,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Tripod'
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