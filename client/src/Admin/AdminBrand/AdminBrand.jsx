import { useState, useEffect } from "react";
import "./AdminBrand.css";
import "../AdminTable/Admintable.css";
import { MdDelete } from "react-icons/md";
import axios from "axios";
const AdminBrand = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [brandName, setBrand] = useState("");
  const [display, setDisplay] = useState([]);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "lzpuztnj");
      formData.append("cloudName", "djvtl7yhj");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/djvtl7yhj/image/upload",
        formData
      );
      console.log("Image Upload :", response.data);
      console.log("Image Upload :", response.data.url);
      setImgUrl(response.data.url);

      let imgpath = response.data.url;
      let input = { brandName: brandName, brandImage: imgpath };

      // console.log(input);
      await axios.post("https://watch-store-p4zm.onrender.com/brand", input);
      setSelectedFile(null);
      setBrand("");
      getBrand();
    } catch (error) {
      console.error("error in upload image", error);
    }
  };

  const getBrand = async () => {
    axios
      .get("https://watch-store-p4zm.onrender.com/brandDisplay")
      .then((response) => {
        console.log(response.data);
        setDisplay(response.data);
      });
  };

  useEffect(() => {
    getBrand();
  }, []);
  let sNo = 0;

  const deleteBrand = (id) => {
    // alert(id);
    axios
      .delete(`https://watch-store-p4zm.onrender.com/deletebrand/${id}`)
      .then((response) => {
        // console.log(response.data);
        // alert(response.data);
        getBrand();
      });
  };
  return (
    <>
      <div className="admin-brand-container">
        <h1>Create Brand</h1>
        <h2>Brand Name</h2>
        <input
          type="text"
          value={brandName}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        />
        <br />
        <input type="file" name="" id="" onChange={handleFileChange} />
        <button onClick={handleUpload}>Save Brand</button>
        <table>
          <thead>
            <tr>
              <th>S/n</th>
              <th>Brandname</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {display.map((key) => {
              sNo++;
              return (
                <tr>
                  <td data-column="S/n">{sNo}</td>
                  <td data-column="Brandname">{key.brandName}</td>
                  <td data-column="Image">
                    <img
                      src={key.brandImage}
                      alt="brandImage"
                      height="80px"
                      width="80px"
                    />
                  </td>
                  <td data-column="Delete">
                    <MdDelete
                      onClick={() => {
                        deleteBrand(key._id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default AdminBrand;
