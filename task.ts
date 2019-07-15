import { danger } from "danger";

export default async () => {
  const now = new Date();
  const message = `This is a scheduled task. ${now}`;
  danger.github.utils.createUpdatedIssueWithID(`id${now.getHours()}`, message, {
    open: true,
    owner: "auto-it",
    repo: "test-repo",
    title: "Test issue"
  });
};
