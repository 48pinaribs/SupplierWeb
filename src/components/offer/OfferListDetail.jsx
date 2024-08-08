import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { OffersDetails } from '../data';
import { useParams } from 'react-router-dom';

export const OfferListDetail = () => {
  const { ID } = useParams();

  const [itemdetayId, setItemdetayId] = useState('');
  const [itemdetayProduct, setItemdetayProduct] = useState('');
  const [itemdetayQuantity, setItemdetayQuantity] = useState('');
  const [itemdetayPrice, setItemdetayPrice] = useState('');
  const [itemdetayDescription, setItemdetayDescription] = useState('');

  const handleChange = (event) => {
    setItemdetayId(event.target.value);
    setItemdetayProduct(event.target.value);
    setItemdetayQuantity(event.target.value);
    setItemdetayPrice(event.target.value);
    setItemdetayDescription(event.target.value);
  };

  return (

    <div className='table' >
      <Table striped bordered hover>
        <table>
          <thead>
            <tr>
              <th className='box'>ID</th>
              <th className='box'>Ürün</th>
              <th className='box' >Miktar</th>
              <th className='box'>Ücret</th>
              <th className='box'>Açıklama</th>
            </tr>
          </thead>
          <tbody>
            {OffersDetails.filter(offer => offer.ID === parseInt(ID)).map((itemdetay, index) => {
              return (
                <tr key={index}>
                  <td className='cell'>
                    <span className="cell-header">Teklif ID: </span><input type="text" defaultValue={itemdetay.ID} id={itemdetayId} onChange={e => setItemdetayId(e.target.value)} className='input' />
                  </td>
                  <td className='cell'>
                    <span className="cell-header">Ürün  : </span><input type="text" defaultValue={itemdetay.Product} id={itemdetayProduct} onChange={e => setItemdetayProduct(e.target.value)} className='input' />
                  </td>
                  <td className='cell'>
                    <span className="cell-header">Miktar: </span><input type="text" defaultValue={itemdetay.Quantity} id={itemdetayQuantity} onChange={e => setItemdetayQuantity(e.target.value)} className='input' />
                  </td>
                  <td className='cell'>
                    <span className="cell-header">Ücret: </span><input type="text" defaultValue={itemdetay.Price} id={itemdetayPrice} onChange={e => setItemdetayPrice(e.target.value)} className='input' />
                  </td>
                  <td className='cell'>
                    <span className="cell-header">Açıklama: </span> <input type="text" defaultValue={itemdetay.Description} id={itemdetayDescription} onChange={e => setItemdetayDescription(e.target.value)} className='input' />
                  </td>
                </tr>
              )
            }
            )}
          </tbody>
        </table>
      </Table>
      <div >
        <button onClick={() => console.log("ID:", itemdetayId, "Product:", itemdetayProduct, "Quantity:", itemdetayQuantity, "Price:", itemdetayPrice, "Description:", itemdetayDescription)} style={{
          borderRadius: "8px",
          padding: "6px 1rem",
          border: "none",
          fontSize: "1.2rem",
          color: "#02a3a8",
          display: 'flex',
          alignItems: 'center'
        }} >Save</button>
      </div>

    </div>
  );
}

