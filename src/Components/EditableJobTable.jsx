import { useState } from 'react';
import { DataGrid, GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import { Box, Select, MenuItem, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import DeleteIcon from '@mui/icons-material/Delete'; // ✅ ADD THIS
import { useEffect } from 'react';

const initialStatuses = ['Applied', 'Interview', 'Offer', 'Rejected'];

const EditableJobTable = ({ jobs, setJobs }) => {
  const [rowModesModel, setRowModesModel] = useState({});
  const [statuses] = useState(initialStatuses);
  const [lastDeletedRow, setLastDeletedRow] = useState(null);

  useEffect(() => {
    const handleKeyDown = e => {
      const isUndo = (e.ctrlKey || e.metaKey) && e.key === 'z';
      if (isUndo && lastDeletedRow) {
        e.preventDefault();
        handleUndo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lastDeletedRow]); // dependency to react to lastDeletedRow state

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const processRowUpdate = newRow => {
    const updatedRows = jobs.map(row => (row.id === newRow.id ? newRow : row));
    setJobs(updatedRows);
    return newRow;
  };

  const handleEditClick = id => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.Edit },
    });
  };

  const handleSaveClick = id => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View },
    });
  };

  const handleCancelClick = id => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const handleDeleteClick = id => () => {
    const deleted = jobs.find(row => row.id === id);
    const updatedRows = jobs.filter(row => row.id !== id);
    setJobs(updatedRows);
    setLastDeletedRow(deleted);
  };

  const handleUndo = () => {
    if (lastDeletedRow) {
      setJobs([...jobs, lastDeletedRow]);
      setLastDeletedRow(null);
    }
  };

  const columns = [
    { field: 'company', headerName: 'Company', flex: 1, editable: true },
    { field: 'position', headerName: 'Position', flex: 1, editable: true },
    { field: 'siteLink', headerName: 'Site Link', flex: 1, editable: true },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      editable: true,
      renderEditCell: params => (
        <Select
          value={params.value || ''}
          onChange={e =>
            params.api.setEditCellValue({
              id: params.id,
              field: 'status',
              value: e.target.value,
            })
          }
          fullWidth
        >
          {statuses.map((status, index) => (
            <MenuItem key={index} value={status}>
              {status}
            </MenuItem>
          ))}
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 160, // ✅ Wider fixed width to fit all 4 icons
      getActions: ({ id }) => [
        <GridActionsCellItem icon={<EditIcon />} label="Edit" onClick={handleEditClick(id)} />,
        <GridActionsCellItem icon={<SaveIcon />} label="Save" onClick={handleSaveClick(id)} />,
        <GridActionsCellItem icon={<UndoIcon />} label="Cancel" onClick={handleCancelClick(id)} />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
        />, // ✅ DELETE BUTTON HERE
      ],
    },
  ];

  return (
    <Box sx={{ height: 500, mt: 4 }}>
      <Typography variant="h6" mb={2}>
        Job Applications
      </Typography>
      <DataGrid
        rows={jobs}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        experimentalFeatures={{ newEditingApi: true }}
        disableRowSelectionOnClick
      />
      {lastDeletedRow && (
        <Box mt={2} textAlign="right">
          <button onClick={handleUndo} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            🔄 Undo Delete
          </button>
        </Box>
      )}
    </Box>
  );
};

export default EditableJobTable;
