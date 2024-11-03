import {
  Button,
  Dialog,
  Typography,
  DialogBody,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import { addPhotos, deletePhoto } from "@/firebase/firestore/index";
import { useState } from "react";

function UpdatePhotos({ open, setOpen, data, id }) {
  const [photos, setPhotos] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleDelete = async (photoToDelete) => {
    await deletePhoto(photoToDelete, id);
    setOpen(false);
  };
  const handleSubmit = async () => {
    await addPhotos(photos, id);
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleOpen}>Update photos</Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="overflow-scroll"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <DialogBody className=" mx-auto w-full h-full">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <Typography variant="h4" color="blue-gray">
                Preview
              </Typography>
              <IoClose fontSize={30} onClick={handleClose} />
            </div>

            <div className="grid grid-cols-2">
              {data &&
                data.map((photo, index) => (
                  <div key={index} className="relative">
                    <img
                      src={photo}
                      alt="photo index"
                      className="w-[85%] mx-auto rounded-xl my-2 border border-grey"
                    />
                    <IoClose
                      className="bg-white rounded-full absolute top-0 right-4"
                      fontSize={30}
                      onClick={() => handleDelete(photo)}
                    />
                  </div>
                ))}
            </div>
            <input
              type="file"
              id="photos"
              multiple
              accept="image/*"
              onChange={(e) => setPhotos([...e.target.files])}
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-neutral-400
                        file:bg-gray-50 file:border-0
                        file:me-4
                        file:py-2 file:px-4
                        dark:file:bg-neutral-700 dark:file:text-neutral-400"
            />
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default UpdatePhotos;
