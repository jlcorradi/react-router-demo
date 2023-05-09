import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <>
      <h1>This is public</h1>
      <p>Bellow everything that is public</p>
      <Outlet />
    </>
  );
}

export { PublicLayout };
