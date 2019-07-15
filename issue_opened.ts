import { peril, markdown } from "danger"
import { Issues } from "github-webhook-event-types"

export default async (issue: Issues) => {
  markdown("This is the initial comment.")
  await peril.runTask("test-task", "in 1 minute", null)
  markdown("This is the second comment.")
}

