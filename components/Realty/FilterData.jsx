import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { MdOutlineTune } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { getFilteredPropertiess } from "../../firebase/firestore";
function FilterData({ open, setOpen, lang }) {
  const [serviceType, setServiceType] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [fromPrice, setFromPrice] = useState(null);
  const [toPrice, setToPrice] = useState(null);
  const [get, setGet] = useState();
  const handleOpen = () => setOpen(!open);
  const handleSubmit = async () => {
    const data = await getFilteredPropertiess(
      serviceType,
      propertyType,
      fromPrice,
      toPrice
    );
    setGet(data);
    // setOpen(false);
  };

  useEffect(() => {
    console.log(get);
  }, [get]);
  return (
    <>
      <Button onClick={handleOpen}>
        <MdOutlineTune className="text-2xl" />
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="overflow-scroll bg-gray-100 text-black"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <DialogHeader className="flex justify-between">
          {lang === "en" ? (
            <span> Options</span>
          ) : lang === "ge" ? (
            <span></span>
          ) : (
            <span></span>
          )}
          <IoClose onClick={handleOpen} />
        </DialogHeader>
        <DialogBody>
          <div className="p-5 text-black font-inter">
            <div>
              <h1 className="font-bold mb-4 text-lg">Transaction Type</h1>
              <div>
                <button
                  onClick={(e) => setServiceType(e.target.value)}
                  value={"sale"}
                  className={`border-2 mr-4 ${
                    serviceType === "sale" ? "bg-[#00A3FF] text-white" : " "
                  }   border-[#00A3FF] rounded-lg px-4 py-2`}
                >
                  For sale
                </button>
                <button
                  onClick={(e) => setServiceType(e.target.value)}
                  value={"rent"}
                  className={`border-2 ${
                    serviceType && serviceType === "rent"
                      ? "bg-[#00A3FF] text-white"
                      : " "
                  }   border-[#00A3FF] rounded-lg px-4 py-2`}
                >
                  For rent
                </button>
              </div>
            </div>
            <div>
              <h1 className="font-bold mb-4 text-lg">Real Estate Types</h1>
              <div>
                <button
                  onClick={(e) => setPropertyType(e.target.value)}
                  value={"apartment"}
                  className={`mx-4 border-2 ${
                    propertyType && propertyType === "apartment"
                      ? "bg-[#00A3FF] text-white"
                      : " "
                  }  border-[#00A3FF] rounded-lg px-4 py-2`}
                >
                  Apartments
                </button>
                <button
                  onClick={(e) => setPropertyType(e.target.value)}
                  value={"house"}
                  className={`mx-4 border-2 ${
                    propertyType && propertyType === "house"
                      ? "bg-[#00A3FF] text-white"
                      : " "
                  }  border-[#00A3FF] rounded-lg px-4 py-2`}
                >
                  Houses
                </button>
              </div>
            </div>
            <div>
              <h1>Price</h1>
              <input
                type="text"
                placeholder="From"
                onChange={(e) => setFromPrice(e.target.value)}
                className="border-2 mr-4 rounded-md px-4 py-2 border-[#00A3FF]"
              />
              <input
                type="text"
                placeholder="To"
                onChange={(e) => setToPrice(e.target.value)}
                className="border-2 border-[#00A3FF] px-4 py-2 rounded-md"
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <button className="border-2 border-[#00A3FF] px-4 py-2 rounded-lg">
            Clear
          </button>
          <button
            onClick={handleSubmit}
            className="text-white bg-[#00A3FF] px-4 py-2 ml-4 rounded-lg"
          >
            Search
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default FilterData;
