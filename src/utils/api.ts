export const fetchAPI = async (path: string) => {
  const requestUrl = `${process.env.API_URL || 'http://localhost:3000'}${path}`;
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
};

export const getGlobalData = async () => {
  const data = await fetchAPI('/api/getDefaultSeo');
  return {
    metadata: data,
  };
};
