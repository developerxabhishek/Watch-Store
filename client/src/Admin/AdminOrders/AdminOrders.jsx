import "../AdminTable/Admintable.css";

const AdminOrders = () => {
  return (
    <>
      <h1 style={{ fontSize: "3rem", padding: " 10px 5%" }}>All Orders</h1>
      <table>
        <thead>
          <tr>
            <th>S/n</th>
            <th>Date</th>
            <th>Order ID</th>
            <th>Order Amount</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="S/n">1</td>
            <td data-column="Date">Wed Jan 10 2024 at 3:09:22PM</td>
            <td data-column="Order ID">65djehuu565500ba855255djsjf</td>
            <td data-column="Order Amount">INR 100</td>
            <td data-column="Order Status">
              <select name="" id="admin-order-status">
                <option value="Processing" style={{ color: "red" }}>
                  Order Placed..
                </option>
                <option value="Processing" style={{ color: "orange" }}>
                  Processing..
                </option>
                <option value="Processing" style={{ color: "green" }}>
                  Delivered..
                </option>
              </select>
            </td>
          </tr>

          <tr>
            <td data-column="S/n">2</td>
            <td data-column="Date">Wed Jan 25 2024 at 7:09:22PM</td>
            <td data-column="Order ID">95djehdluu50ba855255djsjf</td>
            <td data-column="Order Amount">INR 700</td>
            <td data-column="Order Status">
              <select name="" id="admin-order-status">
                <option value="Processing" style={{ color: "red" }}>
                  Order Placed..
                </option>
                <option value="Processing" style={{ color: "orange" }}>
                  Processing..
                </option>
                <option value="Processing" style={{ color: "green" }}>
                  Delivered..
                </option>
              </select>
            </td>
          </tr>

          <tr>
            <td data-column="S/n">3</td>
            <td data-column="Date">Wed Jan 15 2024 at 8:09:22PM</td>
            <td data-column="Order ID">95djehdluu50ba855255djsjf</td>
            <td data-column="Order Amount">INR 4000</td>
            <td data-column="Order Status">
              <select name="" id="admin-order-status">
                <option value="Processing" style={{ color: "red" }}>
                  Order Placed..
                </option>
                <option value="Processing" style={{ color: "orange" }}>
                  Processing..
                </option>
                <option value="Processing" style={{ color: "green" }}>
                  Delivered..
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdminOrders;
