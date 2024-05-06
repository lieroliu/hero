import { Suspense } from "react";
export const withPageBoundary = (page) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </div>
      }
    >
      {page}
    </Suspense>
  );
};

export default withPageBoundary;
