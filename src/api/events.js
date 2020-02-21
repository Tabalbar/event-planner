/**
  defines functions for the frontend to make requests to the event API.
 */

import { API_ROOT_URL } from './constants';

const GET_EVENTS_URL = `${API_ROOT_URL}/events/get`;

export async function getAllEvents() {
  let jsonResp;
  try {
    const resp = await fetch(GET_EVENTS_URL);
    jsonResp = await resp.json();
    return jsonResp;
  } catch (e) {
    throw new Error('Failed to fetch events');
  }
}
