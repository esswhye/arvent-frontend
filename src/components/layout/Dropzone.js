import React, { useContext, useCallback } from "react";
import CustomerContext from "../../context/customer/customerContext";
import { useDropzone } from "react-dropzone";

const Dropzone = () => {
  const customerContext = useContext(CustomerContext);
  const { user, uploadCustomerImage } = customerContext;

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    const file = acceptedFiles[0];
    console.log(file);
    console.log(user.id + " " + user.userName);

    const formData = new FormData();
    formData.append("file", file);
    uploadCustomerImage(user.id, formData);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here ...</p>
      ) : (
        <div>
          {" "}
          Drag 'n' drop profile image, or click to select profile image
        </div>
      )}
    </div>
  );
};

export default Dropzone;
