
export const returnCode = (code: any) => {
  const retucode = parseInt(code)
  if (retucode >= 0) {
    return 'success'
  } else if (retucode < 0) {
    return 'warning'
  } else {
    return 'error'
  }
}
