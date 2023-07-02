import './Error.scss';

interface ErrorProps {
  errorStatus: boolean;
  errorMessage: string;
}
const Error = ({ errorStatus, errorMessage }: ErrorProps) => {
  return (
    <div className={errorStatus ? 'error error-active' : 'error'}>
      {errorMessage}
    </div>
  );
};

export default Error;
