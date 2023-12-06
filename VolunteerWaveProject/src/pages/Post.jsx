import React, { useState } from 'react';
import '../Styles/Post.css'; // Make sure to create a CSS file with the same name
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import Header2 from '../CommonComponents/Header2';
import { useDispatch } from 'react-redux';
import { AddEvent, AddMyPosts } from '../Redux/Actions';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Typography from '@mui/material/Typography';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
  },
}));


const VolunteerForm = () => {

  const [open, setOpen] = React.useState(false);
 

  const handleOpen = (e) => {

      setOpen(true);
      e.preventDefault();
  };

  const handleClose = () => {

      setOpen(false);
      handleSubmit();
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    TITLE: '',
    DATE: '',
    TIME_SLOTS: '',
    LOCATION: '',
    AGE: '',
    DESCRIPTION: '',
    TEACHING: '',
    PHYSICAL_REQUIREMENT: '',
    CONTACT_DETAILS: {
      NAME: '',
      EMAIL: '',
      PHONE: '',
      SOCIAL_MEDIA_ID: '',
    },
    ORGANIZED_BY: '',
    PERKS: '',
  });


  const dispatch = useDispatch();

  // const eventData = useSelector((state) => state.eventReducer?.eventData);

  const handleSubmit = (e) => {
   

    // const updatetedData=[...eventData,formData];
    dispatch(AddEvent(formData));
    dispatch(AddMyPosts(formData));

    navigate('/Home/null');
    // Reset the form data after submission
    setFormData({
      TITLE: '',
      DATE: '',
      TIME_SLOTS: '',
      LOCATION: '',
      AGE: '',
      DESCRIPTION: '',
      TEACHING: '',
      PHYSICAL_REQUIREMENT: '',
      CONTACT_DETAILS: {
        NAME: '',
        EMAIL: '',
        PHONE: '',
        SOCIAL_MEDIA_ID: '',
      },
      ORGANIZED_BY: '',
      PERKS: '',
    });
  };

  const handleRadioChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, 'TEACHING': value });
  };
  const handleRadioChange1 = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, 'PHYSICAL_REQUIREMENT': value });
  };
  const handleInputChange1 = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };



  return (
    <div>
      <Header2 />

      <div>
        <div className="flex justify-center items-center ">
          <div className="form-container">
            <Link to="/Home/null">
              <button className="close-button">X</button>
            </Link>
            <form onSubmit={handleOpen}>
              <h2 className='signup-text'>CREATE VOLUNTEER OPPURTUNITY</h2>

              <div className="input-group justify-center" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px', alignItems: 'center' }}>
                <label htmlFor="title">TITLE <span style={{ color: "red" }}>*</span></label>
                <input type="text" id="TITLE" value={formData.TITLE} onChange={handleInputChange1} required />

                <label htmlFor="userId">DATE <span style={{ color: "red" }}>*</span></label>
                <input type="DATE" id="DATE" value={formData.DATE} onChange={handleInputChange1} required />

                <label htmlFor="password">TIME SLOTS<span style={{ color: "red" }}>*</span></label>
                <div>
                  <input type="text" id="TIME_SLOTS" value={formData.TIME_SLOTS} onChange={handleInputChange1} required />
                  {/* <input style={{width:'100px', fontSize:'12px'}} type="time" id="toTime" value={formData.toTime} onChange={(e) => handleInputChange(e, 'toTime')} /> */}
                </div>

                <label htmlFor="userId">LOCATION <span style={{ color: "red" }}>*</span></label>
                <input type="text" id="LOCATION" value={formData.LOCATION} onChange={handleInputChange1} required />

                <label htmlFor="password">AGE<span style={{ color: "red" }}>*</span></label>
                {/* <div> */}
                <input type="text" id="AGE" value={formData.AGE} onChange={handleInputChange1} required />
                {/* <input style={{width:'100px'}} type="number" id="AGE" value={formData.AGE} onChange={mergeAgesAndStore} />  */}
                {/* </div> */}

                <label htmlFor="userId">DESCRIPTION <span style={{ color: "red" }}>*</span></label>
                <textarea id="DESCRIPTION" value={formData.DESCRIPTION} onChange={handleInputChange1} required />

                <label htmlFor="teaching">TEACHING</label>

                <RadioGroup
                  value={formData.TEACHING}
                  onChange={handleRadioChange}
                  style={{ flexDirection: 'row', marginLeft: '20px' }}
                  id="TEACHING"
                // Adjusts the direction of Radio buttons
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>


                <label htmlFor="physical_requirement">PHYSICAL REQUIREMENT</label>
                <RadioGroup
                  value={formData.PHYSICAL_REQUIREMENT}
                  onChange={handleRadioChange1}
                  style={{ flexDirection: 'row', marginLeft: '20px' }}
                  id="PHYSICAL_REQUIREMENT"
                // Adjusts the direction of Radio buttons
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>

                <label htmlFor="userId">CONTACT DETAILS</label>
                <div></div>

                <label htmlFor="userId">Name <span style={{ color: "red" }}>*</span></label>
                <input type="text" id="NAME" value={formData.NAME} onChange={handleInputChange1} required />

                <label htmlFor="userId">Email <span style={{ color: "red" }}>*</span></label>
                <input type="text" id="EMAIL" value={formData.EMAIL} onChange={handleInputChange1} required />

                <label htmlFor="userId">Phone <span style={{ color: "red" }}>*</span></label>
                <input type="text" id="PHONE" value={formData.PHONE} onChange={handleInputChange1} required />

                <label htmlFor="userId">Social Media Id:</label>
                <input type="text" id="SOCIAL_MEDIA_ID" value={formData.SOCIAL_MEDIA_ID} onChange={handleInputChange1} />

                <label htmlFor="userId">ORGANIZED BY <span style={{ color: "red" }}>*</span></label>
                <input type="text" id="ORGANIZED_BY" value={formData.ORGANIZED_BY} onChange={handleInputChange1} />

                <label htmlFor="userId">PERKS</label>
                <input type="text" id="PERKS" value={formData.PERKS} onChange={handleInputChange1} />








              </div>
              <div className="form-footer">
                <div className='flex justify-center items-center'>
                  <Button className='flex justify-center items-center' type="submit" style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "15px", fontWeight: "Bold", marginRight: "10px", marginTop: "2px", width: "100px" }} variant="contained" > POST </Button>
                  <Button className='flex justify-center items-center' type="submit" style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "15px", fontWeight: "Bold", marginRight: "10px", marginTop: "2px", width: "100px" }} variant="contained" > CANCEL </Button>
                </div>
              </div>

            </form>

          </div>
        </div>
      </div>
      <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                        PaperProps={{
                            sx: {
                                backgroundColor: '#D5F0F8',
                                padding: '60px', // Set background color
                            },
                        }}
                    >

                        <button className="close-button" onClick={handleClose}> X</button>
                        <DialogContent>


                            <Typography gutterBottom>
                                Post created successfully !!
                            </Typography>
                        </DialogContent>
                        <DialogActions>

                            <Button autofocus className='flex justify-center items-center'
                                type="button"
                                style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "15px", fontWeight: "Bold", marginRight: "10px", marginTop: "2px", width: "100px" }}
                                variant="contained" onClick={() => {handleClose();}}> Okay </Button>

                           

                            {/* <Button autoFocus onClick={handleClose}>
            Confirm
          </Button> */}
                        </DialogActions>
                    </BootstrapDialog>
    </div>
  );
};

export default VolunteerForm;