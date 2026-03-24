import React, { useState } from 'react';

const Upload = ({ setFile }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type === "application/pdf") {
      setFileName(selectedFile.name);
      setFile(selectedFile);
    } else {
      alert("Please select a PDF file.");
    }
  };

  return (
    <div className='upload-box'>
      <input type="file" onChange={handleFileChange} />
      {fileName && <p>Selected File: {fileName}</p>}
    </div>
  );
};

export default Upload;