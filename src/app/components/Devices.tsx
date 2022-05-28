import { useEffect } from "react";
import _ from "underscore";
import { getDevices } from "../actions/devicesActions";
import { useAppDispatch, useAppSelector } from "../hooks";
import { DeviceDto } from "../models/device";
import { DeviceState } from "../reducers/deviceReducer";

const Devices = () => {
  const deviceState: DeviceState = useAppSelector((state) => state.device);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDevices());
  }, []);

  const devices = deviceState.devices;

  console.log(devices);

  return (
    <div className="Devices">
      <h3 className="">Devices</h3>
      {_.map(devices, (device: DeviceDto) => {
        return <h5 key={"device_" + device.id}>{device.name}</h5>;
      })}
    </div>
  );
};

export default Devices;
