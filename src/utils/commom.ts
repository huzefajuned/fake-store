import { endUrlsInterface } from "../types/common";

export const BASE_URI: string = "https://fakestoreapi.com/";

export const endUrls: endUrlsInterface = {
  products: "products",
};

// handleScrollToBottom

export function isBottomReached(event: any, onBottomReached: () => void) {
  // Retrieve the target element from the event object
  const element = event.target;
  // Get the height of the visible portion of the element (viewport height)
  const clientHeight = element.clientHeight;
  // Get the number of pixels the content has been scrolled vertically
  const scrollTop = element.scrollTop;
  // Get the total height of the element's content, including the portion not visible due to scrolling
  const scrollHeight = element.scrollHeight;

  if (!element) return;

  if (scrollHeight <= clientHeight + scrollTop) {
    console.log('onBottomReached triggred !')
    onBottomReached(); // Trigger the callback
  }
}
