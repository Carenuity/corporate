const Spinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="spinner-grow text-success"
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
