import { Actor, HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";

import { idlFactoryIstos } from "./idls/istos.did";
import { data } from "./data";

const createAuthClient = async (): Promise<AuthClient> => {
  return await AuthClient.create();
};

const onLogoutNFID = async (): Promise<void> => {
  const authClient = await createAuthClient();
  await authClient.logout();
  console.log("logout done!!");
};

const getPrincipal = async (): Promise<string> => {
  const authClient = await createAuthClient();
  const identity: string = authClient.getIdentity().getPrincipal().toString();
  return identity;
};

const getIdentity = async (): Promise<any> => {
  const authClient = await createAuthClient();
  const identity = authClient.getIdentity();
  return identity;
};

const generateActor = async (): Promise<any> => {
  const identity = await getIdentity();
  const agent = new HttpAgent({
    identity,
    host: "https://icp0.io/",
  });
  return Actor.createActor(idlFactoryIstos, {
    agent,
    canisterId: data.canistersIds.istos.ic,
  });
};

export const service = {
  createAuthClient,
  onLogoutNFID,
  getIdentity,
  getPrincipal,
  generateActor,
};
