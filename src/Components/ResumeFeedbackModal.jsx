// Components/ResumeFeedbackModal.jsx
import { Modal, Box, Typography, Divider } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const ResumeFeedbackModal = ({ open, onClose, feedback }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>
          AI Resume Feedback
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body2">
          <strong>ATS Score:</strong> {feedback.ats}
        </Typography>
        <Typography variant="body2">
          <strong>Grammar:</strong> {feedback.grammar}
        </Typography>
        <Typography variant="body2">
          <strong>Skills Match:</strong> {feedback.skills}
        </Typography>
        <Typography variant="body2">
          <strong>Formatting:</strong> {feedback.formatting}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ResumeFeedbackModal;
