import { warn, markdown } from "danger"

export default () => {
  markdown("This is a markdown comment.")
  warn("This is a warning from Peril")
}

