import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IStudent, IStudentForm } from '../../state/ducks/student/types';
import { AddStudentData, editStudentData } from '../../state/ducks/student/actions';
import moment from 'moment';

const ITEM_HEIGHT = 48;

type IProps = {
  editStudentData: (data: IStudentForm) => any;
};
const MenuButton = ({ editStudentData }: any) => {
  const [anchorEl, setAnchorEl] = useState<any>();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEdit = (data: any) => {
    let student = {
      ...data,
      date: moment().toISOString(),
    };
    setAnchorEl(null);
    AddStudentData(student);
    navigate('/AddStudent');
  };

  const handleDelete = () => {};

  return (
    <div>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleEdit}>{'Edit'}</MenuItem>
        <MenuItem onClick={handleDelete}>{'Delete'}</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuButton;
