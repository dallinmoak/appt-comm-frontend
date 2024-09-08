const getTemplateDetails = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/templates/${id}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default getTemplateDetails;
