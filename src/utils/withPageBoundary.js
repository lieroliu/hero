import { Suspense } from "react";
export const withPageBoundary = (page) => {
  return <Suspense fallback={<div>Loading...</div>}>{page}</Suspense>;
};

export default withPageBoundary;
