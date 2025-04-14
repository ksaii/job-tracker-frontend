// Components/UploadResumeDropzone.jsx
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography } from '@mui/material';

const UploadResumeDropzone = ({ onUpload }) => {
  const onDrop = useCallback(
    acceptedFiles => {
      onUpload(acceptedFiles[0]);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed #aaa',
        p: 4,
        textAlign: 'center',
        borderRadius: 2,
        cursor: 'pointer',
        bgcolor: 'background.paper',
      }}
    >
      <input {...getInputProps()} />
      <Typography variant="body1">📄 Drag & drop your resume here, or click to upload</Typography>
    </Box>
  );
};

export default UploadResumeDropzone;
