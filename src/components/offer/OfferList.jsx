import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Offers } from "../data";
import { useParams } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import Tab from '../tab/Tab';



export const OfferList = (props) => {
  const { ID } = useParams();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);
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
    // Tarihlerin geçerli olup olmadığını kontrolü
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      //console.error('Geçersiz tarih formatı');
      return;
    }

    const filtered = Offers.filter(item => {
      const itemDate = new Date(item.OfferDate);
      return itemDate >= start && itemDate <= end;
    });

    setFilteredData(filtered);
    //console.log(filtered)
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
    { key: 'all', label: 'Teklifler', active: !showWaiting && !showApproved }
  ];

  const dataToDisplay = showWaiting
    ? Offers.filter(item => item.Status === "Waiting")
    : showApproved
      ? Offers.filter(item => item.Status === "Approved")
      : (filteredData.length > 0 ? filteredData : Offers);

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
          <thead>
            <tr children='tableheader'>
              <th>ID</th>
              <th>Şirket Adı</th>
              <th>Teklif Tarihi</th>
              <th style={{ width: "30%" }}>Açıklama</th>
              <th>Durum</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {dataToDisplay.map((items, index) => (
              <tr key={index}>
                <td><span className="cell-header">Teklif ID: </span> {items.ID}</td>
                <td><span className="cell-header">Şirket Adı: </span>{items.CompanyName}</td>
                <td><span className="cell-header">Teklif Tarihi: </span>{items.OfferDate}</td>
                <td><span className="cell-header">Açıklama: </span>{items.Description}</td>
                <td><span className="cell-header">Durum: </span>{items.Status}</td>
                <td><Link className='offerdetail' to={`/Offer/OfferListDetail/${items.ID}`}>Teklif Detay</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}