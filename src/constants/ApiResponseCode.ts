const ResponseCode = {
  CAN_NOT_GET_ACCESS_TOKEN() {
    return {
      Responsecode: 52,
      CodeMessage: "CAN_NOT_GET_ACCESS_TOKEN",
      Data: null,
    };
  },
  INVALID_BODY_MISSING(key_missing: string) {
    return {
      RespCode: 4,
      CodeMessage: `PARAMETER_IS_ERROR Missing Key:${key_missing}`,
      Data: null,
    };
  },
  INVALID_BODY_KEY(key_failed: string) {
    return {
      RespCode: 4,
      CodeMessage: `PARAMETER_IS_ERROR Key:${key_failed} over length 1`,
      Data: null,
    };
  },
  NO_PERMISSION_CSP() {
    return {
      RespCode: 5,
      CodeMessage: "YOUR ACCOUNT DOES NOT HAVE PERMISSION TO ACCESS THIS PAGE",
      Data: null,
    };
  },
};
export default ResponseCode;
