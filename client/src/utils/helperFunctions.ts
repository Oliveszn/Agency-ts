export const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  return (
    date
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })
      ////added this to make sure dates are formatted with 10.24 instead of 10/24
      .replace(/\//g, ".")
  );
};
