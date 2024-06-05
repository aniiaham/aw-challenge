export const fetchData = async () => {
  const res = await fetch(
    "https://mempool.space/api/address/1wiz18xYmhRX6xStj2b9t1rwWX4GKUgpv/txs"
  );
  const response = await res.json();
  console.log(response);
  return response;
};
