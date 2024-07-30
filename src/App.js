import AboutUs from './Components/AboutUs/AboutUs';
import Banner from './Components/Banner/Banner';
import Blockline from './Components/Blockline/Blockline';
import Brands from './Components/Brands/Brands';
import CompanyContact from './Components/CompanyContact/CompanyContact';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutDetailsPage from './Components/AboutUs/AboutDetailsPage';
import BlogDetailPage from './Components/Blogs/BlogDetail/BlogDetailPage03'
import Blogs from './Components/Blogs/Blogs';
import Products from './Components/Products/Products';
import ProductDetails from './Components/Products/ProductDetails';
import BlogDetailPage01 from './Components/Blogs/BlogDetail/BlogDetailPage01';
import BlogDetailPage02 from './Components/Blogs/BlogDetail/BlogDetailPage02';
import BlogDetailPage03 from './Components/Blogs/BlogDetail/BlogDetailPage03';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsAndServices from './Components/TermsAndServices/TermsAndServices';

function App() {
  return (
    <div className='w-full h-full bg-black'>
      <div className='h-full '>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/contactus' Component={Contact} />
            <Route path='/aboutdetails' Component={AboutDetailsPage} />
            <Route path='/blogs' Component={Blogs} />
            <Route path='blogs/blogdetails1' Component={BlogDetailPage01} />
            <Route path='blogs/blogdetails2' Component={BlogDetailPage02} />
            <Route path='blogs/blogdetails3' Component={BlogDetailPage03} />
            <Route path='/products' Component={Products} />
            <Route path='products/productdetails/:id' Component={ProductDetails} />
            <Route path='/privacypolicy' Component={PrivacyPolicy} />
            <Route path='/termsandservices' Component={TermsAndServices} />
          </Routes>
        <Blockline/>
        <Footer/>
      </Router>
      </div>
    </div>
  );
}

export default App;
