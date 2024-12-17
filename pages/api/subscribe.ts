import { NextApiRequest, NextApiResponse } from "next";

const formDataToSubscribePayload = (formData) => {
  return {
    email_address: formData.email,
    type: "regular",
    metadata: {
      "first-name": formData.firstName,
      "last-name": formData.lastName,
      zipcode: formData.zipcode,
    },
  };
};

const subscribe = async (formData) => {
  const payload = formDataToSubscribePayload(formData);
  const response = await fetch("https://api.buttondown.com/v1/subscribers", {
    method: "POST",
    headers: {
      accept: "application/json",
      authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: true } | { success: false; error: string }>
) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "Method not allowed" });
    return;
  }

  const payload = req.body;

  try {
    await subscribe(payload);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }
}
