/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, cleanup, act } from "@testing-library/react";
import Home from "components/Home";
import { async } from "parse/lib/browser/Storage";
import { MoralisProvider } from "react-moralis";
import { WINDOW_ETHEREUM } from "./utils";
import axios from "axios";
// import { act } from "react-dom/test-utils";

// jest.mock("react-moralis", () => {
//   const original = jest.requireActual("react-moralis");
//   return { ...original };
// });
jest.mock("axios"); // This overwrites axios methods with jest Mock
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

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
// const Moralis = require('moralis/node')
describe("Creatin Auction", () => {
  // beforeAll(() => console.log("connection setup"));
  afterAll(cleanup);

  test("should show auction form", async () => {
    await act(async () => {
      render(
        <MoralisProvider
          appId={process.env.REACT_APP_MORALIS_APP}
          serverUrl={process.env.REACT_APP_MORALIS_SERVER}
        >
          <Home />
        </MoralisProvider>
      );
    });
    expect(await screen.findByText(/home page/i)).toBeInTheDocument();
  });
});
