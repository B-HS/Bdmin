import { Route, Routes } from 'react-router-dom';
import AdResult from '../Ad/AdResult/AdResult';
import ItemResult from '../Ad/ItemResult/ItemResult';
import Home from '../Home/Home';
import Item from '../Item/Item/Item';
import Mesure from '../Item/Mesure/Mesure';
import Price from '../Item/Price/Price';
import Review from '../Item/Review/Review';
import Login from '../Login/Login';
import Sales from '../Sale/Sales/Sales';
import Sell from '../Sale/Sell/Sell';
import Stock from '../Stock/Stock/Stock';
import Tester from '../Tester/Tester/Tester';
import TesterDetail from '../Tester/TesterDetail/TesterDetail';
// 동적 import 모듈 구현하기 

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item" element={<Item />} />
            <Route path="/price" element={<Price />} />
            <Route path="/review" element={<Review />} />
            <Route path="/mesure" element={<Mesure />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/adresult" element={<AdResult />} />
            <Route path="/itemresult" element={<ItemResult />} />
            <Route path="/tester" element={<Tester />} />
            <Route path="/testerdetail" element={<TesterDetail />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default Router;
