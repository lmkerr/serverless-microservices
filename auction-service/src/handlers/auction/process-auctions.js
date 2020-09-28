import { getEndedAuctions } from "../../lib/get-ended-auctions.helper";

async function processAuctions(event, context) {
  const auctionsToClose = await getEndedAuctions();
  console.log(auctionsToClose);
}

export const handler = processAuctions;
