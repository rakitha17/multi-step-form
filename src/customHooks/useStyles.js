import { useMediaQuery } from "@uidotdev/usehooks"

export const useStyles = () => {
  const isMobileDevice = useMediaQuery("only screen and (max-width : 899px)")

  return {
    isMobileDevice
  }
}