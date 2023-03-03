import React from "react";

async function getData() {
  const res = await fetch("https://api.github.com/users/diego3g", {
    next: {
      revalidate: 30,
    },
    cache: "no-store", //por padrão usa o force-cache
  });
  return res.json();
}

export async function User() {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("");
    }, 3000)
  );
  const response = await getData();

  return <pre>{JSON.stringify(response, null, 2)}</pre>;
}
