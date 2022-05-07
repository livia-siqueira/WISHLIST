import axios from "axios";

export async function getAllProducts() {
  const response = await axios.get(
    "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e"
  );
  return response;
}
