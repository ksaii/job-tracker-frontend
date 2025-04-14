// Components/JobTable.jsx
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const JobTable = ({ jobs }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>
          <strong>Company</strong>
        </TableCell>
        <TableCell>
          <strong>Position</strong>
        </TableCell>
        <TableCell>
          <strong>Status</strong>
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {jobs.map((job, idx) => (
        <TableRow key={idx}>
          <TableCell>{job.company}</TableCell>
          <TableCell>{job.position}</TableCell>
          <TableCell>{job.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default JobTable;
