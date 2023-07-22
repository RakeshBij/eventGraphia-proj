import React from "react";
import { useParams, Link } from "react-router-dom";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

const FullSizeImage = ({ images }) => {
  const navigate = useNavigate();

  const id = window.location.pathname.split("/").at(-1);
  const image = `http://via.placeholder.com/2000x2000?text=${id}`;
  const downloadUrl = `http://via.placeholder.com/3900x3900?text=${id}`;

  const handleDownload = () => {
    const fileName = downloadUrl.substring(downloadUrl.lastIndexOf("/") + 1);
    saveAs(downloadUrl, fileName);
  };

  return (
    <div>
      {image ? (
        <>
          <div className="full-cont">
            <img src={image} alt="image" />
          </div>
          <button className="down" onClick={handleDownload}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
          </button>
          <div
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 448 512"
              // fill="black"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
        </>
      ) : (
        <p>Image not found.</p>
      )}
    </div>
  );
};

export default FullSizeImage;
