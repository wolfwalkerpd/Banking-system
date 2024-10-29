'use client'
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from "react-plaid-link";
import { useRouter } from "next/navigation";
import { createLinkToken } from "@/lib/actions/user.acations";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const router = useRouter();

  const [token, setToken] = useState("");
  useEffect(() => {
    const getLinkToken = async () =>{
        const data = await createLinkToken(user);

        setToken(data?.linkToken);
    }
  });
  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: String) => {
    // await exchangePublictoken({
    //     publicToken:public_token,
    //     user,
    // })
    router.push('/');
  }, [user]);
  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };
  const {open, ready} = usePlaidLink(config);
  return (
    <>
      {variant === "primary" ? (
        <Button className="plaidlink-primary"
        onClick={()=>open()}
        disabled={!ready}
        >Connect bank</Button>
      ) : variant === "ghost" ? (
        <Button>Connect bank</Button>
      ) : (
        <Button>COnnect bank</Button>
      )}
    </>
  );
};

export default PlaidLink;