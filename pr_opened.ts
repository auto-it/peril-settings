import { warn, markdown, peril } from "danger"

export default async () => {
  markdown("This is a markdown comment.")
  warn("This is a warning from Peril")
  await peril.runTask("test-task", "in 1 minute", {data: "I'm from a pr opened event"})
}

