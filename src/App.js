import React from "react";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import "./index.css";
import { storage } from "./Firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { jsPDF } from "jspdf";
import DefaultImage from "./image/gg.jpg";

export default function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [name, setName] = useState("");
  const [imageList, setImageList] = useState([]);
  const [newImage, setNewImage] = useState();
  const [currentNewImage, setCurrentNewImage] = useState("");
  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    const imageRef = ref(storage, `images/${imageUpload.imageName + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("image uploaded");
    });
  };

  const ShootImage = () => {
    const input = document.querySelector(".container");
    // html2canvas(input).then(function (canvas) {
    //   var anchorElement = document.createElement("a");
    //   anchorElement.download = "filename.jpg";
    //   anchorElement.href = canvas.toDataURL();
    //   anchorElement.click();
    // });
    html2canvas(input).then((canvas) => {
      document.body.appendChild(canvas);
    });
  };

  const addImage = (e) => {
    setImageUpload(e.currentTarget.files[0]);
  };

  const showImage = () => {
    const currentImage = imageList[0];
    setNewImage(currentImage);
    localStorage.setItem("image", currentImage);

    setCurrentNewImage(currentImage);
  };

  useEffect(() => {
    listAll(imageListRef).then((Response) => {
      Response.items.forEach((item) => {
        getDownloadURL(item).then((url) =>
          setImageList((prev) => [...prev, url])
        );
      });
      localStorage.setItem(imageList);
      console.log(imageList);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div
          className="user-image"
          style={{
            position: "absolute",
            top: "27.2em",
            right: "3.7em",
            backgroundImage: `url(${currentNewImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "18.5em",
            height: "18.5em",
            border: "6px solid #f40c00",
            borderRadius: "50%",
          }}
        ></div>
        {/* <img className="user-image" src={newImage} alt="" /> */}
        <h3 className="name">{name}</h3>
        <div id="screen-shoot"></div>
      </div>

      <div className="form-control">
        <div id="shoot">
          <div className="input-container">
            <input type="file" onChange={addImage} />
            <input
              className="name-input"
              type="text"
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
        </div>
        <button onClick={uploadImage}>Upload image</button>
        <button onClick={showImage}> Show image</button>
        <button onClick={ShootImage}> Generate</button>
      </div>
    </>
  );
}
