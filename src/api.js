export const fetchVans = async () => {
  const response = await fetch("/api/vans");
  const data = await response.json();
  return data.vans;
};
export const fetchHostVans = async () => {
  const response = await fetch("/api/host/vans");
  const data = await response.json();
  return data.vans;
};
export const fetchVanDetails = async (id) => {
  const response = await fetch(`/api/host/vans/${id}`);
  const data = await response.json();
  return data.vans?.[0];
};
