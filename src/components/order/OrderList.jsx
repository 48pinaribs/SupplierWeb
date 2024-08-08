import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Orders } from "../data";
import React from 'react';
import { useState } from 'react';
import Tab from '../tab/Tab';


export const OrderList = (props) => {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [waitingData, setWaitingData] = useState([]);
  const [showWaiting, setShowWaiting] = useState(false);
  const [showApproved, setShowApproved] = useState(false);

  const handleWait = () => {
    setShowWaiting(true);
    setShowApproved(false);
  };


  const handleApproved = () => {
    setShowApproved(true);
    setShowWaiting(false);
  };

  const handleFilter = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    //console.log(start)
    //console.log(end)
    // Tarihlerin geçerli olup olmadığını kontrol edin
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      console.error('Geçersiz tarih formatı');
      return;
    }

    const filtered = Orders.filter(item => {
      const itemDate = new Date(item.OrderDate);
      return itemDate >= start && itemDate <= end;
    });

    setFilteredData(filtered);
    // console.log(filtered)
    setShowWaiting(false);
    setShowApproved(false);
  };


  const handleTabClick = (key) => {
    if (key === 'waiting') {
      handleWait();
    } else if (key === 'approved') {
      handleApproved();
    } else {
      setShowWaiting(false);
      setShowApproved(false);
    }
  };

  const tabs = [
    { key: 'waiting', label: 'Bekleyen', active: showWaiting },
    { key: 'approved', label: 'Tamamlanan', active: showApproved },
    { key: 'all', label: 'Siparişler', active: !showWaiting && !showApproved }
  ];


  const dataToDisplay = showWaiting
    ? Orders.filter(item => item.Status === "Waiting")
    : showApproved
      ? Orders.filter(item => item.Status === "Approved")
      : (filteredData.length > 0 ? filteredData : Orders);

  return (
    <div>
      <input
        type="Date"
        value={startDate}
        className='date1'
        onChange={(e) => setStartDate(e.target.value)}

      />
      <input
        type="Date"
        value={endDate}
        className='date2'
        onChange={(e) => setEndDate(e.target.value)}
      />

      <button className='filterbtn' onClick={handleFilter}>Filtrele</button>

      <div >
        <Tab tabs={tabs} onTabClick={handleTabClick} />
      </div>

      <div className='table'>
        <Table striped bordered hover>
          <thead >
            <tr children='tableheader'>
              <th>ID</th>
              <th style={{ width: "30%" }}>Açıklama </th>
              <th>Miktar</th>
              <th>Birim</th>
              <th>Birim Fiyat</th>
              <th>Sipariş Tarihi</th>
              <th>Sipariş Durumu</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            {dataToDisplay.map((items, index) => (
              <tr key={index}>
                <td><span className="cell-header">Sipariş ID: </span> {items.ID}</td>
                <td><span className="cell-header">Açıklama: </span> {items.Description}</td>
                <td><span className="cell-header">Miktar: </span> {items.Quantity}</td>
                <td><span className="cell-header">Birim: </span> {items.Unit}</td>
                <td><span className="cell-header">Birim Fiyat: </span> {items.UnitPrice}</td>
                <td><span className="cell-header">Sipariş Tarihi: </span> {items.OrderDate}</td>
                <td><span className="cell-header">Sipariş Durumu: </span> {items.Status}</td>
                <td><Link className='offerdetail' to={`/Order/OrderListDetail/${items.ID}`}>Sipariş Detay</Link></td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>
    </div>
  );

}