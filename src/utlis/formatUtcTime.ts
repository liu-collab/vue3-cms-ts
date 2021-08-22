const FROMT_TIME_DEFAULT = "YYYY-MM-DD:HH:mm:sss"
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export default function formUtcTime(utcstring: string, format: string = FROMT_TIME_DEFAULT) {

  return dayjs.utc(utcstring).format(format)
}
