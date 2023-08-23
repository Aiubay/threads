"use client";

import { Form } from "@/components/ui/form";

interface Props {
  user: {
    id: string;
    objectID: string;
    userName: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}
const AccountProfile = ({ user, btnTitle }: Props) => {
  //   return <Form></Form>;
  return null;
};

export default AccountProfile;
