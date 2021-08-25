
export const returnCode = (code: any) => {
  const retucode = parseInt(code)
  if (retucode == 400) {
    return 'error'
  } else if (retucode < 0) {
    return 'warning'
  } else {
    return 'success'
  }
}
