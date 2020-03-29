import Stall from "../models/stall.model";
import Sell from "../models/sell.model";
import { Json } from "sequelize/types/lib/utils";
const { Op } = require("sequelize");
//

export async function getStallId(
  foodandvotesjson: string
): Promise<string | undefined> {
  let foodidarray = Object.keys(JSON.parse(foodandvotesjson));
  console.log(foodidarray);
  try {
    const stallidobject = await Sell.findAll({
      attributes: ["stallId"],
      where: {
        foodId: { [Op.in]: foodidarray }
      },
      raw: true
    });
    // contains sell entries that contain food people want
    console.log("list of stall ids are");
    console.log(JSON.stringify(stallidobject));
    return JSON.stringify(stallidobject);
  } catch (err) {
    console.log(err);
  }
}

// getStallId(datastring);

export async function getHawkerCenter(stallidsjson: string) {}
