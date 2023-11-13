import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section id="theerror">
      <h2>Error</h2>
      <p>I am error.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
}
