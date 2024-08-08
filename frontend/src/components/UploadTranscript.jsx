// src/UploadTranscript.js
import React, { useState } from 'react';
import { FaCloudUploadAlt, FaTimes, FaSpinner } from 'react-icons/fa';
import './UploadTranscript.css';
import {Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose} from './dialog'
import Upload from './Upload';

const UploadTranscript = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [queries, setQueries] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleNext = async () =>
  {
    if(!file)
    {
      return;
    }
    setLoading(true); 
    
    try
    { 
      const formData = new FormData();
      formData.append('file', file);
      formData.append('id', sessionStorage.getItem('id'));

      const response = await fetch("https://aimidserm.pythonanywhere.com/", {
        method: 'POST',
        body: formData
      })

      if (!response.ok)
      {
        throw new Error('Failed to submit form data for login');
      }

      const data = await response.json();
      if (data.status === 'success') 
      {
        setQueries(data.results.queries); // Store queries in state
        setDialogOpen(true); // Open dialog
      }
      else
      {
        alert(data.results)
      } 
    }
    catch (error) 
    {
      console.error('Error submitting form data:', error.message);
    }
    finally
    {
      setLoading(false); // Stop loading
    }
  }

  return (
    <div className="main-content">
      <Upload/>
    </div>
  );
};

export default UploadTranscript;
