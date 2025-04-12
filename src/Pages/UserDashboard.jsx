import { useState } from "react";
import { Container, Typography, Box, Card, CardContent, Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDropzone } from "react-dropzone";
import { TrendingUp, AssignmentTurnedIn } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function UserDashboard() {
  // Job Applications State
  const [jobApps, setJobApps] = useState([
    { id: 1, company: "Google", position: "Software Engineer", status: "Applied" },
    { id: 2, company: "Microsoft", position: "Backend Developer", status: "Interview" }
  ]);

  // State for new job form
  const [newJob, setNewJob] = useState({ company: "", position: "", status: "" });

  // AI Rating Placeholder
  const aiRating = 85;

  // Handle input changes
  const handleInputChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  // Add new job to the list
  const addJob = () => {
    if (newJob.company && newJob.position && newJob.status) {
      setJobApps([...jobApps, { id: jobApps.length + 1, ...newJob }]);
      setNewJob({ company: "", position: "", status: "" }); // Reset form
    }
  };

  // File Upload with Drag & Drop
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: ".pdf,.doc,.docx",
    multiple: false
  });

  return (
    <Container maxWidth="md">
      {/* Dashboard Title */}
      <Box textAlign="center" py={4}>
        <Typography variant="h4" fontWeight="bold">
          Job Application Tracker Dashboard
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Stay on top of your job hunt with real-time tracking.
        </Typography>
      </Box>

      {/* Cards Section */}
      <Box display="flex" gap={3} justifyContent="center" mb={4}>
        {/* Applications Count */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <AssignmentTurnedIn color="primary" sx={{ fontSize: 60 }} />
              <Typography variant="h5" fontWeight="bold" mt={2}>
                Applications Submitted
              </Typography>
              <Typography variant="h2" fontWeight="bold" color="primary">
                {jobApps.length}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Resume Rating */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <TrendingUp color="secondary" sx={{ fontSize: 60 }} />
              <Typography variant="h5" fontWeight="bold" mt={2}>
                AI Resume Rating
              </Typography>
              <Typography variant="h2" fontWeight="bold" color="secondary">
                {aiRating}%
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Get AI Feedback
              </Button>
            </CardContent>
          </Card>
        </motion.div>
        
      </Box>
        {/* Resume Upload Section */}
        <Box textAlign="center" p={3} border="2px dashed gray" borderRadius={2} {...getRootProps()} sx={{ cursor: "pointer", mb: 3 }}>
        <input {...getInputProps()} />
        <Typography variant="h6" color="textSecondary">
          Drag & Drop Resume Here or Click to Upload
        </Typography>
        {acceptedFiles.length > 0 && (
          <Typography variant="body1" mt={2}>
            Uploaded: {acceptedFiles[0].name}
          </Typography>
        )}
      </Box>

      {/* Add Job Form */}
      <Box display="flex" gap={2} mb={3}>
        <TextField label="Company" name="company" value={newJob.company} onChange={handleInputChange} fullWidth />
        <TextField label="Position" name="position" value={newJob.position} onChange={handleInputChange} fullWidth />
        <TextField label="Status" name="status" value={newJob.status} onChange={handleInputChange} fullWidth />
        <Button variant="contained" color="primary" onClick={addJob}>
          Add Job
        </Button>
      </Box>

      {/* Job Applications Table */}
      <Box sx={{ height: 1400, mb: 4 }}>
        <DataGrid
          rows={jobApps}
          columns={[
            { field: "company", headerName: "Company", flex: 1 },
            { field: "position", headerName: "Position", flex: 1 },
            { field: "status", headerName: "Status", flex: 1 }
          ]}
          pageSize={5}
        />
      </Box>

    
    </Container>
  );
}
