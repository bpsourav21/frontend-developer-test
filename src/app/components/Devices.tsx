import { useEffect } from "react";
import _ from "underscore";
import { getDevices } from "../actions/deviceActions";
import { useAppDispatch, useAppSelector } from "../hooks";
import { DeviceDto } from "../models/device";

const Devices = () => {
  const devices = useAppSelector((state) => state.device.devices);
  const dispatch = useAppDispatch();
  useEffect(() => {
    startDevicesPolling();
  }, []);

  const startDevicesPolling = () => {
    dispatch(getDevices());
    setTimeout(() => startDevicesPolling(), 5000);
  };

  return (
    <div className="Devices">
      <h3 className="">Devices</h3>
      <h3 className="">Devices count {devices.length}</h3>
      {_.map(devices, (device: DeviceDto) => {
        return <h5 key={"device_" + device.id}>{device.name}</h5>;
      })}
    </div>
  );
};

export default Devices;
