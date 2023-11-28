import React from "react";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <div className="text-center">This is my : {slug}</div>;
};

export default Slug;
