export const fetchVans = async () => {
  const response = await fetch("/api/vans");
  if (!response.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.vans;
};
export const fetchHostVans = async () => {
  const response = await fetch("/api/host/vans");
  if (!response.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.vans;
};
export const fetchVanDetails = async (id) => {
  const response = await fetch(`/api/host/vans/${id}`);
  if (!response.ok) {
    throw {
      message: "Failed to fetch the van details",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.vans?.[0];
};
