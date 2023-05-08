function ErrorElement({ message }: { message: string }) {
  return (
    <>
      <h2>Nothing to show</h2>
      <p>{message}</p>
    </>
  );
}

export { ErrorElement };
