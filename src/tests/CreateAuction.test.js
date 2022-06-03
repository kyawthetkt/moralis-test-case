import { render, screen } from "@testing-library/react";
import Home from "components/Home";
import { MoralisProvider } from "react-moralis";
// require('parse/node');
require('moralis/node');

let container = null;
 
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };
// const Moralis = require('moralis/node')
describe("Creatin Auction", () => {
  test("should show auction form", async () => {
    render(
      <MoralisProvider
        appId={process.env.REACT_APP_MORALIS_APP}
        serverUrl={process.env.REACT_APP_MORALIS_SERVER}
      > 
        <Home /> 
      </MoralisProvider>
    );
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
});
