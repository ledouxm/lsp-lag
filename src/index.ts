import { db } from "./db";
import fs from "fs/promises";

const main = async () => {
  const mapId = 221249536;

  const mapReference = await db
    .selectFrom("MapPositions")
    .where("id", "=", mapId)
    .selectAll()
    .execute();

  await fs.writeFile(
    "mapReference.json",
    JSON.stringify(mapReference, null, 2),
  );
  console.log("done");
};
main();
