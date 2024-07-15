import { createHooks } from "swr-openapi";
import type * as PetStoreSchema from "./petstore";
import createClient from "openapi-fetch";

export const petStoreApi = createClient<PetStoreSchema.paths>({
  baseUrl: "http://petstore.swagger.io/v1",
});

export const { use: usePetStore, useInfinite: usePetStoreInfinite } =
  createHooks(petStoreApi, "pet-store-api");
