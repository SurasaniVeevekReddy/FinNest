import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "FinNest", // Unique app ID
  name: "Finance Platform",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
