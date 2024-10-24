"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({email, password}: signInProps) => {
  try {
    const { account } = await createAdminClient();

    const response = await account.createEmailPasswordSession(email, password);

    return parseStringify(response);
  } catch (error) {
    console.error("Error", error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;

  try {
    const { account } = await createAdminClient();

    const newUserAcount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName}  ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUserAcount);
  } catch (error) {
    console.error("Error", error);
  }
};

export const getLoggedInUser = async() => {
  try {
    const { Account } = await createSessionClient();
    const user = await Account.get();

    return parseStringify(user);
  } catch (error) {
    console.log(error)
  }
}

export const logoutAccount = async()=>{
  try {
    const {Account} = await createSessionClient();
    cookies().delete('appwrite-session');
    await Account.deleteSession('current');
  } catch (error) {
    return null;
  }
}
