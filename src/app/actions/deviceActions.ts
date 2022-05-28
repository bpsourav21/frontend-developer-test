import { DeviceDto, DevicesResultDto } from "../models/device";
import apiService from "../service/apiService";
import { AppDispatch } from "../store";
import { Device } from "./actionTypes";

export const getDevices = () => {
  return (dispatch: AppDispatch) => {
    apiService
      .get(`/devices`)
      .then((res) => {
        const data: DeviceDto[] = (res.data as DevicesResultDto).devices;
        dispatch({ type: Device.GET_DEVICES_DATA_SUCCESS, payload: data });
      })
      .catch((e) => {
        dispatch({
          type: Device.GET_DEVICES_DATA_FAILED,
          payload: e,
        });
      });
  };
};
