import Table from 'react-bootstrap/Table';
import { OrdersDetails } from '../data';
import { useParams } from 'react-router-dom';
import { useState } from 'react';



export const OrderListDetail = (props) => {

  const { ID } = useParams();

  const [itemdetayId, setItemdetayId] = useState('');
  const [itemdetayProduct, setItemdetayProduct] = useState('');
  const [itemdetayInvoiceAddress, setItemdetayInvoiceAddress] = useState('');
  const [itemdetayDeliveryAddress, setItemdetayDeliveryAddress] = useState('');
  const [itemdetayOrderAmount, setItemdetayOrderAmount] = useState('');
  const [itemdetayDescription, setItemdetayDescription] = useState('');

  const handleChange = (event) => {
    setItemdetayId(event.target.value);
    setItemdetayProduct(event.target.value);
    setItemdetayInvoiceAddress(event.target.value);
    setItemdetayDeliveryAddress(event.target.value);
    setItemdetayOrderAmount(event.target.value);
    setItemdetayDescription(event.target.value);

  };

  return (
    <div className='table' >

      <Table striped bordered hover >
        <table>
          <thead>
            <tr>
              <th className='box'>ID</th>
              <th className='box'>Ürün</th>
              <th className='box'>Fatura Adresi</th>
              <th className='box'>Teslimat Adresi</th>
              <th className='box'>Siprariş Tutarı</th>
              <th className='box'>Açıklama</th>
            </tr>
          </thead>
          <tbody>

            {OrdersDetails.filter(order => order.ID === parseInt(ID)).map((itemdetay, index) => {
              return (

                <tr key={index} >
                  <td >
                    <span className="cell-Header">Sipariş ID: </span><input type="text" defaultValue={itemdetay.ID} id={itemdetayId} onChange={e => setItemdetayId(e.target.value)} className='input' />
                  </td>
                  <td>
                    <span className="cell-Header">Ürün: </span><input type="text" defaultValue={itemdetay.Product} id={itemdetayProduct} onChange={e => setItemdetayProduct(e.target.value)} className='input' />
                  </td>
                  <td>
                    <span className="cell-Header">Fatura Adresi: </span> <input type="text" defaultValue={itemdetay.InvoiceAddress} id={itemdetayInvoiceAddress} onChange={e => setItemdetayInvoiceAddress(e.target.value)} className='input' />
                  </td>
                  <td>
                    <span className="cell-Header">Teslimat Adresi: </span> <input type="text" defaultValue={itemdetay.DeliveryAddress} id={itemdetayDeliveryAddress} onChange={e => setItemdetayDeliveryAddress(e.target.value)} className='input' />
                  </td>
                  <td>
                    <span className="cell-Header">Miktarı: </span> <input type="text" defaultValue={itemdetay.OrderAmount} id={itemdetayOrderAmount} onChange={e => setItemdetayOrderAmount(e.target.value)} className='input' />
                  </td>
                  <td>
                    <span className="cell-Header">Açıklama: </span> <input type="text" defaultValue={itemdetay.Description} id={itemdetayDescription} onChange={e => setItemdetayDescription(e.target.value)} className='input' />
                  </td>
                </tr>

              )
            }
            )
            }

          </tbody>
        </table>
      </Table>
      <div >
        <button onClick={() => console.log("ID:", itemdetayId, "Product:", itemdetayProduct, "Invoice Adress:", itemdetayInvoiceAddress, "Delivery Address:", itemdetayDeliveryAddress, "Order Amount:", itemdetayOrderAmount, "Description:", itemdetayDescription)} style={{
          borderRadius: "8px",
          padding: "6px 1rem",
          border: "none",
          fontSize: "1.2rem",
          color: "#02a3a8"
        }} >Save</button>
      </div>
    </div>
  );
}

