import { delay } from "@/util/delay";

export default async function Page() {
  await delay(500);
  return <div>setting page</div>;
}
