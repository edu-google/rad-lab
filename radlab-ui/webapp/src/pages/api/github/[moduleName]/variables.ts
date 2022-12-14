import { NextApiRequest, NextApiResponse } from "next"

import { getSecretKeyValue, getGitHubVariables } from "@/utils/api"
import { envOrFail } from "@/utils/env"
const GIT_TOKEN_SECRET_KEY_NAME = envOrFail(
  "GIT_TOKEN_SECRET_KEY_NAME",
  process.env.GIT_TOKEN_SECRET_KEY_NAME,
)

const getVariablesFromGitHub = async (
  _: NextApiRequest,
  res: NextApiResponse,
  moduleName: string,
) => {
  try {
    const secret = await getSecretKeyValue(GIT_TOKEN_SECRET_KEY_NAME)
    const variables = await getGitHubVariables(moduleName, secret)
    res.status(200).json({ variables })
    return
  } catch (error: any) {
    res.status(500).send(error)
    console.error(error)
    return
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { moduleName } = req.query
    if (typeof moduleName !== "string")
      throw new Error("Module name must be a string")
    if (req.method === "GET")
      return getVariablesFromGitHub(req, res, moduleName)
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    })
  }
}

export default handler
