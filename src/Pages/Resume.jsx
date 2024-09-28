import React from "react";
import Button from "@mui/joy/Button";
import { PiDownloadSimple } from "react-icons/pi";
import pdf from "../assets/Nadeem_Ch_Resume.pdf";
import toast from "react-hot-toast";
import './Resume.css'
// import { Document, Page } from "@react-pdf/renderer";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {

  const handleDownload = () => {
    
    toast.success('Resume is downloading!');
  };

  return (
    <div className="pt-16" id="resume">
    <h1 className="text-white text-center text-3xl sm:text-4xl  py-4">My Resume</h1>
      <div className="flex py-4 justify-center resume-pdf-container">
        <Document file={pdf} >
          <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
        </Document>
      </div>
      <div className="flex justify-center pt-4">
        <Button variant="outlined" onClick={handleDownload}
        sx={{
                bgcolor: "#45a049",
                color: "#fff",
                borderRadius:"20px",
                "&:hover": { bgcolor: "white", color: "black" },
              }}>
            
          <a href={pdf} download className="flex gap-1 justify-center items-center">
          <PiDownloadSimple size={19}/>Download CV
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Resume;
