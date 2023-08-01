import axios from "axios";

export const fetchShowData = async (url, setShowData) => {
  try {
    const response = await axios.get(url);
    const data = response.data;

    if (setShowData) {
      setShowData(data);
    }

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
