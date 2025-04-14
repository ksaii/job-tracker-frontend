import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import { TrendingUp, AssignmentTurnedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Custom components
import ResumeFeedbackModal from '../Components/ResumeFeedbackModal';
import UploadResumeDropzone from '../Components/UploadResumeDropzone';
import EditableJobTable from '../Components/EditableJobTable';

export default function UserDashboard() {
  // Job Applications State
  const [jobApps, setJobApps] = useState([
    { id: 1, company: 'Google', position: 'Software Engineer', status: 'Applied', siteLink: '' },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Backend Developer',
      status: 'Interview',
      siteLink: '',
    },
  ]);

  // State for new job form
  const [newJob, setNewJob] = useState({ company: '', position: '', status: '', siteLink: '' });

  const statusOptions = ['Applied', 'Interview', 'Offer', 'Rejected'];

  // Resume Upload State
  const [uploadedFile, setUploadedFile] = useState(null);

  // AI Resume Rating
  const aiRating = 85;

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);

  const aiFeedback = {
    ats: 90,
    grammar: 87,
    skills: 82,
    formatting: 88,
  };

  // Handle input changes
  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewJob(prev => ({ ...prev, [name]: value }));
  };

  // Add new job to the list
  const addJob = () => {
    if (newJob.company && newJob.position && newJob.status) {
      setJobApps([...jobApps, { id: jobApps.length + 1, ...newJob }]);
      setNewJob({ company: '', position: '', status: '', siteLink: '' }); // Reset form
    }
  };

  return (
    <Container maxWidth="md" sx={{ pb: 6 }}>
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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card sx={{ textAlign: 'center', p: 3, boxShadow: 3, borderRadius: 2 }}>
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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card sx={{ textAlign: 'center', p: 3, boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <TrendingUp color="secondary" sx={{ fontSize: 60 }} />
              <Typography variant="h5" fontWeight="bold" mt={2}>
                AI Resume Rating
              </Typography>
              <Typography variant="h2" fontWeight="bold" color="secondary">
                {aiRating}%
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 2 }}
                onClick={() => setModalOpen(true)}
              >
                Get AI Feedback
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Box>

      {/* Upload Resume */}
      <Box mb={3}>
        <UploadResumeDropzone onUpload={file => setUploadedFile(file)} />
        {uploadedFile && (
          <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
            Uploaded: {uploadedFile.name}
          </Typography>
        )}
      </Box>

      {/* Add Job Form */}
      <Box display="flex" gap={2} mb={3}>
        <TextField
          label="Company"
          name="company"
          value={newJob.company}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Position"
          name="position"
          value={newJob.position}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          select
          label="Status"
          name="status"
          value={newJob.status}
          onChange={handleInputChange}
          fullWidth
        >
          {statusOptions.map((option, idx) => (
            <MenuItem key={idx} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Site Link"
          name="siteLink"
          value={newJob.siteLink}
          onChange={handleInputChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={addJob}>
          Add Job
        </Button>
      </Box>

      {/* Job Applications Table */}
      <EditableJobTable jobs={jobApps} setJobs={setJobApps} />

      {/* Modal with Feedback */}
      <ResumeFeedbackModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        feedback={aiFeedback}
      />
    </Container>
  );
}
