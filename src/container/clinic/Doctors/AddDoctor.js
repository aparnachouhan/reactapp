import React from "react";
import Index from "../../../components";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  Input
} from "@material-tailwind/react";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { AddNewDoctorAction, UpdatedoctorAction } from "../../../redux/Clinic/clinicActions";
const AddDoctor = props => {
  const [open, setOpen] = useState(false);
  const [doctorMemberDetails, setdoctorMemberDetails] = React.useState(
    props.userDetails
  );
  const token = useSelector(state => state.login.accessToken);

  const dispatch = useDispatch();
  const handleOpen = () => setOpen(!open);

  const Updatedoctormember = () => {
    const formData = new URLSearchParams();
    formData.append("first_Name", doctorMemberDetails.first_Name);
    formData.append("last_Name", doctorMemberDetails.last_Name);
    formData.append("email", doctorMemberDetails.email);
    formData.append("contact", doctorMemberDetails.contact);
    formData.append("designation", doctorMemberDetails.designation);
    formData.append("experience", doctorMemberDetails.experience);
    formData.append("qualification", doctorMemberDetails.qualification);
    formData.append("specialist", doctorMemberDetails.specialist);
    

    dispatch(UpdatedoctorAction(doctorMemberDetails, token));
    handleOpen();
  };

  const AdddoctorMember = () => {
    const formData = new URLSearchParams();
    formData.append("first_Name", doctorMemberDetails.first_Name);
    formData.append("last_Name", doctorMemberDetails.last_Name);
    formData.append("email", doctorMemberDetails.email);
    formData.append("password", doctorMemberDetails.password);
    formData.append("contact", doctorMemberDetails.contact);
    formData.append("designation", doctorMemberDetails.designation);
    formData.append("experience", doctorMemberDetails.experience);
    formData.append("qualification", doctorMemberDetails.qualification);
    formData.append("specialist", doctorMemberDetails.specialist);
    formData.append("password2", doctorMemberDetails.password);
    
    dispatch(AddNewDoctorAction(formData, token));
    handleOpen();
  };

  const onChange = e => {
    setdoctorMemberDetails({
      ...doctorMemberDetails,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient">
        {props.userDetails ? "Edit User" : "Add user"}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          {props.userDetails ? "Update Doctor Member" : "Add Doctor Memeber"}
        </DialogHeader>
        <DialogBody divider>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4">
              <Input
                placeholder="First Name"
                type="text"
                color="lightBlue"
                size="regular"
                name="first_Name"
                value={doctorMemberDetails.first_Name}
                outline={true}
                onChange={onChange}
              />
              <Input
                placeholder="Last Name"
                type="text"
                color="lightBlue"
                size="regular"
                name="last_Name"
                onChange={onChange}
                value={doctorMemberDetails.last_Name}
                outline={true}
              />
            </div>
            <div className="flex flex-row space-x-4">
              <Input
                placeholder="Email"
                onChange={onChange}
                type="text"
                color="lightBlue"
                value={doctorMemberDetails.email}
                size="regular"
                name="email"
                outline={true}
              />
              <Input
                placeholder="Contact Number"
                onChange={onChange}
                type="number"
                color="lightBlue"
                size="regular"
                name="contact"
                value={doctorMemberDetails.contact}
                outline={true}
              />
            </div>
            <div className="flex flex-row space-x-4">
              <Input
                placeholder="Designation"
                onChange={onChange}
                type="text"
                color="lightBlue"
                value={doctorMemberDetails.designation}
                size="regular"
                name="designation"
                outline={true}
              />
              <Input
                placeholder="Experience"
                onChange={onChange}
                type="number"
                color="lightBlue"
                size="regular"
                name="experience"
                value={doctorMemberDetails.experience}
                outline={true}
              />
            </div>
            <div className="flex flex-row space-x-4">
              <Input
                placeholder="Qualification"
                onChange={onChange}
                type="text"
                color="lightBlue"
                value={doctorMemberDetails.qualification}
                size="regular"
                name="qualification"
                outline={true}
              />
              <Input
                placeholder="Specialist"
                onChange={onChange}
                type="text"
                color="lightBlue"
                size="regular"
                name="specialist"
                value={doctorMemberDetails.specialist}
                outline={true}
              />
            </div>
            <div className="">
              <Input
                placeholder="Password"
                type="password"
                onChange={onChange}
                color="lightBlue"
                name="password"
                value={doctorMemberDetails.password}
                size="regular"
                outline={true}
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={props.userDetails ? Updatedoctormember : AdddoctorMember}>
            <span>
              {props.userDetails ? "Update user" : "Add User"}
            </span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default AddDoctor;
