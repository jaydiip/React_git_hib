import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";
  import { invoicesData } from "../data";
  import { deleteInvoice } from "../data";

export default function Invoice() {
    let params = useParams();
    let navigate = useNavigate();
    let location = useLocation();
    console.log('params console', params)
    const invoice = invoicesData.find((item)=>item.number === Number(params.invoiceId));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice?.amount}</h2>
      <p>
        {invoice?.name}: {invoice?.number}
      </p>
      <p>Due Date: {invoice?.due}</p>
      <button
          onClick={() => {
            console.log('location console', location);
            console.log('navigate console', navigate)
            deleteInvoice(invoice?.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
    </main>
  )
}