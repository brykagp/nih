// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const login = async (email: string, password: string) => {
  if (email === "cdc@example.com") return "cdc";
  if (email === "pharmacies@example.com") return "pharmacies";
  if (email === "labs@example.com") return "labs";
  if (email === "hospital@example.com") return "hospital";
  if (email === "patient@example.com") return "patient";
  if (email === "healthcare@example.com") return "healthcare"
  return null;
};











// export const login = async (email: string, password: string) => {
//     if (email === "cdc@example.com") return "cdc";
//     if (email === "pharmacies@example.com") return "pharmacies";
//     if (email === "labs@example.com") return "labs";
//     if (email === "individual@example.com") return "individual";
//     return null;
//   };
  