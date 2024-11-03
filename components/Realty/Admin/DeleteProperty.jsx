import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import { deleteProperty } from "@/firebase/firestore/index";

function DeleteProperty({ open, setOpen, photos, id }) {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleDelete = async () => {
    await deleteProperty(id, photos);
    console.log("deleted property");
    setOpen(!open);
  };
  return (
    <>
      <button
        onClick={handleOpen}
        className="text-white bg-[#FF0000] px-4 py-2 rounded-xl hover:bg-[#C20000]"
      >
        Delete
      </button>
      <Dialog open={open} handler={handleOpen} size="xs">
        <DialogBody className=" mx-auto w-full h-full">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <Typography variant="h4" color="blue-gray">
                Are you sure?
              </Typography>
              <IoClose fontSize={30} onClick={handleClose} />
            </div>
            <div className="flex mt-6 justify-evenly">
              <Button>Cancel</Button>
              <Button onClick={handleDelete} className="bg-[#FF0000]">
                Delete
              </Button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default DeleteProperty;
