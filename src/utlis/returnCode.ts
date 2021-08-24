export const returnCode = (code: any) => {
  switch (code) {
    case code < 0:
      return 'warning'
      break;
    case code > 0:
      return 'success'
      break;
  }
}
