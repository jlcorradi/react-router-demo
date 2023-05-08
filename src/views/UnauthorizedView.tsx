import * as React from "react";
import { useNavigate } from "react-router-dom";

export interface IUnauthorizedViewProps {}

function UnauthorizedView(props: IUnauthorizedViewProps) {
  const navigate = useNavigate();

  return (
    <>
      <h1>Unauthorized</h1>
      <p>You don't have permission to access this url</p>
      <p>
        <button
          className="py-2 px-4 text-white rounded-sm bg-blue-700"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </button>
      </p>
    </>
  );
}

export { UnauthorizedView };
