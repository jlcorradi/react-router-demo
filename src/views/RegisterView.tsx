import * as React from "react";

export interface IRegisterView {}

function RegisterView(props: IRegisterView) {
  return (
    <>
      <h1>Register</h1>
      <p>Here you can register your user</p>
    </>
  );
}

export { RegisterView };
