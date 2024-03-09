import "./AdminProfile.css";
const img =
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D";
const AdminProfile = () => {
  return (
    <>
      <div className="AdminProfile">
        <div className="Admin-Profile-Container">
          <div className="Admin-Profile-part1">
            <img src={img} height={415} width={300} />
            <button>Upload New Photo</button>
          </div>
          <div className="Admin-Profile-part2">
            <div className="Admin-Profile-part2-container">
              <div>
                <h2 style={{textDecoration:"underline"}}>Personal Information</h2>
                <label htmlFor="Admin-profile-name">Name</label>
                <br />
                <input
                  type="text"
                  id="Admin-profile-name"
                  value="Ellyse Perry"
                />
                <br />
                <label htmlFor="Admin-profile-email">Email</label>
                <br />
                <input
                  type="text"
                  id="Admin-profile-email"
                  value="ellyse145@gmail.com"
                />
                <br />
                <label htmlFor="Admin-profile-phone">Phone</label>
                <br />
                <input
                  type="text"
                  id="Admin-profile-phone"
                  value="9758456178"
                />
                <br />
                <label htmlFor="Admin-profile-password">Password</label>
                <br />
                <input
                  type="password"
                  id="Admin-profile-password"
                  value="vhpo8567"
                />
                <br />
                <label htmlFor="Admin-profile-address">Address</label>
                <br />
                <input
                  type="text"
                  id="Admin-profile-address"
                  value="M.P. Nagar Zone-1"
                />
                <br />
                <label htmlFor="Admin-profile-address-City">City</label>
                <br />
                <input
                  type="text"
                  id="Admin-profile-address-City"
                  value="Bhopal"
                />

                <label htmlFor="Admin-profile-address-Country">Country</label>
                <br />
                <input
                  type="text"
                  id="Admin-profile-address-Country"
                  value="India"
                />
                         <label htmlFor="Admin-profile-address-zipcode">Zipcode</label>
                <br />
                <input
                  type="text"
                  id="Admin-profile-address-zipcode"
                  value="89444"
                />
                <br />
              </div>
              <div className="Admin-Profile-part2-button">
                <button>Update your profile</button>
                <button>Delete Your Account</button>
              </div>
              {/* <button>Logout</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
