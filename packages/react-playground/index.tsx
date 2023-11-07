/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { createRoot, useState, useEffect, type Component } from "react";

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { data, error, loading };
}

const App: Component = () => {
  const usersFetch = useFetch("https://jsonplaceholder.typicode.com/users");

  let usersView = null;

  if (usersFetch.loading) {
    usersView = <p>Loading...</p>;
  } else if (usersFetch.error) {
    usersView = <p>Error: {usersFetch.error.message}</p>;
  } else if (usersFetch.data) {
    usersView = (
      <ol>
        {usersFetch.data.map((user: any) => {
          return <li>{user.name}</li>;
        })}
      </ol>
    );
  } else {
    usersView = <p>No data</p>;
  }

  return (
    <div>
      <h1>React Playground</h1>
      <div style="display: flex">
        <div style="padding-right: 16px">
          <h2>Users</h2>
          {usersView}
        </div>
        <div style="border-left: 1px solid #0002; padding-left: 16px">
          <h2>User Detail</h2>
          <div>coming soon</div>
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById("app");

if (container) {
  const app = createRoot(container);
  app.render(App);
}
