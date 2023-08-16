import { createClient } from "redis";

export type RedisClientType = ReturnType<typeof createClient>;

let redisClient: RedisClientType;
let isReady: boolean;

const cacheOptions = {
  url: "redis://localhost:6379",
};

async function getCache(): Promise<RedisClientType> {
  if (!isReady) {
    redisClient = createClient({
      ...cacheOptions,
    });
    redisClient.on("error", (err) => console.log(`Redis Error: ${err}`));
    redisClient.on("connect", () => console.log("Redis connected"));
    redisClient.on("reconnecting", () => console.log("Redis reconnecting"));
    redisClient.on("ready", () => {
      isReady = true;
      console.log("Redis ready!");
    });
    await redisClient.connect();
  }
  return redisClient;
}
getCache()
  .then((connection) => {
    redisClient = connection;
  })
  .catch((err) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log({ err }, "Failed to connect to Redis");
  });
export { getCache };
