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
import { AddNewStaffAction, UpdateStaffAction } from "../../../redux/Clinic/clinicActions";
const AddStaff = props => {
  const [open, setOpen] = useState(false);
  const [staffMemberDetails, setStaffMemberDetails] = React.useState(
    props.userDetails
  );
  const token = useSelector(state => state.login.accessToken);

  const dispatch = useDispatch();
  const handleOpen = () => setOpen(!open);

  const UpdateStaffmember = () => {
    const formData = new URLSearchParams();
    formData.append("first_Name", staffMemberDetails.first_Name);
    formData.append("last_Name", staffMemberDetails.last_Name);
    formData.append("email", staffMemberDetails.email);
    formData.append("contact", staffMemberDetails.contact);

    dispatch(UpdateStaffAction(formData, token));
    handleOpen();
  };

  const AddStaffMember = () => {
    const formData = new URLSearchParams();
    formData.append("first_Name", staffMemberDetails.first_Name);
    formData.append("last_Name", staffMemberDetails.last_Name);
    formData.append("email", staffMemberDetails.email);
    formData.append("password", staffMemberDetails.password);
    formData.append("contact", staffMemberDetails.contact);
    formData.append("password2", staffMemberDetails.password);

    dispatch(AddNewStaffAction(formData, token));
    handleOpen();
  };

  const onChange = e => {
    setStaffMemberDetails({
      ...staffMemberDetails,
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
          {props.userDetails ? "Update Staff Member" : "Add Staff Memeber"}
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
                value={staffMemberDetails.first_Name}
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
                value={staffMemberDetails.last_Name}
                outline={true}
              />
            </div>
            <div className="">
              <Input
                placeholder="Email"
                onChange={onChange}
                type="text"
                color="lightBlue"
                value={staffMemberDetails.email}
                size="regular"
                name="email"
                outline={true}
              />
            </div>
            <div className="">
              <Input
                placeholder="Contact Number"
                onChange={onChange}
                type="number"
                color="lightBlue"
                size="regular"
                name="contact"
                value={staffMemberDetails.contact}
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
                value={staffMemberDetails.password}
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
          <Button variant="gradient" color="green" onClick={props.userDetails ? UpdateStaffmember : AddStaffMember}>
            <span>
              {props.userDetails ? "Update user" : "Add User"}
            </span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default AddStaff;
