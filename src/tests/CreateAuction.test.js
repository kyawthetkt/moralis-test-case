/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, cleanup, waitFor, act } from "@testing-library/react";
import Home from "components/Home";
import AjaxCallComponent from "components/AjaxCallComponent";
import { WINDOW_ETHEREUM } from "./utils";
// import { act } from "react-dom/test-utils";
import { MoralisProvider } from "react-moralis";

jest.mock("react-moralis", () => {
  const original = jest.requireActual("react-moralis");
  return { ...original };
});

//jest.mock("axios"); // This overwrites axios methods with jest Mock
let container = null;
window.ethereum = WINDOW_ETHEREUM;

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });
// beforeAll(() => {
//   jest.useFakeTimers();
// });

// afterAll(() => {
//   jest.useRealTimers();
// });

describe("Creatin Auction", () => {

  // test("should show auction form", async () => {
    
  // });

  test("test useffect ajax call", async () => {
      render(<AjaxCallComponent />);
      expect(await screen.findByText(/delectus aut autem/i)).toBeInTheDocument();
  });

});